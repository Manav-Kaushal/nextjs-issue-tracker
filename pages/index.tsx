import React from "react";

import {
    Container,
    Header,
    IssueForm,
    Footer,
    IssuesDisplayPanel,
} from "@components";

const Home: React.FC = () => {
    return (
        <Container>
            <Header />
            {/* <Hero /> */}
            <div className="grid min-h-screen grid-cols-2">
                <IssueForm />
                <IssuesDisplayPanel />
            </div>
            <Footer />
        </Container>
    );
};

export default Home;
