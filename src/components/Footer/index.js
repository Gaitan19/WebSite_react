import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";
import { footer } from "@/constants/data";
import Input from "../Input";
import Button from "../Button";
import ContactUs from "../ContactUs";

const Footer = ({ hasContact = false }) => {
  const renderFooterMenu = () =>
    footer.menu.map((option) => (
      <li key={option.id}>
        <Link
          className="text text--secondary footer__menu-option"
          href={option.link}
        >
          {option.text}
        </Link>
      </li>
    ));

  const renderSocialIcons = () => footer.icons.map((icon) => icon);

  const renderContacts = () =>
    footer.contacts.map((contact) => (
      <div key={contact.id} className="footer__contacts-field">
        {contact.icon}
        <Link
          className="text text--secondary footer__contacts-links"
          href={contact.link}
        >
          {contact.text}
        </Link>
      </div>
    ));

  return (
    <footer className="footer">
      {!hasContact && <ContactUs />}
      <div className="container">
        <div className="footer__content">
          <div className="footer__wrapper">
            <div className="footer__social">
              <Image
                className="footer__logo"
                width={196}
                height={54}
                alt="smbs logo"
                src="/image3.png"
              />
              <div className="footer__social-icons">{renderSocialIcons()}</div>
            </div>

            <div className="footer__menu">
              <ul className="footer__menu-list">{renderFooterMenu()}</ul>
            </div>

            <div className="footer__contacts">{renderContacts()}</div>

            <div className="footer__subscribe">
              <span className="title footer__subscribe-title">
                {footer.subscribeTitle}
              </span>
              <span className="text footer__subscribe-text">
                {footer.subscribeText}
              </span>
              <form className="footer__form">
                <Input
                  customClass="input footer__form-input"
                  placeholder="Enter e-mail"
                />
                <Button
                  customClass="button button--gray"
                  buttonText="Subscribe"
                />
              </form>
            </div>
          </div>
          <div className="footer__copyright">
            <span className="footer__copyright-text">{footer.copyright}</span>
            <span className="footer__copyright-text"> |</span>
            <span className="footer__copyright-policy">
              {footer.PrivacyPolicy}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  hasContact: PropTypes.bool,
};

export default Footer;
