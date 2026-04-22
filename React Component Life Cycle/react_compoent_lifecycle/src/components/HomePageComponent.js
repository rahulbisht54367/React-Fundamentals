// Import React and the Component base class so we can define a class-based component.
import React, { Component } from 'react'
import NameComponent from './NameComponent'
// A class component holds state and lifecycle methods; "export default" makes this the module's main export.
export default class HomePageComponent extends Component {
  // The constructor runs once when an instance of this component is created (before it appears on screen).
  constructor(){
    // super() must be called first so the parent Component can set up correctly.
    super()
      // Runs during construction—before the first render (often used to verify order of lifecycle steps).
      console.log("this is called before page is loaded")
      // this.state holds data that belongs to this component; changing state triggers a re-render.
      this.state={
        name:"rahul bisht",
        rollnumber:"1900950100064"
      }
  }

  // componentDidMount runs after the component’s output has been inserted into the DOM (good place for side effects like API calls).
  componentDidMount(){
    console.log("this is called when the function is mounted")
  }
  // componentWillUnmount runs right before the component is removed from the DOM (cleanup: timers, subscriptions, listeners).
  componentWillUnmount(){
    console.log("Compoent is unmounted")
      
  }
  // Called when the input’s value changes; the browser passes an event object `e` with the new value in e.target.value.
  changeName(e){
      console.log(e.target.value)
      // setState merges updates into state and schedules a re-render so the UI shows the new name.
      this.setState({
        name:e.target.value
      })
  }
  
  // render runs to produce JSX; React calls it on mount and again whenever state or props change.
  render() {
    return (
      <div>HomePageComponent
        {/* Curly braces embed JavaScript expressions—here, values from this.state. */}
        name of the user is <NameComponent name={this.state.name}></NameComponent>
        this is the roll number {this.state.rollnumber}
        {/* onChange fires on every keystroke; the arrow function forwards the event to changeName so `this` stays correct. */}
        <input onChange={(e)=>this.changeName(e)}></input>
      </div>
    )
  }
}
