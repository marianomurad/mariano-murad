import { RiGithubLine, RiHome2Line, RiLinkedinLine, RiWhatsappLine } from "react-icons/ri";
import { FooterLinks } from "../utils/mockData";

const LayoutComponent = ({children}) => {
    return (
        <div className="flex flex-col h-screen w-screen">
        <div className="flex items-center justify-start h-14 float-left w-full mt-8 border-b-gray-200">
            <a href="/"><RiHome2Line style={{fontSize: 30, marginLeft: 30}} /></a>
        </div>
        <div className="min-h-screen min-w-full">
            {children}
        </div>
        <footer className="flex justify-center items-center border-t-[1px] border-slate-600 h-10">
            <div> Mariano Murad © </div>
            <div className="flex m-4 text-black">
                <a href={FooterLinks.github} style={{fontSize: 30, color: 'black', margin: 10}}><RiGithubLine/></a>
                <a href={FooterLinks.linkedin} style={{fontSize: 30, color: 'black', margin: 10}}><RiLinkedinLine/></a>
                <a href={FooterLinks.whatsapp} style={{fontSize: 30, color: 'black', margin: 10}}><RiWhatsappLine/></a>
            </div>
        </footer>
        </div>
    );
};

export default LayoutComponent;
