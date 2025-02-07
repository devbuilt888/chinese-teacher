import React, { useEffect, useState } from "react";
import fetch from "isomorphic-fetch";
import BloglistItem from "./BloglistItem";
import Button from "./Button";
import ButtonGroup from "./ButtonGroup";
// import arrowGreenImg from "../images/XMLID_599_.png";
import avaLogoGif from "../images/avaPictureLogo (2).gif";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);
  const baseURL = "https://strapi-bnlu.onrender.com"; // Base URL of your API

  useEffect(() => {
    fetch(`${baseURL}/featured-blogs`)
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
    <>
      <h3 className="featured-blogs-title">Featured blogs</h3>

      <div className="featured-blogs-container">
        <img className="green-arrow-img" src={avaLogoGif} />
        <div className="grid-container">
          {error && <p className="error-message">{error}</p>}
          {blogs?.map((blog) => {
            const { id, featuredTitle, featuredContent, preview, featuredImage, date, categoryPicture, category, header } = blog;
            const featuredImageUrl = featuredImage[0]?.url;
            const categoryPictureUrl = categoryPicture[0]?.url;
            console.log("Featured Image URL:", featuredImageUrl); // Log the featured image URL
            console.log("Category Picture URL:", categoryPictureUrl); // Log the category picture URL
            console.log("BloglistItem props:", {
              id,
              blogTitle: featuredTitle,
              blogContent: featuredContent,
              preview,
              featuredImage: featuredImageUrl,
              date,
              categoryPicture: categoryPictureUrl,
              categories: category,
              header,
            }); // Log the props being passed to BloglistItem
            return (
              <BloglistItem
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
        <div>
          <h1></h1>
        </div>
      </div>
    </>
  );
};

export default BlogList;
