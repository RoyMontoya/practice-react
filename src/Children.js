import React from 'react'

class Children extends React.Component {

  render() {
    return (<Parent>
      <div className="childA"></div>
      <div className="childB"></div>
    </Parent>)
  }
}

class Parent extends React.Component {
  render() {
    let items = React.Children.toArray(this.props.children)
    console.log(items);
    return null
  }
}

export default Children
