import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

function UserSignInForm(){
    const API = process.env.REACT_APP_API_URL;
    const nav = useNavigate()
    const [signInCred, setSignInCred] = useState({
        username: "",
        password: ""
    })

    const handleInputChange = (event) => {
        setSignInCred({...signInCred, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        //axios get user, if no user found show alert message
        axios.post(API + "users/signin", signInCred)
        .then((response) => {
            console.log(response.data)
            document.cookie = "credentials="+response.data
            nav("/projects")
            
        })
        .catch(()=> {
            alert("Invalid Username/Password")
        })


    }
    return (
        <div>
            <form onSubmit={handleSubmit} onChange={handleInputChange}>
                <label htmlFor="username">Username</label>
                <input id="username" name="username" type="text" required/>
                <label htmlFor="password">Password</label>
                <input id="password" name="password" type="text" required/>
                <input type="submit" />
                <div>
                    <Link to="/signup">
                        Sign Up
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default UserSignInForm