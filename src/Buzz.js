import React from 'react'

class Buzz extends React.Component {
  render(){
    return (
      <Buttons>
        <button value="A">A</button>
        <button value="B">B</button>
        <button value="C">C</button>
      </Buttons>
    )
  }
}

class Buttons extends React.Component {
  constructor(){
    super();
    this.state = {selected: 'None'}
  }

  selectItem(selected){
    this.setState({selected})
  }

  render(){
    let fn = child =>
      React.cloneElement(child, {
        onClick: this.selectItem.bind(this, child.props.value)
      })
    let items = React.Children.map(this.props.children, fn)

    console.log(items);
    return (
      <div>
        <h2>You have Selected: {this.state.selected}</h2>
        {items}
      </div>
    )
  }
}

export default Buzz
