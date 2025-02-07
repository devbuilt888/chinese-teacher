import Navbar from "./components/Navbar";
import BlogList from "./components/Bloglist";
import React, { useState } from "react";

import MainArticle from "./components/MainArticle";
import MainArticleImg from "./components/MainArticleImg";
import MainTable from "./components/MainTable";
import MoreBlogs from "./components/MoreBlogs";
// import arrowYellowJumboImg from "./images/XMLID_734_.png";
// import arrowGreenJumboImg from "./images/XMLID_592_.png";
import arrowYellowJumboImg from "./images/avaPictureLogo.gif";
import arrowGreenJumboImg from "./images/tetherLogo.gif";
import { BlogFooter } from "./components/BlogLayout/BlogFooter";
import BlogPostList from "./components/BlogPostList/index";
import BlogVideo from "./components/BlogVideo/index";

import BlogLayout from "./components/BlogLayout";
import VideoGrid from "./components/VideoGrid/VideoGrid";
import Pagination from "./components/Pagination/index";
import ConnectWallet from "./components/ConnectWallet";
import CheckToken from "./components/CheckToken";

function Container() {
  const [showBlog, setShowBlog] = useState(true);

  return (
    <div className="App">
      {showBlog ? (
        <>
          <div className="main-container">
            <Navbar />
            <ConnectWallet />
            <CheckToken />
            <img className="arrowYellowJumboImg" src={arrowYellowJumboImg} />
            <img className="arrowGreenJumboImg" src={arrowGreenJumboImg} />
            <MainArticleImg />
            <MainArticle />
            <BlogList />
            <VideoGrid />
            {/* <BlogVideo /> */}
            {/* <BlogPostList /> */}

            {/* <MainArticleImg />
      <MainTable tableRows={threeArrays}/> */}
            <MoreBlogs />
            {/* <Pagination /> */}
          </div>
          <BlogFooter />
       

        </>
      ) : (
        <BlogLayout />
      )}
    </div>
  );
}

export default Container;
