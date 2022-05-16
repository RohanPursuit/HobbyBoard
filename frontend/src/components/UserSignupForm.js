import { useState} from 'react'

function UserSignupForm(){
    const [userInfo, setUserInfo] = useState({
        email: "",
        username: "",
        password: "",
    })

    return (
        <div className="UserSignupForm">
            <form action="">
                <label htmlFor="email">Email</label>
                <input name="email" type="text" />
                <label htmlFor="password">Password</label>
                <input name="password" type="text" />
                <input type="submit" />
            </form>
        </div>
    )
}

export default UserSignupForm