import React from 'react';
import './BodyPostContent.css';
import {Editor, EditorState, convertFromRaw} from 'draft-js'

function Content(props) {
  const {title, content} = props;
  let editorState = EditorState.createWithContent(convertFromRaw(JSON.parse(content)))
 return (
    <div className="Content">
      <div>
        <div><h2>{title}</h2></div>
        <Editor editorState={editorState} readOnly={true}></Editor>
      </div>
    </div>
  );
}
export default Content;
