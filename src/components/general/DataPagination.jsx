import Pagination from "@mui/material/Pagination";
export const DataPagination = ({ page, count, handlePageChange }) => {
  return (
    <Pagination
      count={count}
      page={page}
      onChange={handlePageChange}
      color="primary"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    />
  );
};
