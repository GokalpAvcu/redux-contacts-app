import React from "react";
import { useSelector } from "react-redux";
import { contactSelectors } from "../../redux/contactSlice";

import Item from "./Item";

function List() {
  const contacts = useSelector(contactSelectors.selectAll);

  return (
    <ul className="list">
      {contacts.map((contact) => (
        <Item key={contact.id} item={contact} />
      ))}
    </ul>
  );
}

export default List;
