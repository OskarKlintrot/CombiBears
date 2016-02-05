// React
import React from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'

// React Router
import Root from './components/root'
import configureStore from './redux/store'

import createHistory from 'history/lib/createHashHistory'
import { useQueries } from 'history'
import InitialState from './redux/store/initialState'

// PIXI.js
import PIXI from 'pixi.js/bin/pixi' // PIXI, added by Johnny Pesola 2016-02-04
import ReactPIXI from 'react-pixi' // React PIXI, added by Johnny Pesola 2016-02-04

const history = useQueries(createHistory)()
const Store = configureStore(InitialState(), history)


// Pixie specific START

const Stage = ReactPIXI.Stage
const TilingSprite = ReactPIXI.TilingSprite
const Sprite = ReactPIXI.Sprite
const Text = ReactPIXI.Text

const TeddySofaStage = React.createClass({
    displayName: 'TeddySofaStage',

    assetpath: function(filename) { return 'assets/basic/' + filename },

    getInitialState() {
        return {
            isBeingDragged: false,
        }
    },

    customClickMethod(e) {
        console.log("clicked", e)
    },

    onDragStart(event) {
        this.state.alpha = 0.5
        this.state.isBeingDragged = true

        // store a reference to the data
        // the reason for this is because of multitouch
        // we want to track the movement of this particular touch
        this.state.data = event.data
    },

    onDragEnd() {
        this.state.alpha = 1
        this.state.isBeingDragged = false

        // set the interaction data to null
        this.state.data = null
    },

    onDragMove() {

        // TODO: Fix dragging. this.parent does not refer to a Pixi Container object. The getLocalPosition only seems to work on that object.

        if (this.state.isBeingDragged) {

            console.log(this, this.parent)

            //const newPosition = this.state.data.getLocalPosition(this.parent)
            //this.position.x = newPosition.x
            //this.position.y = newPosition.y
        }
    },

    render() {
        let fontstyle = {font:'20px Arial'}
        return <Stage width={this.props.width} height={this.props.height}>

            <Sprite image={this.assetpath('teddy.png')}
                    scale={new PIXI.Point(0.2,0.2)}
                    anchor={new PIXI.Point(0.5,0)} key="1"
                    x="100"
                    y="100"
                    interactive="true"

                    // Events for drag start
                    mousedown={this.onDragStart}
                    touchstart={this.onDragStart}

                    // Events for drag end
                    mouseup={this.onDragEnd}
                    mouseupoutside={this.onDragEnd}
                    touchend={this.onDragEnd}
                    touchendoutside={this.onDragEnd}

                    // Events for drag move
                    mousemove={this.onDragMove}
                    touchmove={this.onDragMove}
            />

            <Text text="Some nice vector text"
                  x={this.props.xposition}
                  y={10}
                  style={fontstyle}
                  anchor={new PIXI.Point(0.5,0)}
                  key="2"
            />
        </Stage>
    },
})

// Pixie specific END



//Needed for React Developer Tools
window.React = React

/*
 * Needed for onTouchTap
 * Can go away when react 1.0 release
 * Check this repo:
 * https://github.com/zilverline/react-tap-event-plugin
 */
injectTapEventPlugin()

ReactPIXI.render(
    <TeddySofaStage width="800" height="600" xposition="100"/>,
    document.getElementById('pixi-container')
)

ReactDOM.render(
    <Root store={ Store } history={ history }/>,
    document.getElementById('app'))
