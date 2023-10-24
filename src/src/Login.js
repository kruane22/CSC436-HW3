import { useState } from "react";

export default function Login(props) {
  const [user, setUser] = useState("");

  const { handleSubmit } = props;

  const handleChange = (event) => {
    setUser(event.target.value);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    handleSubmit(user);
  };
  return (
    <form onSubmit={formSubmit}>
      <label htmlFor="login-username">Username:</label>
      <input
        type="text"
        value={user}
        name="login-username"
        id="login-username"
        onChange={handleChange}
      />
      <label htmlFor="login-password">Password:</label>
      <input type="password" name="login-password" id="login-password" />
      <input type="submit" value="Login" disabled={user?false:true}/>   
    </form>
  );
}

