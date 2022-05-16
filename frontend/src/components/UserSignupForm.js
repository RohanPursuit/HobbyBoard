import { useState} from 'react'
import axios from 'axios'

function UserSignupForm(){
    const [userInfo, setUserInfo] = useState({
        email: "",
        username: "",
        password: "",
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        //axios post userInfo
    }

    console.log(userInfo)
    return (
        <div className="UserSignupForm">
            <form on onSubmit={handleSubmit} action="">
                <label htmlFor="email">Email</label>
                <input name="email" type="text" required />
                <label htmlFor="password">Password</label>
                <input name="password" type="text" />
                <input type="submit"  required/>
            </form>
        </div>
    )
}

export default UserSignupForm