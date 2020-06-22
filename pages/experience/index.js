import Head from "next/head";
import {expList} from "../../app/utils/utils";

const ExperiencePage = () => {
    return (
        <div className="page" style={{backgroundColor: '#e9e9e9'}}>
            <Head>
                <title>Experience - Mariano Murad</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main>
            <h1 style={{fontSize: 50}}> Experience</h1>
                <ul style={{paddingLeft: 0}}>
                    {expList.map(item =>
                    <li style={{listStyleType: 'none', margin: 20}}>
                        <div style={{border: '2px solid #A9A9A9', marginBottom: 20, borderRadius: 10, padding: 10, boxShadow: '2px 2px  #c4c4c4'}}>
                            <div style={{ borderBottom: '1px solid #A9A9A9', width: '100%'}}>
                                <h1 style={{marginBottom: 5, marginTop: 0, fontSize: 25}}>{item.title}</h1>
                                <h4 style={{color: '#A9A9A9', fontWeight: 300, margin: 0}}>{item.company}</h4>
                                <p style={{color: '#888888', fontSize: 15, fontWeight: 200, marginTop: 5}}>{item.startDate} / {item.endDate}</p>
                            </div>
                            <p>{item.desc}</p>
                        </div>
                    </li>
                    )}
                </ul>
            </main>
        </div>
    );
};

export default ExperiencePage;
