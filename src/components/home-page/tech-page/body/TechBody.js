import React from 'react';
import BodyPost from './body-post/BodyPost';

function TechBody(props) {
  return (
    <div style={styles.body}>   
      {
        <BodyPost></BodyPost>
      }
    </div>
  );
}
const styles = {
  body:{
    backgroundColor: "#fff",
    minHeight: "600px"
  }
}
export default TechBody;
