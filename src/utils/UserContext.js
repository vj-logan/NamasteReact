import {createContext} from "react"

const UserContext = createContext({
    loggedInUser: "Deafault User"
})

export default UserContext;