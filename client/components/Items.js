import React from "react";
import Item from "./Item";

const Items = ({ choices, updateItem, deleteItem }) => (
  <div>
    { choices.map( item => 
      <Item
        key={item.id}
        {...item}
        updateItem={updateItem}
        deleteItem={deleteItem}
        />
        )
      }
  </div>
)

export default Items;