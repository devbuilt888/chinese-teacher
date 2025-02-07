import React, { useEffect, useState } from "react";
import calendar from "../images/calendar.png";
import { Link } from "react-router-dom";

const BloglistItem = (props) => {
  const [category, setCategory] = useState();

  useEffect(() => {
    // props.categories?.forEach((attributes) => {
    //   console.log(attributes.attributes.categoryTitle);
      // setCategory(attributes.attributes.categoryTitle);
      setCategory(props.category);

      
    // });
  }, []);

  const itemId = props.id;
  const blogId = props.id;
  let borderColor;
  let randomVal;
  // console.log(props.categories);

  function randomColorizer() {
randomVal = Math.random();
  }
  randomColorizer();

  if (randomVal < 0.25) {
    borderColor = "yellow-border";
  } else if (randomVal > 0.25 && randomVal < 0.50) {
    borderColor = "green-border";
  } else if (randomVal > .50 && randomVal < .75) {
    borderColor = "blue-border";
  } else {
    borderColor = "red-border";
  }
  // if a certain category, then change class of element for color change

  return (
    <div className="grid-item">
      <Link
        to={`/featured-blog/${blogId}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div className={borderColor}>
          <div className="card-header"></div>
          <div className="card-body">
            <div className="card-img-span">{props.header}</div>
            <img
              className="card-img"
              src={`https://strapi-bnlu.onrender.com${props.featuredImage}`}
            />
            <img
              className="category-blogs-img"
              src={`https://strapi-bnlu.onrender.com${props.categoryPicture}`}
            />
            <div className="category-blogs-content">
              <p className="category-blogs-span">{category}</p>
              <p className="category-date-item">
                <img className="calendar-img" src={calendar} />
                {props.date}
              </p>
            </div>
            <div className="card-content">
              <h4 className="card-title">{props.blogTitle}</h4>
              <p className="card-paragraph">{props.preview}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BloglistItem;
