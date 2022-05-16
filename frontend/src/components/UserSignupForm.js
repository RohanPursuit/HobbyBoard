import { useState} from 'react'

function UserSignupForm(){
    const [userInfo, setUserInfo] = useState({
        email: "",
        username: "",
        password: "",
    })
    return (
        <div className="UserSignupForm">

        </div>
    )
}

export default UserSignupForm