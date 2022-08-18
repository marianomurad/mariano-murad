import Head from "next/head";
import { InlineWidget } from "react-calendly";

const ContactPage = () => {
    return (
        <div className="page">
            <Head>
                <title>Contact - Mariano Murad</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main>
                <h1 className="text-5xl my-16">Schedule a meeting!</h1>
                <InlineWidget url="https://calendly.com/marianomurad21" styles={{height: '1000px'}}/>
            </main>
        </div>
    );
};

export default ContactPage;
