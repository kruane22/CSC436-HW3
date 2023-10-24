import React from "react";
import ListItem from "./ListItem";
import styled from "styled-components";

const ListComponent = ({listItem, handleCompletedBox, handleDelete} ) => {
  return (
    <Wrapper>
      {listItem.map((element, index) => {
        const {id, title, description, author, dateSet, complete, dateComplete} =
          element;

        const key = index

        return (
          <ListItem
            id={id} 
            key = {key}
            title={title}
            description={description}
            author={author}
            dateCreated={dateSet}
            complete={complete}
            dateComplete={dateComplete}
            handleCompletedBox={handleCompletedBox}
            handleDelete={handleDelete}
          />
        );
      })}
    </Wrapper>
  );
};

export default ListComponent;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
