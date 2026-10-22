import ButtonExample from "./ButtonExample.jsx";

function AuthButton({ isLoggedIn }) {

    const text = isLoggedIn ? "Logout" : "Login";
    const className = isLoggedIn ? "logout-btn" : "login-btn";

    function handleClick() {
        if (isLoggedIn) {
            alert("You have logged out.");
        } else {
            alert("You have logged in.");
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

export default AuthButton;