import React from 'react'

const Modal = ({ visible, onClose, postId, handleDeletePost }) => {

    const handleOnClose = () => {
        onClose()
    };

    const onDeleteClick = async () => {
        try {
            await handleDeletePost(postId);
            onClose();
        } catch (error) {
            console.log(error);
        }
    }

    if (!visible) return null;

    return (
        <div onClick={handleOnClose} className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
            <div className="bg-white p-2 rounded w-72">
                <h1 className="font-semibold text-center text-xl text-gray-700">
                    Are you sure?
                </h1>
                <div className="text-center">
                    <button onClick={handleOnClose} className="px-5 py-2 bg-gray-700 text-white rounded" >
                        Cancel
                    </button>
                    <button onClick={onDeleteClick} className="px-5 py-2 bg-gray-700 text-white rounded" >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Modal
