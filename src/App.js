import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import MoviesHeader from "./components/MoviesHeader";
import getMovies from "./services";
import "./App.css";
import SearchBar from "./components/searcht";
import ML from "./components/ML";
import Navbar from "./components/Navbar";
import TextForm from './components/TextForm';
import EvenOdd from './components/EvenOdd';
import EvenOddNumbers from './components/EvenOdd';
function get(search) {
   let url = "https://api.themoviedb.org/3/movie/top_rated?api_key=cc31d08b0d4b5b3539a406e5af2aec1f&language=en-US&page=1"
   if (search) {
      url = `https://api.themoviedb.org/3/search/movie?api_key=cc31d08b0d4b5b3539a406e5af2aec1f&language=en-US&page=1&include_adult=false&query=${search}`;
      console.log("url",url);
    }
   return fetch(url);
  
 }
function App() {
  const [data, setData] = useState([]);
  const [search,setSearch] = useState("");
//   const currentPosts=data.slice(indexOfFirstitem,indexOfLastitem);
  const handleData = async () => {
    const movies = await getMovies();
    console.log("Movies:::", movies);
    setData(movies);
  };

//   useEffect(() => {
//     handleData();
//   }, []);
  useEffect(()=>{
   handleData();
   get(search);
  },[search]);
  let tableD = data;
//   let tableD=currentPosts;
  if(search.length){ //length
   tableD=data.filter((item)=>{
      return item.title.toLowerCase().includes(search.toLowerCase());
   });
  }
  return (
    <div className="App">
      <Navbar/>
      <MoviesHeader id="h" header="Movie Heist"
      />
      <SearchBar id="s"
         onSearchInputChange={(text)=>{
            setSearch(text);
         }}
      />
      <ML lists={tableD}/>
      
     <div className='container'>
         <TextForm heading="Enter the text"/>
     </div>
     <EvenOddNumbers/>
    </div>
  );
}

export default App;