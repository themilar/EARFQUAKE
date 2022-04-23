import Pagination from "@mui/material/Pagination";

export const DataPagination = ({ pageCount, currentPage }) => {
  const handlePageChange = (_, v) => this.setState({ currentPage: v });
  return (
    <Pagination
      count={pageCount}
      page={currentPage}
      onChange={handlePageChange}
      color="primary"
      size="large"
    />
  );
};
