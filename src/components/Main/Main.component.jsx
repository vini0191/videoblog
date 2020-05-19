import React, { useState, useEffect } from "react";

import {
  MainContainer,
  Content,
  AdUnitVertical,
  AdUnitRectangle,
  MainText,
  SearchBar,
} from "./Main.style";
import Videos from "../Videos/Videos.component";
import Pagination from "../Pagination/Pagination.component";

const Main = ({ videos }) => {
  const [filteredVideos, setFilteredVideos] = useState(videos);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [videosPerPage] = useState(16);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setLoading(true);
    setFilteredVideos(
      [...videos].filter((video) =>
        video.title.toLowerCase().includes(search.toLowerCase())
      )
    );
    setLoading(false);
    setCurrentPage(1);
  }, [search, videos]);

  // Get current videos
  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentFilteredVideos = filteredVideos.slice(
    indexOfFirstVideo,
    indexOfLastVideo
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <MainContainer>
      <MainText>
        <p>
          Bem vindo ao Memorial do Corinthians! Reunimos os vídeos mais
          importantes da história do Corinthians, desde o Paulista de 77 até
          momentos marcantes das conquistas da Libertadores e do Mundial.
          Compartilhe com os amigos e celebre registros inesquecíveis nesta
          trajetória do Timão.
        </p>
      </MainText>
      <AdUnitRectangle />
      <SearchBar
        type="text"
        placeholder="Busca"
        onChange={(e) => setSearch(e.target.value)}
      />
      <Content>
        <Videos videos={currentFilteredVideos} loading={loading} />
        <AdUnitVertical />
      </Content>
      <Pagination
        videosPerPage={videosPerPage}
        totalVideos={filteredVideos.length}
        paginate={paginate}
      />
      <AdUnitRectangle />
    </MainContainer>
  );
};

export default Main;
