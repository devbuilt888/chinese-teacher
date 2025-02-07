import React, { Fragment, useEffect, useState } from "react";
import calendar from "../images/calendar.png";
import styled from "styled-components";
import { AuthorCard } from "./AuthorCard";
import { Link } from "react-router-dom";

const MainArticle = () => {
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch(`https://strapi-bnlu.onrender.com/featured-blogs/6`)
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Bad Response from Server");
        }
        return response.json();
      })
      .then((res) => {
        setBlog(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <Fragment>
      <Link to={`/featured-blog/6`} style={{ textDecoration: "none", color: "inherit" }}>
        <div className="main-jumbo">
          <div className="jumbo-header">{blog.header}</div>
          <div className="jumbo-body">
            <h1 className="jumbo-title">{blog.featuredTitle}</h1>
            <p className="jumbo-text">{blog.featuredContent}</p>
            {/* <div className="category-blogs-content">
               <p className="category-blogs-span"></p>
              <AuthorCard />
              <p className="category-date">
                <img className="calendar-img" src={calendar} />
                <DateText>{blog.date}</DateText>
              </p> 
            </div> */}
            {/* <img
              className="category-blogs-img"
              src={`https://strapi-bnlu.onrender.com${blog.categoryPicture[0]?.url}`}
              alt={blog.featuredTitle}
            /> */}
          </div>
        </div>
      </Link>
    </Fragment>
  );
};

export default MainArticle;

const DateText = styled.div`
  flex-basis: auto;
`;
