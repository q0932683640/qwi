import React, {useState} from 'react';
import './App.css';
import HeaderComp from './components/header/HeaderComp';
import BodyComp from './components/body/BodyComp';
import FooterComp from './components/footer/FooterComp';
import BodyAdmin from './components/body/body-admin/BodyAdmin';
import axios from 'axios';


function App() { 
  let [listPost, setListPost] = useState([[], false]);
  let bodyContent;
  if(listPost[0] !== [] && listPost[1] === false){
    bodyContent = <BodyComp listPost={listPost[0]}></BodyComp>;
  }
  else
    bodyContent = <BodyAdmin></BodyAdmin>;
  return (
    <div className="App">
      <HeaderComp 
        methodHtmlCss={getCategoryHtmlCss()} 
        methodJava={getCategoryJava()}
        methodJavaScript={getCategoryJavaScript()}
        methodNodeJS={getCategoryNodeJS()}
        methodReactJS={getCategoryReactJS()}
        methodSpringBoot={getCategorySpringBoot()}
        adminAdd = {adminAdd()}
        adminDelete = {adminDelete()}
        adminUpdate = {adminUpdate()}
      />
      {
        bodyContent
      }
  
      <FooterComp></FooterComp>
    </div>
  );
  function adminAdd(){
    return () => {
      setListPost([], true);
    }
  } 
  function adminDelete(){
    return () => {
      setListPost([], true);
    }
  }  
  function adminUpdate(){
    return () => {
      setListPost([], true);
    }
  }     
  // Get API
  function getCategoryHtmlCss(){
    const url = "https://q-site-server.herokuapp.com/category?category=htmlcss";
    return () => {
    axios.get(url)
    .then(function (response) {
      setListPost([[...response.data], false]);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    })};
  }
  function getCategoryJava(){
    const url = "https://q-site-server.herokuapp.com/category?category=java";
    return () => {
    axios.get(url)
    .then(function (response) {
      setListPost([[...response.data], false]);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    })};
  }
  function getCategoryJavaScript(){
    const url = "https://q-site-server.herokuapp.com/category?category=javascript";
    return () => {
    axios.get(url)
    .then(function (response) {
      setListPost([[...response.data], false]);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    })};
  }
  function getCategoryNodeJS(){
    const url = "https://q-site-server.herokuapp.com/category?category=springboot";
    return () => {
    axios.get(url)
    .then(function (response) {
      setListPost([[...response.data], false]);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    })};
  }
  function getCategoryReactJS(){
    const url = "https://q-site-server.herokuapp.com/category?category=nodejs";
    return () => {
    axios.get(url)
    .then(function (response) {
      setListPost([[...response.data], false]);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    })};
  }
  function getCategorySpringBoot(){
    const url = "https://q-site-server.herokuapp.com/category?category=reactjs";
    return () => {
    axios.get(url)
    .then(function (response) {
      setListPost([[...response.data], false]);
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