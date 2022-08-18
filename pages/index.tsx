import Head from 'next/head'

const app = () => {
  return(
  <>
      <Head>
        <title>Mariano Murad</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main style={{height: '80vh', width: '100%'}}>
        <h1 className="title">
          Mariano Murad
        </h1>

        <p className="description">
          Personal <code>portfolio</code>
        </p>

        <div style={{display: 'flex', flexDirection: 'row'}}>
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
              <h3>Tech Stack &rarr;</h3>
              <p>Is this what you are looking for?</p>
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
        </div>
        <div className='flex flex-col items-center mt-16'>
          <div className='flex'>
          <img src="./undraw_resume_1hqp.svg" width={50} className="px-2" />
          <p>Don't have time to go through the page?</p>
          </div>
          <a className='cursor-pointer underline hover:text-white hover:bg-black'>Download the PDF version!</a>
        </div>
      </main>

      <style jsx>{`
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
  </>)
}
export default app;
