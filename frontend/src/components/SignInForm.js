import { useState } from 'react'

function SignInForm(){
    const [signInCred, setSignInCred] = useState({
        username: "",
        password: ""
    })

    const handleInputChange = (event) => {
        setSignInCred({...signInCred, [event.target.name]: event.target.value})
    }

    return (
        <div>
            <form onChange={handleInputChange}>
                <label htmlFor="username">Username</label>
                <input id="username" name="username" type="text" />
                <label htmlFor="password">Password</label>
                <input id="password" name="password" type="text" />
                <div>Forgot password</div>
                <input type="submit" />
            </form>
        </div>
    )
}

export default SignInForm