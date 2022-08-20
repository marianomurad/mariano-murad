import Head from "next/head";
import { InlineWidget } from "react-calendly";

const ContactPage = () => {
  return (
    <div className="page">
      <Head>
        <title>Contact - Mariano Murad</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="flex justify-center text-5xl my-8">
          Schedule a meeting!
        </h1>
        <InlineWidget
          url="https://calendly.com/marianomurad21"
          styles={{ height: "900px" }}
        />
      </main>
    </div>
  );
};

export default ContactPage;
