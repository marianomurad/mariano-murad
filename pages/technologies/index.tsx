import Head from "next/head";

const TechnologiesPage = () => {
  const tech = [
    { name: "React.js" },
    { name: "Next.js" },
    { name: "Node.js" },
    { name: ".NET Core" },
    { name: "Elixir" },
  ];

  return (
    <div className="page">
      <Head>
        <title>Tech Stack - Mariano Murad</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="flex justify-center text-5xl my-16"> Tech Stack</h1>
        <div className="flex justify-center">
          <ul>
            {tech.map((tech) => {
              return <li key={tech.name}>{tech.name}</li>;
            })}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default TechnologiesPage;
