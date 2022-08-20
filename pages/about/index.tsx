import Head from "next/head";

const AboutPage = () => {
  return (
    <div className="page">
      <Head>
        <title>About - Mariano Murad</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-5xl my-16"> About me</h1>
        <p>
          I'm a fullstack with a focus on the frontend. I love structure and
          order and I also stand for quality. I love spending time on fixing
          little details and optimizing web apps.
        </p>
      </main>
    </div>
  );
};

export default AboutPage;
