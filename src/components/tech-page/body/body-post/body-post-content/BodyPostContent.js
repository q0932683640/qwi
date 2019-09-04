import React from 'react';
import './BodyPostContent.css';
import {EditorState, convertFromRaw} from 'draft-js'
import Editor from "draft-js-plugins-editor";
import createImagePlugin from "draft-js-image-plugin";

function Content(props) {
  const {title, content} = props;
  const imagePlugin = createImagePlugin();
  const plugins = [imagePlugin];
  let editorState = EditorState.createWithContent(convertFromRaw(JSON.parse(content)))
 return (
    <div className="Content">
      <div>
        <div><h2>{title}</h2></div>
        <Editor editorState={editorState} readOnly={true} plugins={plugins}></Editor>
      </div>
    </div>
  );
}
export default Content;
