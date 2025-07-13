function Cr ({ isLoggedIn, username }) {

    return(
        <div>
            <h2>Condition Rendering</h2>
            {isLoggedIn ? (
                <p>Welcome, {username}!</p>
            ) : (
                <button>Login</button>
            )}
        </div>
    );
}

export default Cr;