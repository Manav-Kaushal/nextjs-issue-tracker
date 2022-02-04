import React from "react";
import { getSession, signIn, useSession } from "next-auth/react";
import {
    Container,
    Header,
    IssueForm,
    Footer,
    IssuesDisplayPanel,
} from "@components";
import { HomeInterface } from "@interfaces/GlobalInterfaces";

const Home: React.FC<HomeInterface> = ({ session }) => {
    const { status } = useSession();
    const loading = status === "loading";

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <Container>
            <Header />

            {/* {!session && (
                <>
                    <button onClick={() => signIn()}>Sign In</button>
                </>
            )} */}

            {session && (
                <div className="grid min-h-screen gradient-background grid-col-1 md:grid-cols-2">
                    <IssueForm />
                    <IssuesDisplayPanel />
                </div>
            )}

            <Footer />
        </Container>
    );
};

export async function getServerSideProps(context) {
    const session = await getSession(context);

    if (!session) {
        return {
            redirect: {
                destination: "/login",
                permanent: false,
            },
        };
    }

    return {
        props: { session },
    };
}

export default Home;
