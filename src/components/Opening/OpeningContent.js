import { useMemo, useState } from "react";
import PropTypes from "prop-types";
import OpeningList from "./OpeningList";
import OpeningPagination from "./OpeningPagination";

const OpeningContent = ({ offers, selectedPosition }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const offersPerPage = useMemo(() => {
    return selectedPosition === "all" ? 4 : offers.length;
  }, [selectedPosition, offers.length]);

  const filteredOffers = useMemo(() => {
    return selectedPosition === "all"
      ? offers
      : offers.filter((offer) =>
          offer.title.toLowerCase().includes(selectedPosition.toLowerCase()),
        );
  }, [selectedPosition, offers]);

  const paginatedOffers = useMemo(() => {
    const startIndex = (currentPage - 1) * offersPerPage;
    const endIndex = currentPage * offersPerPage;

    return filteredOffers.slice(startIndex, endIndex);
  }, [currentPage, offersPerPage, filteredOffers]);

  const totalPages = useMemo(() => {
    return Math.ceil(filteredOffers.length / offersPerPage);
  }, [filteredOffers.length, offersPerPage]);

  return (
    <div className="opening__tab-wrapper">
      {filteredOffers.length > 0 && (
        <div className="opening__tab-content">
          <OpeningList offers={paginatedOffers} />
        </div>
      )}

      {filteredOffers.length === 0 && (
        <p className="opening__offer-empty">
          No offers for
          <span className="text-capitalize"> {selectedPosition}</span>
        </p>
      )}

      {totalPages > 1 && (
        <OpeningPagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
};

OpeningContent.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      experience: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
    }),
  ).isRequired,
  selectedPosition: PropTypes.string.isRequired,
};

export default OpeningContent;
