import React, { useEffect, useState } from "react";
import fetch from "isomorphic-fetch";
import MoreBlogsItem from "./MoreBlogsItem";
import Button from "./Button";
import ButtonGroup from "./ButtonGroup";
// import arrowRedImg from "../images/XMLID_589_.png";
import arrowRedImg from "../images/bitcoinLogoRotate.gif";
import arrowPurpleImg from "../images/bitcoinLogoRotate.gif";
import etherLogo from "../images/bitcoinLogoRotate.gif";

const MoreBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);
  const baseURL = "https://strapi-bnlu.onrender.com"; // Base URL of your API

  useEffect(() => {
    fetch(`${baseURL}/blogs`)
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Bad Response from Server");
        }
        return response.json();
      })
      .then((res) => {
        console.log("Fetched data:", res); // Log the fetched data
        setBlogs(res);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  useEffect(() => {
    console.log("Blogs state:", blogs); // Log the blogs state
  }, [blogs]);

  return (
    <div className="all-blogs-container">
      <h3 className="all-blogs-title">More blogs</h3>
      {error && <p className="error-message">{error}</p>}
      <div className="moreBlogs-container">
        {blogs?.map(({ id, featuredTitle, featuredContent, preview, featuredImage, date, categoryPicture, category, header }) => {
          const featuredImageUrl = `${featuredImage[0]?.url}`;
          const categoryPictureUrl = `${categoryPicture[0]?.url}`;
          console.log("Featured Image URL:", featuredImageUrl); // Log the featured image URL
          console.log("Category Picture URL:", categoryPictureUrl); // Log the category picture URL
          console.log("MoreBlogsItem props:", {
            id,
            blogTitle: featuredTitle,
            blogContent: featuredContent,
            preview,
            featuredImage: featuredImageUrl,
            date,
            categoryPicture: categoryPictureUrl,
            categories: category,
            header,
          }); // Log the props being passed to MoreBlogsItem
          return (
            <MoreBlogsItem
              key={id}
              id={id}
              blogTitle={featuredTitle}
              blogContent={featuredContent}
              preview={preview}
              featuredImage={featuredImageUrl}
              date={date}
              categoryPicture={categoryPictureUrl}
              categories={category}
              header={header}
            />
          );
        })}
      </div>
      <img className="red-arrow-img" src={arrowRedImg} />
      <img className="purple-arrow-img" src={arrowPurpleImg} />
      <img className="ethereum-gif" src={etherLogo} />

      <div>
        <h1></h1>
      </div>
    </div>
  );
};

export default MoreBlogs;
