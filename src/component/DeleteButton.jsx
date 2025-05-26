import React from 'react';

function DeleteButton({id, onDelete}) {
  return (
    <button className="delete-button" 
    onClick={() => onDelete(id)}>
      X</button>
  )
}
export default DeleteButton;