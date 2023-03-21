import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const UpdateForm = ({match}) => {
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    // const [_id, setId] = useState("");
    // const [posts, setPosts] = useState("");
    // const [error, setError] = useState(null);
    // const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    // const { _id } = useParams();
    const {id} = useParams();

    useEffect(() => {
      getPostById();
    }, []);

    const getPostById = async () => {
      const response = await axios.get(`http://localhost:5000/api/post/${id}`);
      setTitle(response.data.title);
      setLocation(response.data.location);
      setDescription(response.data.description);
      setId(response.data._id);
    };
   
    const updatePost = async (e) => {
      e.preventDefault();
      try {
        await axios.patch(`http://localhost:5000/api/post/${id}`, {
          title,
          location,
          description,
        });
        navigate("/posts");
      } catch (error) {
        console.log(error);
      }
    };

    
  
    return (
    <div className="flex items-center justify-center mt-10">
        <div className="bg-white rounded-lg shadow-md p-6 max-w-w1 w-full">
            <form onSubmit={updatePost} className="w-full">
            <div className="mb-6">
                <label className="font-quicksand block font-semibold text-black mb-2" htmlFor="title">
                Title
                </label>
                <input
                className="rounded-lg text-sm font-montserrat block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                id="title"
                type="text"
                placeholder="Input title here..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="mb-6">
                <label className="font-quicksand block font-semibold text-black mb-2" htmlFor="location">
                Location
                </label>
                <input
                className="rounded-lg text-sm font-montserrat block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                id="location"
                type="text"
                placeholder="Bandung, Jawa Barat"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                />
            </div>
            <div className="mb-6">
                <label className="font-quicksand block font-semibold text-black mb-2" htmlFor="description">
                Description
                </label>
                <textarea
                className="rounded-lg text-sm font-montserrat block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                id="description"
                placeholder="Describe here..."
                rows="6"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div className="flex items-center justify-end">
                <button
                className="font-quicksand bg-custom-green-1 hover:bg-custom-green-2 text-white font-bold py-1 px-7 rounded-40 focus:outline-none focus:shadow-outline"
                type="submit"
                >
                <a href="/posts">Update</a>
                
                </button>
            </div>
            </form>
        </div>
    </div>

  )
}

export default UpdateForm