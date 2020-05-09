import React from "react";
import { Link } from "react-router-dom";

import { PaginationContainer } from "./Pagination.style";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationContainer>
      {pageNumbers.map((number) => (
        <Link key={number} onClick={() => paginate(number)}>
          {number}
        </Link>
      ))}
    </PaginationContainer>
  );
};

export default Pagination;
