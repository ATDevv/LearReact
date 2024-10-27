import PropTyoes from "prop-types";

function UserGreeting(props) {
    const welcomeMes = <h2 className="welcome-mes">Welcome {props.name}</h2>;

    const loginPrm = <h2 className="login-prm">Please log in to continue</h2>;

    return props.isLoggedIn ? welcomeMes : loginPrm;
}

UserGreeting.propTypes = {
    name: PropTyoes.string,
    isLoggedIn: PropTyoes.bool,
};

export default UserGreeting;

// Conditional Rendering