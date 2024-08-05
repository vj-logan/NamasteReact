import React from "react"

class UserClass extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            count2: 1
        }
        console.log(props.name + "Constructor")
    }
    componentDidMount() {
        console.log(this.props.name + "Mounted")
    }
    render() {
        const {name, location} = this.props;
        const {count} = this.state;
        console.log( name + "Rendered")
        return (
            <div>
                <h2>Name: {name} </h2>
                <h2>location: {location}</h2>
                <h2>contact: vijay@gmail.com class</h2>
                <h2>Count : {count}</h2>
                <button onClick= {()=> {
                    this.setState({
                        count: count + 1
                    })
                }}>increment count</button>
            </div>
        )
    }
}

export default UserClass