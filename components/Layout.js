import Head from "next/head";
import Header from "./header";

import { CookiesProvider } from "react-cookie";

const Layout = (props) => (
  <React.Fragment>
    <Head>
      <title>Protirodh</title>
    </Head>

    <CookiesProvider>
      <Header />

      {props.children}
    </CookiesProvider>
  </React.Fragment>
);

export default Layout;
