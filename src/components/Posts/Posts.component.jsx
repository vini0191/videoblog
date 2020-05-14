import React from "react";
import { Link } from "react-router-dom";

import { PostsCointainer } from "./Posts.style";

const Posts = ({ posts, loading }) => {
  if (loading) return <h2>Carregando...</h2>;

  return (
    <PostsCointainer>
      {posts.map(({ id, title, image }) => (
        <Link key={id} to={`/video/${id}`}>
          <img src={image} alt="" />
          <p>{title}</p>
        </Link>
      ))}
    </PostsCointainer>
  );
};

export default Posts;
