import React, {useState} from 'react';
import axios from 'axios';
import TechHeader from './header/TechHeader';
import TechBody from './body/TechBody';
import TechFooter from './footer/TechFooter';

function TechPage() { 
  const urlHost = "http://q-site-server.herokuapp.com/find?category=";
  const [posts, setPosts] = useState();
  const [act, setAct] = useState();
  return (
    <div className="App">
      <TechHeader 
        methodHtmlCss={getCategoryHtmlCss} 
        methodJava={getCategoryJava()}
        methodJavaScript={getCategoryJavaScript()}
        methodNodeJS={getCategoryNodeJS()}
        methodReactJS={getCategoryReactJS()}
        methodSpringBoot={getCategorySpringBoot()}
        adminAdd = {adminAdd()}
        adminDelete = {adminDelete()}
        adminUpdate = {adminUpdate()}
      />
      <TechBody posts={posts} act={act}/>
      <TechFooter />
    </div>
  );
  function adminAdd(){
    return () => {
      setAct("add");
    }
  } 
  function adminDelete(){
    return () => {
      setAct("del")
    }
  }  
  function adminUpdate(){
    return () => {
      setAct("upd")
    }
  }     
  // Get API
  // function getCategoryHtmlCss(){
  //   const url = urlHost + "htmlcss";
  //   return () => {
  //   axios.get(url)
  //   .then(function (response) {
  //     setPosts(response.data);
  //     setAct("show");
  //   })
  //   .catch(function (error) {
  //     // handle error
  //     console.log(error);
  //   })
  //   .finally(function () {
  //     // always executed
  //   })};
  // }
  function getCategoryHtmlCss(){
    const url = urlHost + "htmlcss";
    
    axios.get(url)
    .then(function (response) {
      setPosts(response.data);
      setAct("show");
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
  }
  function getCategoryJava(){
    const url = urlHost+ "java";
    return () => {
    axios.get(url)
    .then(function (response) {
      setPosts(response.data);
      setAct("show");
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
      setPosts(response.data);
      setAct("show");
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
    const url = urlHost + "nodejs";
    return () => {
    axios.get(url)
    .then(function (response) {
      setPosts(response.data);
      setAct("show");
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
    const url = urlHost + "reactjs";
    return () => {
    axios.get(url)
    .then(function (response) {
      setPosts(response.data);
      setAct("show");
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
    const url = urlHost + "springboot";
    return () => {
    axios.get(url)
    .then(function (response) {
      setPosts(response.data);
      setAct("show");
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