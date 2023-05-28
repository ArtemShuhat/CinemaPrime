// import MD5 from "crypto-js/md5";

// let API_URL = process.env.REACT_APP_BASE_URL;
// let privateKey = process.env.REACT_APP_PRIVATE_KEY;
// let apiKey = process.env.REACT_APP_API_KEY;

// let ts = Date.now().toString();

// const getHash = (ts, privateKey, publicKey) => {
//   return MD5(ts + privateKey + publicKey).toString();
// };

// let hash = getHash(ts, privateKey, apiKey);

// const fetchHeroes = async (value) => {
//   let heroUrl = `${API_URL}/v1/public/characters`;
//   let url = `${heroUrl}?ts=${ts}&apikey=${apiKey}&hash=${hash}&nameStartsWith=${value}`;

//   try {
//     let response = await fetch(url);
//     let data = await response.json();
//     console.log(data);
//     return data;
//   } catch (err) {
//     console.error(err);
//     return;
//   }
// };
// export default fetchHeroes;
// const API_URL = process.env.REACT_APP_API_URL;
// const API_KEY = process.env.REACT_APP_API_KEY;

// const fetchPhotos = async (searchQuery) => {
//   const url = `${API_URL}/planetary/apod?api_key=${API_KEY}&count=10&q=${searchQuery}`;

//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.error(error);
//     return null;
//   }
// };

// export default fetchPhotos;
