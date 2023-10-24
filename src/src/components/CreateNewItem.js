import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';

const CreateNewItem = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { handleNewListItem } = props;

  const handleChange = (event) => {
    if (event.target.name == "postTitle") {
      setTitle(event.target.value);
    } else if (event.target.name == "postDescription") {
      setDescription(event.target.value);
    }
  };

  const formSubmit = (e) => {
    e.preventDefault();

    const newItem = {
        title: title,
        description: description,
        dateSet: moment().format("dddd, MMMM Do YYYY, h:mm:ss a"),
        id: uuidv4()
    }
    
    handleNewListItem(newItem)
    resetItem()
  };

  const resetItem = () => {
    setDescription("")
    setTitle("")
}

  return (
    <form onSubmit={formSubmit}>
      <label htmlFor="postTitle">Title:</label>
      <input type="text" value={title} name="postTitle" onChange={handleChange} />

      <label htmlFor="postDescription">Description:</label>
      <input type="text" value={description} name="postDescription" onChange={handleChange} />

      <input type="submit" value="Add" disabled={!title?true:false} />
    </form>
  );
};

export default CreateNewItem;
