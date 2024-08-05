import {Component} from "react"

class User2Class extends Component{
    constructor(props) {
        super(props);
        console.log(props.identity + "Constructor");
    }
    componentDidMount() {
        console.log(this.props.identity + "Mounted");
    }
    render() {
        console.log(this.props.identity + "Rendered");
        return(
            <div>
                "Vijay"
            </div>
        )
    }
}

export default User2Class;