import React from "react";
import styled from "styled-components";
import { BlogTitle } from "./BlogTitle";
import { BlogAuthor } from "./BlogAuthor";
import { BlogBody } from "./BlogBody";

export function BlogContent(props) {
  return (
    <Article>
      <BlogTitle title={props.blog.featuredTitle} />
      <BlogAuthor />
      <BlogBody blog={props.blog} />
    </Article>
  );
}

const Article = styled.article`
  width: 100%;
  max-width: 1170px;
  margin: 0 auto;
`;
