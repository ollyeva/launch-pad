import {ReactNode} from "react";
import {ThemeProvider} from "styled-components";
import {theme} from "../utils/styling";
import GlobalStyles from "../components/atoms/globalStyles";
import Seo from "../components/atoms/Seo";
import Header from "../components/molecules/Header";
import Footer from "../components/molecules/Footer";
import Container from "../components/atoms/Container";

interface LayoutProps {
    children: ReactNode
}

export default function Layout({children}: LayoutProps) {
    return (
        <ThemeProvider theme={theme}>
            <>
                <Seo/>
                <GlobalStyles/>
                <main>
                    <Header/>
                    <Container>{children}</Container>
                    <Footer/>
                </main>
            </>
        </ThemeProvider>
    )
}
