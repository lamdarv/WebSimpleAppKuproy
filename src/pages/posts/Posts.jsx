import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Topbar from '../../components/topbar/Topbar';
import Navbar from '../../components/navbar/Navbar';
// import Card from '../../components/card/Card';
import Bottom from '../../components/bottom/Bottom';

const Posts = () => {
const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/post')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const rows = [];
  for (let i = 0; i < posts.length; i += 2) {
    rows.push(posts.slice(i, i + 2));
  }

  return (
    <div>
        <Topbar />
        <Navbar />
        {/* <div>
            <div className='flex items-center justify-center'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div> */}
        <div className="container mx-auto">
            {rows.map((row, index) => (
                <div key={index} className="flex flex-wrap">
                {row.map(post => (
                    <div key={post._id} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 p-4">
                    {/* <Card post={post} /> */}
                        <div className="mr-6 ml-6 mt-10 w-1/2 p-6 bg-white rounded-lg shadow-md">
                            <h2 className="text-xl font-quicksand mb-4 font-semibold">{post.title}</h2>
                            <p className="text-13 font-montserrat font-light ">{post.location}</p>
                            <p className="font-montserrat font-regular text-black leading-relaxed">
                            {post.description}
                            </p>
                            <ul className="flex items-center mt-6 justify-center">
                            <li className="rounded-40 bg-custom-green-1 items-center w-28">   
                                <a href="/update" className="font-quicksand font-medium text-white pr-4 pl-4 py-0.5 px-0.5 flex items-center "> 
                                <img src={`${process.env.PUBLIC_URL}/assets/edit_icon.svg`} alt="Edit_icon" className="pr-3 w-7 h-7" /> 
                                    Edit  
                                </a>
                            </li>
                            <li className="ml-6 rounded-40 bg-custom-red-1 items-center w-28">   
                                <a href="/posts" className="font-quicksand font-medium text-white pr-4 pl-4 py-0.5 px-0.5 flex items-center "> 
                                <img src={`${process.env.PUBLIC_URL}/assets/trash_icon.svg`} alt="Trash_icon" className="pr-3 w-7 h-7 " /> 
                                    Delete
                                </a>
                            </li>
                            </ul>
                        </div>
                    </div>
                ))}
                </div>
            ))}
        </div>
        <Bottom />
    </div>
  )
}

export default Posts