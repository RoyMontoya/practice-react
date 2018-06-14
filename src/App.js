import React from 'react'
import PropTypes from 'prop-types'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      txt: 'this is the state txt'
    }
  }

  update(e){
    this.setState({
      txt: e.target.value
    })
  }

  render() {
    // const txt = this.props.txt
    return (<div>
      <Widget update={this.update.bind(this)}/>
      <h1>{this.state.txt}</h1>
    </div>)
  }
}

const Widget = (props) =>
  <input type = "text" onChange={props.update.bind(this)}/>

App.defaultProps = {
  txt: "this is the default txt"
}

App.propTypes = {
  txt: PropTypes.string,
  cat: PropTypes.number
}

export default App
