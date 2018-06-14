import React from 'react';
import PropTypes from 'prop-types'

class Titles extends React.Component{
  render(){
    return <Title text="12345"/>
  }
}

const Title = (props) => <h1>Title: {props.text}</h1>

Title.PropTypes = {
  text: PropTypes.string.isRequired

  }

export default Titles
