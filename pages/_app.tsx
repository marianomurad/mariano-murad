import LayoutComponent from "../app/components/Layout";
import '../app/styles/globals.css'
import 'tailwindcss/tailwind.css'


function CustomApp ({Component, pageProps}) {
    return (
        <>
        <LayoutComponent>
            <Component {...pageProps}/>
        </LayoutComponent>
  </>
    );
}

export default CustomApp;
