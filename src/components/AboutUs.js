import {Component} from 'react'
// import User from './User'
import UserClass from './UserClass'
import User2Class from './User2Class'

class AboutUs extends Component {
  constructor() {
    super();
    console.log("Parent Constructor")
  }
  componentDidMount() {
    console.log("Parent Mounted")
  }
  render() {
    console.log("Parent rendered")
    return (
      <div>
        <h1>About Us</h1>
        {/* <User name={"Vijay"} location={"Dublin"}/> */}
        <UserClass name={"FirstChild"} location={"Dublin"} />
        {/* <User2Class identity={"OddChild"}/> */}
        <UserClass name={"SecondChild"} location={"Dublin"} />
      </div>
      
    )
  }
}

export default AboutUs