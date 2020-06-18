import Navbar from "./Navbar";
import Head from "next/head";

const Layout = (props) => (
  <div>
    <Head>
      <title>BTC - Price</title>
      <link
        rel="stylesheet"
        href="https://bootswatch.com/4/cerulean/bootstrap.min.css"
      />
    </Head>
    <Navbar />
    <div className="container">
      <h1 style={{ textAlign: "center", fontFamily: "times" }}>BTC-Price</h1>
      <br /> <br />
      {props.children}
    </div>
  </div>
);

export default Layout;
