import React, { useState, useEffect } from "react";
import axios from "axios";
const FLICKR_API_KEY = "e90b1497f2bdf25c371c637d047c4ae2";

const Api = (props) => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    const fetchPhotos = async () => {
      const response = await axios.get("https://api.flickr.com/services/rest", {
        params: {
          method: "flickr.photos.search",
          api_key: FLICKR_API_KEY,
          text: props.pro,
          format: "json",
          nojsoncallback: 1,
          per_page: 20,
        },
      });
      console.log(response);
      setPhotos(response.data.photos.photo);
    };

    fetchPhotos();
  }, [props.pro]);

  return (
    <div className="image-grid">
      {photos.map((item) => (
        <div key={item.id} className="image-container">
          <img
            src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`}
            alt={item.title}
            className="image"
          />
        </div>
      ))}
    </div>
  );
};

export default Api;
