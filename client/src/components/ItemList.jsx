import React from "react";
import { useEffect, useState} from "react";
const ItemList = ({ images }) => {
  const [videos, setVideos] = useState([]);
  const [names, setNames]=useState(null);
  useEffect(()=>{
    fetchVideos();
  }, []);

  const fetchVideos=async()=>{
    try{
      const response=await fetch("http://localhost:3000/watch?name=Hatim");
      const data= await response.json();
      setVideos(data.files);
      setNames(data.names);
    }
    catch(err){
      console.log(err);
    }
  }

  return (
    <div className="absolute bottom-8 right-8 h-1/4 w-5/12 flex overflow-x-scroll gap-8">
      {videos.map((video, index) => (
        <div key={index} className="video-card">
          <video className="w-174 h-full object-cover"
            controls
            width="300"
            src={`http://localhost:3000/video/${video.filename}?name=${names}`} 
          >
          </video>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
