import ButtonExample from "./ButtonExample.jsx";
function isLoggedIn() {
    const text = isLoggedIn ? "Welcome back!" : "Please log in.";
    const className = isLoggedIn ? "logout-button" : "login-button";
    function handleClick() {
        if (isLoggedIn) {
            alert("logged out");
        } else {
            alert("logged in");
        }
    }
    return (
        <ButtonExample
            className={className}
            text={text}
            onClick={handleClick}
        />
    );
}
export default isLoggedIn;