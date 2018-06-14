import React from 'react'

class Buttonsin extends React.Component {
  render() {
    return (<Button>React</Button>)
  }
}

const Button = (props) => <Button>{props.children}</Button>

export default Buttonsin
