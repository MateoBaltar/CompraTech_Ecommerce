import { Toaster } from "react-hot-toast";
import { StateContext } from "../../context/StateContext";
import "../styles/globals.css";

import { Layout } from "@/components";
export default function App({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}
