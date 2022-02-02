import React from "react";
import Link from "next/link";
import { useSession, signIn } from "next-auth/react";
import { Button, Logo } from "@components";
import UserAvatar from "./UserAvatar";

export const Header: React.FC = () => {
    const { data: session, status } = useSession();
    const loading = status === "loading";

    console.log({ session });

    return (
        <header className="sticky top-0 z-[100] flex items-center justify-between px-16 text-white bg-purple-700 drop-shadow-md">
            <Logo />

            <nav className="flex items-center space-x-4">
                <Link href="/tech">
                    <Button>Tech Stack</Button>
                </Link>

                {!session ? (
                    <Button onClick={() => signIn()}>Sign In</Button>
                ) : (
                    <UserAvatar userData={session.user} />
                )}
            </nav>
        </header>
    );
};
