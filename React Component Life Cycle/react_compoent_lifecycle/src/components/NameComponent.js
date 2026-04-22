// React and the Component base class for a class-based UI component.
import React, { Component } from 'react'

// Renders a name from parent props; logs when those props (or state) change after an update.
export default class NameComponent extends Component {
    // Runs after a re-render when props or state changed (not on the initial mount).
    // prevProps / prevState are the values from before this update; this.props / this.state are current.
    componentDidUpdate(prevProps,prevState){
        // Here we compare the previous and current `name` prop to see what changed.
        console.log(prevProps.name , this.props.name)
    }
  // Produces the UI: the parent supplies `name` via props (read-only to this child).
  render() {
    return (
      <div><b>{this.props.name}</b></div>
    )
  }
}
