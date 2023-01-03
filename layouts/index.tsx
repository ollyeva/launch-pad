import {ReactNode} from "react";
import {ThemeProvider} from "styled-components";
import {theme} from "../utils/styling";
import GlobalStyles from "../components/atoms/globalStyles";
import Seo from "../components/atoms/Seo";

interface ModuleProps {
    children: ReactNode
}

export default function Layout({children}: ModuleProps) {
    return (
        <ThemeProvider theme={theme}>
            <>
                <Seo/>
                <GlobalStyles/>
                <main>
                    {children}
                </main>
            </>
        </ThemeProvider>
    )
}
