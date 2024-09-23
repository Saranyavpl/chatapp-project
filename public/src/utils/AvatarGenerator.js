// export const getRandomAvatars = async (api) => {
//     const response = await fetch(api);
//     const data = await response.json();
//     return data; // Adjust this according to your API response structure
// };


// src/utils/AvatarGenerator.js

import axios from "axios";
import { Buffer } from "buffer";

export const getRandomAvatars = async (api) => {
  const data = [];
  for (let i = 0; i < 4; i++) {
    const response = await axios.get(`${api}/${Math.floor(Math.random() * 1000)}`);
    const buffer = Buffer.from(response.data); // Make sure Buffer is imported from 'buffer'
    data.push(buffer.toString("base64"));
  }
  return data;
};
