import "./App.css";
import ListComponent from "./components/ListComponent";
import { useReducer } from "react";
import UserBar from "./UserBar";
import CreateNewItem from "./components/CreateNewItem";
import appReducer from "./Reducers";

function App() {

  const [state, dispatch] = useReducer(appReducer, {
    user: "",
    listItem: [],
  })

  const {listItem, user} = state;

  const handleCompletedBox = (id) => {
    dispatch( {type: "CHECK_COMPLETE", payload: id} )
  };

  const handleUserName = (newName) => {
    dispatch( {type: "LOGIN", payload: {user:newName}} )
  };

  const handleNewListItem = (newItem) => {
    dispatch( {type: "CREATE_TODO", payload: {listItem:newItem,author:user} })
  };

  const handleDelete = (id) => {
    dispatch( {type: "DELETE_TODO", payload: id} )
  }

  const handleLogout = () => {
    dispatch ( {type: "LOGOUT"} )
    dispatch ( {type: "CLEAR_LIST"} )
  }

  return (
    <div className="App">
      <UserBar user={user} handleSubmit={handleUserName} handleLogout={handleLogout} />

      {user && <CreateNewItem handleNewListItem={handleNewListItem} />}

      {state.user && (
        <ListComponent
          listItem={listItem}
          handleCompletedBox={handleCompletedBox}
          handleDelete={handleDelete}
        />
      )}
    </div>
  );
}

export default App;
