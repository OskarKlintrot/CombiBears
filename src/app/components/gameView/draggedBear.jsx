import React, { PropTypes } from 'react'
import BasicBear from '../shared/basicBear'
import { DragLayer } from 'react-dnd'
import Radium from 'radium'

const styles = {
  position: 'fixed',
  pointerEvents: 'none',
  zIndex: 100,
  left: 0,
  top: 0,
  width: '121px',
  '@media (min-width: 900px)': {
    width: '142px'
  },
  '@media (min-width: 620px) and (max-width: 767px)': {
    width: '95px'
  },
  '@media (min-width: 480px) and (max-width: 619px)': {
    width: '71px'
  },
  '@media (max-width: 479px)': {
    width: '21%'
  }

}

const collect = ( monitor ) => {

  // Get source item, where the dragged item came from.
  const sourceItem = monitor.getItem()

  // Get bearKey from source item if possible
  const bearKey = sourceItem ? sourceItem.props.bearKey : null

  return {
    item: monitor.getItem(),
    itemType: monitor.getItemType(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging(),
    bearKey: bearKey
  }
}

@Radium
class DraggedBear extends React.Component {

  constructor( props ) {
    super( props )

    this.prevXPos = null
    this.posFrameCount = 0
    this.prevAngleInDegrees = 0
  }

  getBearLeanStyles() {

    const { currentOffset } = this.props
    const positionCatchFrameCount = 12 // We cannot catch every frame, animation gets too jerky.
    const maxAngle = 30
    const minAngle = -30
    let angleInDegrees = 0
    const returnTransition = 'transform 0.2s'
    let returnTransform = 'rotate(0 deg)'

    // If there is no coordinate data, apply mockup data
    if ( !currentOffset ) {
      this.prevXPos = 0
      this.prevAngleInDegrees = 0

    } else if ( !this.prevXPos ) {

      this.prevXPos = currentOffset.x
    }

    // If we are at the positionCatchFrameCount frame, and we got offset coordinates
    if ( currentOffset && this.posFrameCount === positionCatchFrameCount ) {

      // Get distance travelled
      const xPosDifference = currentOffset.x - this.prevXPos

      // Calculate angle
      angleInDegrees = xPosDifference / 2

      // Apply max and min to angle
      if ( angleInDegrees > maxAngle )
        angleInDegrees = maxAngle
      if ( angleInDegrees < minAngle )
        angleInDegrees = minAngle

      // Apply rotation
      returnTransform = 'rotate(' + angleInDegrees + 'deg)'

      // Assign historical values
      this.prevXPos = currentOffset.x
      this.prevAngleInDegrees = angleInDegrees

    } else {
      // This is not the right catch frame or there is no coordinate data, apply last known rotation
      returnTransform = 'rotate(' + this.prevAngleInDegrees + 'deg)'
    }

    // Increase frame count
    this.posFrameCount += 1

    // Reset frame count if needed
    if ( this.posFrameCount > positionCatchFrameCount )
      this.posFrameCount = 0

    // Return style with animation
    return {
      transition: returnTransition,
      transform: returnTransform
    }
  }

  getContainerStyles() {

    const { currentOffset } = this.props

    if ( !currentOffset ) {

      return {
        display: 'none'
      }
    }

    const { x, y } = currentOffset
    const transform = `translate(${x}px, ${y}px)`

    return {
      transform: transform,
      WebkitTransform: transform
    }
  }

  render() {

    const { isDragging, bearKey, bearsSettings } = this.props

    // Only render if its dragging
    if ( !isDragging ) return <div></div>

    return (
      <div
        style={ styles }
      >
        <div
          style={ this.getContainerStyles( this.props ) }
        >
          <BasicBear
            style={ this.getBearLeanStyles() }
            bear={ bearsSettings[bearKey] } // Get bear object from '(redux state).settings.bears' with key
            width='100'
            height='120'
          />
        </div>
      </div>
    )
  }
}

DraggedBear.propTypes = {
  currentOffset: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }),
  isDragging: PropTypes.bool.isRequired,
  bearsSettings: PropTypes.object.isRequired
}

export default DragLayer( collect )( DraggedBear )
