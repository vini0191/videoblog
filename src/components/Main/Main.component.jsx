import React, { useState, useEffect } from "react";

import {
  MainContainer,
  Content,
  AdUnitVertical,
  AdUnitRectangle,
  MainText,
} from "./Main.style";
import Videos from "../Videos/Videos.component";
import Pagination from "../Pagination/Pagination.component";
import videoLinks from "./videoLinksArray";

const Main = () => {
  // const [videos, setVideos] = useState([]);
  const [filteredVideos, setFilteredVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [videosPerPage] = useState(16);
  const [search, setSearch] = useState("");

  // useEffect(() => {
  //   setLoading(true);
  //   setVideos([...videoLinks].reverse());
  //   setLoading(false);
  // }, []);

  // Filter videos
  // const filteredVideos = currentVideos.filter((currentVideo) =>
  //   currentVideo.title.toLowerCase().includes(search.toLowerCase())
  // );

  // const filteredVideos = videoLinks.filter((video) =>
  //   video.title.toLowerCase().includes(search.toLowerCase())
  // );

  useEffect(() => {
    setLoading(true);
    setFilteredVideos(
      [...videoLinks]
        .reverse()
        .filter((video) =>
          video.title.toLowerCase().includes(search.toLowerCase())
        )
    );
    setLoading(false);
    setCurrentPage(1);
  }, [search]);

  // Get current videos
  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  // const currentVideos = videos.slice(indexOfFirstVideo, indexOfLastVideo);
  const currentFilteredVideos = filteredVideos.slice(
    indexOfFirstVideo,
    indexOfLastVideo
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <MainContainer>
      <MainText>
        Bem vindo ao Memorial do Corinthians! Reunimos os vídeos mais
        importantes da história do Corinthians, desde o Paulista de 77 até
        momentos marcantes das conquistas da Libertadores e do Mundial.
        Compartilhe com os amigos e celebre registros inesquecíveis nesta
        trajetória do Timão.
      </MainText>
      <AdUnitRectangle />
      {/* <h1>Videos!</h1> */}
      <input
        type="text"
        placeholder="Busca"
        onChange={(e) => setSearch(e.target.value)}
      />
      <Content>
        {/* <Videos videos={currentVideos} loading={loading} /> */}
        <Videos
          // videos={search === "" ? currentVideos : currentFilteredVideos}
          videos={currentFilteredVideos}
          loading={loading}
        />
        <AdUnitVertical />
      </Content>
      <Pagination
        videosPerPage={videosPerPage}
        // totalVideos={videos.length}
        // totalVideos={search === "" ? videos.length : filteredVideos.length}
        totalVideos={filteredVideos.length}
        paginate={paginate}
      />
      <AdUnitRectangle />
    </MainContainer>
  );
};

export default Main;
