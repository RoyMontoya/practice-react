import React from 'react';
import ReactDOM from 'react-dom';

class SingleInput extends React.Component {
constructor(){
  super();
  this.state = {a:''}
}

update(e){
  this.setState({
    a: this.a.refs.input.value,
    b: this.b.refs.input.value
  })
}

  render(){
    return (
      <div>
        <Ins ref={component => this.a = component} type="text"
        update={this.update.bind(this)}/>
        {this.state.a}
        <hr/>
        <Ins ref={component => this.b = component} type="text"
        update={this.update.bind(this)}/>
        {this.state.b}
      </div>
    )
  }
}

class Ins extends React.Component {
  render(){
    return <div><input ref="input" type="text" onChange={this.props.update}/></div>
  }
}

export default SingleInput
