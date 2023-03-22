import React, { useState } from 'react';
import PropTypes from 'prop-types';


function Modal({setModalOn, setChoice}) {
  
  const handleDelete = () => {
    setChoice(true);
    setModalOn(false);
  };

  const handleClose = () => {
    setChoice(false);
    setModalOn(false);
  };

  return (
    <>
      <div
        className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 z-10 flex justify-center items-center"
      >
        <div className="bg-white rounded-lg shadow-lg w-1/3 px-6 py-4">
          <div className="text-xl font-medium mb-2">Delete Post</div>
          <div className="mb-4">Are you sure you want to delete your post?This action can not be undone.</div>
          <div className="flex justify-end">
            <button
              className="bg-gray-500 text-white px-4 py-2 rounded-lg mr-2"
              onClick={handleClose}
            >
              Cancel
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-lg"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
