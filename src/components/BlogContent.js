import React from "react";

function BlogContent(props) {
  console.log(props.articleText)
  return <div id="blog-content">{props.articleText}</div>;
}

export default BlogContent;
