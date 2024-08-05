import {useState} from "react"

const User = () => {
    const [count] = useState(0);
    const [count2] = useState(2);
    return (
        <div>
            <h2>Nmae: Vijay</h2>
            <h2>location: Dublin</h2>
            <h2>contact: vijay@gmail.com</h2>
            <h2>Count : {count}</h2>
            <h2>Count2 : {count2}</h2>
        </div>
    )
}

export default User;