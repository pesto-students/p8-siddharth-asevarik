import CustomButton from "./components/CustomButton";
import {connect} from "react-redux";
import "./App.css";
import { add, reset } from "./Redux/action";

function App({steps,dispatch}) {
  return (
    <div>
      You've have walked {steps} Steps today!
    <CustomButton title={"Add a Step"} isGrey={true} onclick={()=>dispatch(add())}/>

    <CustomButton title={"Reset Steps"} onclick={()=>dispatch(reset())}/>
    </div>
  );
}
function mapStateToProps(state){
  return {
    steps:state
  }
}
const ReduxApp = connect(mapStateToProps)(App)
export default ReduxApp;
