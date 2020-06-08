import Head from "next/head";

const ExperiencePage = () => {
    return (
        <div className="page">
            <Head>
                <title>Experience - Mariano Murad</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main>
            <h1> Experience</h1>
                <ul>
                    {expList.map(item =>
                    <li>
                        {item.value}
                    </li>
                    )}
                </ul>
            </main>
        </div>
    );
};

export default ExperiencePage;
