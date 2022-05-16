function SignInForm(){
    return (
        <div>
            <form >
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