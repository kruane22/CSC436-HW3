export default function Logout({user, handleSubmit}) {
    const formSubmit = (e) => {
        e.preventDefault();
        handleSubmit();
    }

    return (
    <form onSubmit={formSubmit}>
        Logged in as: <b>{user}</b>
        <input type="submit" value="Logout" />
    </form>
    )
    }