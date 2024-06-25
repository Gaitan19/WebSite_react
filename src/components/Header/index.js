import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { Helmet } from "react-helmet";
import Button from "../Button";
import { options, routes } from "@/constants/routes";
import Dropdown from "../Dropdown";

const Header = (props) => {
  const { page } = props;

  const [isShowNav, setIsShowNav] = useState(false);

  const renderMenu = () =>
    options.map((option) => {
      const isActive = option.url
        ? page === option.url.replaceAll("/", "")
        : option.submenu
            .map((item) => item.url.replaceAll("/", ""))
            .includes(page);

      return (
        <li
          key={option.id}
          className={`navbar__option ${isActive && "navbar__option--active"}`}
        >
          {option.submenu ? (
            <>
              {option.text}
              <Dropdown options={option.submenu} />
            </>
          ) : (
            <Link
              className={`navbar__link ${isActive && "navbar__link--active"}`}
              href={option.url}
            >
              {option.text}
            </Link>
          )}
        </li>
      );
    });

  const handleShowMenu = () => setIsShowNav(() => !isShowNav);

  return (
    <header className="header">
      {isShowNav && (
        <Helmet>
          <body className="header--body-hidden" />
        </Helmet>
      )}
      <div className="container d-flex justify-content-between flex-wrap">
        <Link href={routes.home} className="d-flex">
          <Image
            className="header__logo"
            src="/smbs-logo.png"
            width={208}
            height={51}
            alt="smbs logo"
          />
        </Link>
        <Button customClass="button button--toggle" onClick={handleShowMenu}>
          <FaBars />
        </Button>
        <div className="header__nav">
          <nav className={`navbar ${isShowNav && "navbar--open"}`}>
            <ul className="navbar__menu">{renderMenu()}</ul>
          </nav>
          <Button
            customClass="button button--navbar"
            buttonText="SCHEDULE A CALL"
          />
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  page: PropTypes.string.isRequired,
};

export default Header;
