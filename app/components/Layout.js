import {RiGithubLine, RiHome2Line, RiLinkedinLine, RiWhatsappLine, RiRecordMailLine} from "react-icons/ri";
import Link from "next/link";
import {FooterLinks} from "../utils/utils";
const LayoutComponent = ({children}) => {
    return (
        <div className="container">
        <div style={{minHeight: 50, display: 'flex', alignItems: 'center', justifyContent: 'flex-start', float: 'left', width: '100%'}}>
                <Link href="/" replace>
                    <RiHome2Line style={{fontSize: 30, marginLeft: 30}} />
                </Link>
        </div>
            {children}
            <footer>
                <div> Mariano Murad © </div>
                <div className="icons">
                    <a href={FooterLinks.github} style={{fontSize: 30, color: 'black', margin: 10}}><RiGithubLine/></a>
                    <a href={FooterLinks.linkedin} style={{fontSize: 30, color: 'black', margin: 10}}><RiLinkedinLine/></a>
                    <a href={FooterLinks.whatsapp} style={{fontSize: 30, color: 'black', margin: 10}}><RiWhatsappLine/></a>
                </div>
            </footer>
            <style jsx>{`
        footer {
                width: 100%;
                height: 100px;
                border-top: 1px solid #eaeaea;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                font-size: 20px;
            }
        footer .icons {
            margin: 15px;
            color: black;
        }

        footer img {
            margin-left: 0.5rem;
        }

        footer {
            display: flex;
            justify-content: center;
            align-items: center;
        }`}</style>
        </div>
    );
};

export default LayoutComponent;
