function userGreeting(props) {
    return (props.isLoggedIn ? <h1>Welcome back{props.username}!</h1> : <h1>Please sign up.</h1>);
}
export default userGreeting
