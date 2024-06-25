import PropTypes from "prop-types";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Button from "../Button";

const Pagination = ({
  currentPage,
  totalPages,
  setCurrentPage,
  customClass = "",
}) => {
  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  return (
    <div className={`pagination ${customClass}`}>
      <Button
        customClass="pagination__left"
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
        ariaLabel="Previous Page"
      >
        <FaChevronLeft className="pagination__icon" />
      </Button>

      <Button
        customClass="pagination__right"
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        ariaLabel="Next Page"
      >
        <FaChevronRight className="pagination__icon" />
      </Button>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  customClass: PropTypes.string,
};

export default Pagination;
