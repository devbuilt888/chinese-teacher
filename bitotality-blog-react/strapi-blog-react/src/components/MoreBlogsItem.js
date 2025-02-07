import React from "react";
import calendar from "../images/calendar.png";
import { Link } from "react-router-dom";

const MoreBlogsItem = ({ id, blogTitle, blogContent, preview, featuredImage, date, categoryPicture, categories, header }) => {
  console.log("Rendering MoreBlogsItem with props:", {
    id,
    blogTitle,
    blogContent,
    preview,
    featuredImage,
    date,
    categoryPicture,
    categories,
    header,
  }); // Log the props being used in MoreBlogsItem

  return (
    <div className="more-blogs-item">
      <Link
        to={`/blog/${id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div className="moreBlogs border-secondary mb-3" id={id}>
          <div className="moreBlogs-header"></div>
          <div className="moreBlogs-body">
            <img
              className="moreBlogs-img"
              src={`https://strapi-bnlu.onrender.com${featuredImage} `}
              alt={blogTitle}
            />
            <div className="moreBlogs-content">
              <div className="card-img-header">{header}</div>
              <h4 className="moreBlogs-title">{blogTitle}</h4>
              <p className="moreBlogs-paragraph">{preview}</p>
            </div>
            {/* <img
              className="category-blogs-img"
              src={`https://strapi-bnlu.onrender.com${categoryPicture} `}
              alt={categories}
            /> */}
            <div className="category-blogs-content">
              <p className="category-blogs-span">{categories}</p>
              {/* <p className="category-date-item">
                <img className="calendar-img" src={calendar} />
                {date}
              </p> */}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MoreBlogsItem;
