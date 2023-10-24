import Login from "./Login";
import Logout from "./Logout";
import Register from "./Register";
import { useState } from "react";
import styled from "styled-components";

export default function UserBar(props) {

  const {user, handleSubmit, handleLogout} = props
  const [register, setRegister] = useState(true);

  if (user) {
    return <Logout user={user} handleSubmit={handleLogout}/>;
    
  } else {
    return (
      <Wrapper>
       {!register && <Login user={user} handleSubmit={handleSubmit}/>}
       {register && <Register user={user} handleSubmit={handleSubmit}/>}
        <button onClick={()=>setRegister(!register)}>
         {register?"Already registered? Click to login":"Don't have an account? Click to register"}
        </button>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  display: flex;
  button{
    border:none;
  }
`;
