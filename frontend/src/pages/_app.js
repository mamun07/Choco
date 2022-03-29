import Layout from "../container/Layout";
import "../styled/global.css";
import "line-awesome/dist/line-awesome/css/line-awesome.min.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "animate.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
