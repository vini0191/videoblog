import React, { useState, useEffect } from "react";

import {
  MainContainer,
  Content,
  AdUnitVertical,
  AdUnitRectangle,
} from "./Main.style";
import Posts from "../Posts/Posts.component";
import Pagination from "../Pagination/Pagination.component";
import videolinks from "./videolinksArray";

const Main = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(16);

  useEffect(() => {
    setLoading(true);
    // setPosts(videolinks.reverse());
    setPosts([...videolinks].reverse());
    setLoading(false);
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <MainContainer>
      <h2>
        VideoBlog do Corinthians. Esta plataforma pode ser customizada para
        qualquer tema e assunto do seu interesse, desde videos de memes, até
        notícias, receitas e o que mais considerar interessante. Entre em
        contato com a Codecaravan para conhecer nossos incríveis serviços de
        tecnologia e design.
      </h2>
      <AdUnitRectangle />
      {/* <h1>Videos!</h1> */}
      <Content>
        <Posts posts={currentPosts} loading={loading} />
        <AdUnitVertical />
      </Content>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
      <AdUnitRectangle />
    </MainContainer>
  );
};

export default Main;
