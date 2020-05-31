import Head from 'next/head'
import { RiGithubLine, RiLinkedinLine } from "react-icons/ri";

const app = () => {
  return(
  <>
    <div className="container">
      <Head>
        <title>Mariano Murad</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main>
        <h1 className="title">
          Mariano Murad
        </h1>

        <p className="description">
          Personal <code>portfolio</code>
        </p>

        <div className="grid">
          <a href="experience" className="card">
            <h3>Experience &rarr;</h3>
            <p>Previous Jobs, Current, and Future Plans.</p>
          </a>

          <a href="about" className="card">
            <h3>About &rarr;</h3>
            <p>Get an insight on my life & interests.</p>
          </a>

          <a
              href="technologies"
              className="card"
          >
            <h3>Technologies &rarr;</h3>
            <p>I this what you are looking for?</p>
          </a>

          <a
              href="contact"
              className="card"
          >
            <h3>Contact &rarr;</h3>
            <p>
              Let's schedule a meeting.
            </p>
          </a>
        </div>
      </main>

      <footer>
        <div> Mariano Murad ® </div>
        <div className="icons">
          <a href="www.github.com/marianomurad" target="_blank" rel="noopener noreferrer"> <RiGithubLine/> </a>
          <a href="www.linkedin.com/marianomurad" target="_blank" rel="noopener noreferrer"> <RiLinkedinLine/> </a>
        </div>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: black;
          color: white;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          align-items: center;
          font-size: 20px;
        }
        footer .icons {
          margin: 15px;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          color: black;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #777777;
          border-color: #e3e3e3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  </>)
}
export default app;
