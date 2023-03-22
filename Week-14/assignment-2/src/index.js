import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider, connect } from "react-redux";
import { reduxStore } from "./redux/store";
import { toggle } from "./redux/action";
class Room extends React.Component {

  flipLight = () => {
    console.log(this.props);
    const {dispatch} = this.props
    dispatch(toggle())
  };

  render() {
    const lightedness = this.props.light ? "lit" : "dark";
    return (
      <div className={`room ${lightedness}`}>
        the room is {lightedness}
        <br />
        <button onClick={this.flipLight}>flip</button>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    light:state
  }
}
const ReduxRoom = connect(mapStateToProps)(Room)

ReactDOM.render(
<Provider store={reduxStore}>
<ReduxRoom />
</Provider>
, document.getElementById("root"));
