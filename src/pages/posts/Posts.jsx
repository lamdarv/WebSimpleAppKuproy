import axios from 'axios';
import Topbar from '../../components/topbar/Topbar';
import Navbar from '../../components/navbar/Navbar';
import Bottom from '../../components/bottom/Bottom';
import { Link, Navigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Modal from '../../components/modal/Modal';
import { useParams } from "react-router-dom";

const Posts = () => {
    const [posts, setPosts] = useState([]);

    // const [show, setShow] = useState(false);
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    const [modalOn, setModalOn] = useState(false);
    const [choice, setChoice] = useState(false);
    const { id } = useParams();

    const modalClicked = () => {
        setModalOn(true)
    }

    useEffect(() => {
        getPosts();
    }, []);

    const rows = [];
    for (let i = 0; i < posts.length; i += 2) {
        rows.push(posts.slice(i, i + 2));
    }

    const getPosts = async () => {
        const response = await axios.get("http://localhost:5000/api/post");
        setPosts(response.data);
    };

    const getPostById = async () => {
        const response = await axios.get(`http://localhost:5000/api/post/${id}`);
        setPosts(response.data);
    };

    const handleDeleteConfirmation = async (id) => {
        try {
        await axios.delete(`http://localhost:5000/api/post/${id}`);
        getPostById();
        } catch (error) {
        console.log(error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/post/${id}`);
            setPosts(posts.filter(post => post._id !== id));
        } catch (error) {
            console.log(error);
        }
    };
    
    const handleDeleteClick = (id) => {
        setChoice(true);
        modalClicked();
        setModalOn(false);
        handleDeleteConfirmation(id);
    };

  return (
    <div>
        
        <Topbar />
        <Navbar />
        <div className="md:container md:mx-auto ">
            {rows.map((row, index) => (
                <div key={index} className="flex items-center justify-center">
                {row.map(post => (
                    <div key={post._id} className="flex justify-center items-center ">
                        <div className=" mr-6 ml-6 mt-10 p-6 bg-white rounded-lg shadow-md">
                            <h2 className="max-h-56 text-xl font-quicksand mb-4 font-semibold">{post.title}</h2>
                            <p className="text-13 font-montserrat font-light ">{post.location}</p>
                            <p className="font-montserrat font-regular text-black leading-relaxed w-96 break-words">
                            {post.description}
                            </p>
                            <ul className="flex items-center mt-6 justify-center">
                            <li className="rounded-40 bg-custom-green-1 items-center w-28">
                                <Link to={`/update/${post._id}`} className="font-quicksand font-medium text-white pr-4 pl-4 py-0.5 px-0.5 flex items-center ">    
                                    <img src={`${process.env.PUBLIC_URL}/assets/edit_icon.svg`} alt="Edit_icon" className="pr-3 w-7 h-7" />
                                    Edit
                                </Link>
                            </li>
                            <li className="ml-6 rounded-40 bg-custom-red-1 items-center w-28"> 
                                <Link onClick={handleDeleteConfirmation} className="font-quicksand font-medium text-white pr-4 pl-4 py-0.5 px-0.5 flex items-center ">    
                                    <img src={`${process.env.PUBLIC_URL}/assets/edit_icon.svg`} alt="Edit_icon" className="pr-3 w-7 h-7" />
                                    Delete
                                </Link>
                    
                            </li>
                            </ul>
                        </div>
                    </div>
                ))}
                </div>
            ))}
        </div>
        
                    {choice}
        {/* {choice && handleDeleteConfirmation(post.id)} */}
        {modalOn && <Modal setModalOn={setModalOn} setChoice={setChoice} />}
        <Bottom />
    </div>
  )
}

export default Posts
