import React, { useEffect, useState } from "react";
import { getSession, getProviders, signIn } from "next-auth/react";
import Router from "next/router";

const Login = ({ session }) => {
    const [providers, setProviders] = useState(null);

    useEffect(() => {
        (async () => {
            const res = await getProviders();
            setProviders(res);
        })();
    }, []);

    useEffect(() => {
        if (session) return Router.push("/");
    }, [session]);

    if (session) return null;
    return (
        <div className="grid min-h-screen place-items-center">
            <div className="flex flex-col">
                <button onClick={() => signIn(providers?.google?.id)}>
                    Sign In with {providers?.google?.name}
                </button>
                <button onClick={() => signIn(providers?.facebook?.id)}>
                    Sign In with {providers?.facebook?.name}
                </button>
                <button onClick={() => signIn(providers?.github?.id)}>
                    Sign In with {providers?.github?.name}
                </button>
            </div>
        </div>
    );
};

Login.getInitialProps = async (context) => {
    return {
        session: await getSession(context),
    };
};

export default Login;
