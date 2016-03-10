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

    this.prevXPos = 0
    this.prevYPos = 0
    this.posFrameCount = 0
    this.prevAngleInDegrees = 0
  }

  getClassName() {

    const { currentOffset } = this.props

    let className = ' '

    if ( currentOffset ) {
      if ( this.prevXPos < currentOffset.x )
        className = 'bear-lean-right'
      else if ( this.prevXPos > currentOffset.x )
        className = 'bear-lean-left'

      this.prevXPos = currentOffset.x
      this.prevYPos = currentOffset.y
    }

    return className
  }

  getBearAnimationStyles() {

    const { currentOffset } = this.props
    const positionCatchFrameCount = 12 // We cannot catch every frame, animations gets too jerky.
    let angleInDegrees = 0
    let transition = 'transform 0.2s'
    let transform = 'rotate(0 deg)'

    if ( !currentOffset ) {
      this.prevYPos = null
      this.prevXPos = null
      transition = ''

    } else if ( !this.prevYPos ) {

      this.prevXPos = currentOffset.x
      this.prevYPos = currentOffset.y + 1

    }

    // If we are at the positionCatchFrameCount frame, and we got offset coordinates
    if ( currentOffset && this.posFrameCount === positionCatchFrameCount ) {

      const xPosDifference = currentOffset.x - this.prevXPos
      const yPosDifference = currentOffset.y - this.prevYPos

      const halfCircleDegrees = 180
      const offsetDegrees = 90

      // Get rotation angle
      angleInDegrees = Math.atan2( yPosDifference, xPosDifference ) * ( halfCircleDegrees / Math.PI ) + offsetDegrees

      // Apply rotation
      transform = 'rotate(' + angleInDegrees + 'deg)'

      // # Prevent css transition bug START
      // The should be no transition when going from positive to negative values
      // or the other way around. The rotate transition will go to the wrong direction,
      // Therefore it's better with no animation at all. Could be improved by keeping
      // track of laps.
      if (
        this.prevAngleInDegrees > halfCircleDegrees && angleInDegrees < 0 ||
        this.prevAngleInDegrees < 0 && angleInDegrees > halfCircleDegrees
      )
        transition = ''

      // # Prevent css transition bug END

      // Assign historical values
      this.prevXPos = currentOffset.x
      this.prevYPos = currentOffset.y
      this.prevAngleInDegrees = angleInDegrees
    }

    // Increase frame count
    this.posFrameCount += 1

    // Reset frame count if needed
    if ( this.posFrameCount > positionCatchFrameCount )
      this.posFrameCount = 0

    // Return style with animation
    return {
      transition: transition,
      transform: transform
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
            style={ this.getBearAnimationStyles() }

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
