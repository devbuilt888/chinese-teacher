import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BlogHeader } from "./BlogHeader";
import { BlogContent } from "./BlogContent";
import { BlogTags } from "./BlogTags";
import { ShareSection } from "./ShareSection";
import { RelatedArticles } from "./RelatedArticles";
import { BlogFooter } from "./BlogFooter";
import { useParams } from "react-router-dom";
import BlogList from "../Bloglist";
import Navbar from "../Navbar";

function BlogLayout(props) {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(
          `https://strapi-bnlu.onrender.com/${props.blogType === "blog" ? "blogs" : "featured-blogs"}/${id}`
        );
        if (response.status >= 400) {
          throw new Error("Bad Response from Server");
        }
        const res = await response.json();
        setBlog(res);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBlog();
  }, [id, props.blogType]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <BlogContainer>
        <MainContent>
          <BlogContent blog={blog} />
          <BlogTags />
          <ShareSection />
        </MainContent>
      </BlogContainer>
      <BlogFooter />
    </>
  );
}

const BlogContainer = styled.div`
  background-color: #ffffff;
  width: 70%;
  margin-left: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  min-height: 100vh;
`;

const MainContent = styled.main`
  width: 100%;
  max-width: 1720px;
  padding: 0 20px;
  margin: 0 auto;

  @media (max-width: 991px) {
    padding: 0 16px;
  }
`;

export default BlogLayout;
