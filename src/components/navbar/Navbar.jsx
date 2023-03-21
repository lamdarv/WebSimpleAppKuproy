export default function Navbar() {
  return (
    
    <nav className="flex items-center justify-between">
      <div className="flex items-center">
        <img src={`${process.env.PUBLIC_URL}/assets/logo_kuproy.svg`} alt="Logo" className="h-12  mr-10" />
        <ul className="flex ">
          <li className="ml-10 mr-10 rounded-40 bg-custom-gray-3 items-center">   
            <a href="/" className="font-quicksand font-medium text-custom-gray-2 pr-4 pl-4 py-0.5 px-0.5 flex items-center "> 
            <img src={`${process.env.PUBLIC_URL}/assets/home_icon.svg`} alt="Home_icon" className="pr-3" /> 
                Home
            </a>
          </li>
          <li className="mr-10 rounded-40 bg-custom-gray-3 items-center">   
            <a href="/posts" className="font-quicksand font-medium text-custom-gray-2 pr-4 pl-4 py-0.5 px-0.5 flex items-center "> 
            <img src={`${process.env.PUBLIC_URL}/assets/posts_icon.svg`} alt="Posts_icon" className="pr-3" /> 
                Posts
            </a>
          </li>
          <li className="mr-10 rounded-40 bg-custom-gray-3 items-center">   
            <a href="/create-post" className="font-quicksand font-medium text-custom-gray-2 pr-4 pl-4 py-0.5 px-0.5 flex items-center "> 
            <img src={`${process.env.PUBLIC_URL}/assets/create_icon.svg`} alt="Create_icon" className="pr-3" /> 
                Create
            </a>
          </li>
        </ul>
      </div>
      <div className="relative flex items-center">
        <input 
            type="text" 
            placeholder="          Search..." 
            className="font-montserrat font-regular px-2 py-1 rounded-40 bg-white-100 border border-black text-white mr-40"  
        />
        <img 
            src={`${process.env.PUBLIC_URL}/assets/search_icon.svg`} 
            alt="Search_icon" 
            className="absolute left-4"
        />
      </div>
    </nav>
  );
};