import React, { useEffect } from "react";
import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "../src/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { Notification } from "@components/notification";
import { StyledThemeProvider } from "@definitions/styled-components";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    // Always scroll to top when page loads
    useEffect(() => {
        if (history.scrollRestoration) {
            history.scrollRestoration = "manual";
        } else {
            window.onbeforeunload = function () {
                window.scrollTo(0, 0);
            };
        }
    }, []);

    return (
        <SessionProvider session={pageProps.session}>
            <StyledThemeProvider>
                <Component {...pageProps} />
                <Notification />
            </StyledThemeProvider>
        </SessionProvider>
    );
}

export default MyApp;
