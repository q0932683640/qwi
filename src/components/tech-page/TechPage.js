import React, {useState} from 'react';
import axios from 'axios';
import TechHeader from './header/TechHeader';
import TechBody from './body/TechBody';
import TechFooter from './footer/TechFooter';

function TechPage() { 
  const urlHost = "https://q-site-server.herokuapp.com/find?category=";
    //the second parameter: isAdmin?
  let [dataPost, setDataPost] = useState([[], "show-post"]);
  return (
    <div className="App">
      <TechHeader 
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
      <TechBody dataPost={dataPost}/>
      <TechFooter />
    </div>
  );
  function adminAdd(){
    return () => {
      setDataPost([[], "admin-add"]);
    }
  } 
  function adminDelete(){
    return () => {
      setDataPost([[], "admin-delete"]);
    }
  }  
  function adminUpdate(){
    return () => {
      setDataPost([[], "admin-update"]);
    }
  }     
  // Get API
  function getCategoryHtmlCss(){
    const url = urlHost + "htmlcss";
    return () => {
    axios.get(url)
    .then(function (response) {
      setDataPost([[...response.data], "show-post"]);
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
    const url = urlHost+ "java";
    return () => {
    axios.get(url)
    .then(function (response) {
      setDataPost([[...response.data], "show-post"]);
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
    const url = urlHost + "javascript";
    return () => {
    axios.get(url)
    .then(function (response) {
      setDataPost([[...response.data], "show-post"]);
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
    const url = urlHost + "springboot";
    return () => {
    axios.get(url)
    .then(function (response) {
      setDataPost([[...response.data], "show-post"]);
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
    const url = urlHost + "nodejs";
    return () => {
    axios.get(url)
    .then(function (response) {
      setDataPost([[...response.data], "show-post"]);
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
    const url = urlHost + "reactjs";
    return () => {
    axios.get(url)
    .then(function (response) {
      setDataPost([[...response.data], "show-post"]);
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

export default TechPage;