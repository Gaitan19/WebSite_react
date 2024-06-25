import PropTypes from "prop-types";
import Pagination from "../Pagination";

const OpeningPagination = ({ currentPage, totalPages, setCurrentPage }) => {
  return (
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      setCurrentPage={setCurrentPage}
      customClass="opening__pagination"
    />
  );
};

OpeningPagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

export default OpeningPagination;
