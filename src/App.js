import React, {useState} from 'react';
import './App.css';
import SiteHeader from './components/header/SiteHeader';
import SiteBody from './components/body/SiteBody';
import SiteFooter from './components/footer/SiteFooter';
import axios from 'axios';


function App() { 
  let [arts, setArts] = useState([]);
  return (
    <div className="App">
      <SiteHeader 
        methodHtmlCss={getCategoryHtmlCss()} 
        methodJava={getCategoryJava()}
        methodJavaScript={getCategoryJavaScript()}
        methodNodeJS={getCategoryNodeJS()}
        methodReactJS={getCategoryReactJS()}
        methodSpringBoot={getCategorySpringBoot()}
      />
      <SiteBody listPost={arts}></SiteBody>
      <SiteFooter></SiteFooter>
    </div>
  );
  function getCategoryHtmlCss(){
    const url = "https://q-site-server.herokuapp.com/category?category=htmlcss";
    return () => {
    axios.get(url)
    .then(function (response) {
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
  function getCategoryJava(){
    const url = "https://q-site-server.herokuapp.com/category?category=java";
    return () => {
    axios.get(url)
    .then(function (response) {
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
  function getCategoryJavaScript(){
    const url = "https://q-site-server.herokuapp.com/category?category=javascript";
    return () => {
    axios.get(url)
    .then(function (response) {
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
  function getCategoryNodeJS(){
    const url = "https://q-site-server.herokuapp.com/category?category=springboot";
    return () => {
    axios.get(url)
    .then(function (response) {
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
  function getCategoryReactJS(){
    const url = "https://q-site-server.herokuapp.com/category?category=nodejs";
    return () => {
    axios.get(url)
    .then(function (response) {
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
  function getCategorySpringBoot(){
    const url = "https://q-site-server.herokuapp.com/category?category=reactjs";
    return () => {
    axios.get(url)
    .then(function (response) {
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