import Layout from "../container/Layout";
import "../styled/global.css";
import "line-awesome/dist/line-awesome/css/line-awesome.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
