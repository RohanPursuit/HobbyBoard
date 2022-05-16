import { useState} from 'react'
import axios from 'axios'

function UserSignupForm(){
    const [chooseUserName, setChooseUserName] = useState(false)
    const [userInfo, setUserInfo] = useState({
        email: "",
        username: "",
        password: "",
    })

    const handleInputChange = (event) => {
        setUserInfo({...userInfo, [event.target.name]: event.target.value})
    }

    const inputUserName = (event) => {
        event.preventDefault()
        setChooseUserName(true)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        //axios post userInfo
    }

    console.log(userInfo)
    return (
        <div className="UserSignupForm">
            <form onChange={handleInputChange}>
                {chooseUserName ?
                <>
                    <label htmlFor="username"></label>
                    <input id="username" name="username" type="text" placeholder={userInfo.email} required/>
                    <input onClick={handleSubmit} type="submit"/>
                </>
                
                :
                <>
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="text" required />
                    <label htmlFor="password">Password</label>
                    <input id="password" name="password" type="text" />
                    <input onClick={inputUserName} type="submit"/>
                </>
                }
            </form>
        </div>
    )
}

export default UserSignupForm