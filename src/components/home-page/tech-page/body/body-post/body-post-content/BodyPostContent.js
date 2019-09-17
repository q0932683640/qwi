import React from 'react';
import {EditorState, convertFromRaw} from 'draft-js'
import Editor from "draft-js-plugins-editor";
import createImagePlugin from "draft-js-image-plugin";
import { useSelector } from "react-redux";

function Content() {
  const post = useSelector(state=>state.currentPost);
  const imagePlugin = createImagePlugin();
  const plugins = [imagePlugin];
  let editorState = EditorState.createEmpty();
  let title ="";
  let content;
  if(post){
    title = post.title;
    editorState = EditorState.createWithContent(convertFromRaw(JSON.parse(post.content)));
    content= <div>            
                <div style={styles.title}>
                  <h2>{title}</h2>
                  <div></div>               
                </div>
                <Editor onChange={()=>{}} editorState={editorState} readOnly={true} plugins={plugins}></Editor>            
                <div style={styles.author}>
                  <div>
                    <h6>Author!</h6>
                    <i className="fas fa-user"></i>
                  </div>
                </div>
              </div>
  }
 return (
    <div style={styles.body}>
      {content}
    </div>
  );
}
const styles = {
  body: {
    backgroundColor: "#fff",
    padding: "0px 50px"
  },
  title: {
    padding: "10px 0"
  },
  author: {
    paddingTop: "30px",
    paddingRight: "50px",
    display: "flex",
    justifyContent: "flex-end"
  }
}
export default Content;
