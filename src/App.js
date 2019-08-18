import React, {useState} from 'react';
import './App.css';
import SiteHeader from './components/header/SiteHeader';
import SiteBody from './components/body/SiteBody';
import SiteFooter from './components/footer/SiteFooter';
import axios from 'axios';


function App() { 
  let [arts, setArts] = useState([{title: "abc",content: "content here!"}]);
  const url = "https://q-site-server.herokuapp.com/category?category=htmlcss";
  console.log("before get API");
  return (
    <div className="App">
      <SiteHeader method={getDataApi()}></SiteHeader>
      <SiteBody postList={arts}></SiteBody>
      <SiteFooter></SiteFooter>
    </div>
  );
  function getDataApi(){
    return ()=>{
    axios.get(url)
    .then(function (response) {
      console.log(response);
      setArts(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    })};
  }
}


export default App;
