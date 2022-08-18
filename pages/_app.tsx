import LayoutComponent from "../app/components/Layout";
import { ChakraProvider } from '@chakra-ui/react'
import '../app/styles/globals.css'
import 'tailwindcss/tailwind.css'


function CustomApp ({Component, pageProps}) {
    return (<ChakraProvider>
            <LayoutComponent>
                <Component {...pageProps}/>
            </LayoutComponent>
        </ChakraProvider>);
}  

export default CustomApp;

