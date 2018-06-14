import React from 'react'
import ReactDOM from 'react-dom';

class Life extends React.Component {
constructor(){
  super();
  this.state = {increasing: false}
}
update(){
   ReactDOM.render(<Life val={this.props.val + 1}/>,
   document.getElementById('root'))
}

componentWillReceiveProps(nextProps){
   this.setState({increasing: nextProps.val > this.props.val})
}

shouldComponentUpdate(nextProps, nextState){
  return nextProps.val % 5 === 0;
}

componentDidUpdate(prevProps, prevState){
    console.log(`prevProps: ${prevProps.val}`);
}

  render(){
    console.log(this.state.increasing);
    return (<button
      onClick={this.update.bind(this)}>{this.props.val}
    </button>)
  }
}

Life.defaultProps ={
  val: 0
}

export default Life
