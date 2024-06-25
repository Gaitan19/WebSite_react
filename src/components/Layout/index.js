import PropTypes from "prop-types";
import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../Header";
import Footer from "../Footer";
import { getPageTitle } from "@/utils/getPageTitle";
import { routes } from "@/constants/routes";

const Layout = (props) => {
  const { children, description = "SMBS website" } = props;

  const router = useRouter();

  return (
    <>
      <Head>
        <title>{`SMBS | ${getPageTitle(router.pathname)}`}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.webp" />
      </Head>
      <Header page={getPageTitle(router.pathname)} />
      {children}
      <Footer hasContact={router.pathname === `${routes.careers}/[id]`} />
    </>
  );
};

Layout.propTypes = {
  description: PropTypes.string,
};

export default Layout;
