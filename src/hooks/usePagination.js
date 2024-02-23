import { useState } from "react";

function usePagination(data, itemsPerPage) {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstITem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstITem, indexOfLastItem);

  const nextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };
  const prevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };
  return {
    currentItems,
    nextPage,
    prevPage,
    currentPage,
    totalItems: data.length,
    totalPages: Math.ceil(data.length / itemsPerPage),
  };
}
export default usePagination;
