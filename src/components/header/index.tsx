import React from "react";
import Link from "next/link";

import { Button, Logo } from "@components";

export const Header: React.FC = () => {
    return (
        <header className="sticky top-0 z-[100] flex items-center justify-between px-16 text-white bg-purple-700 drop-shadow-md">
            <Logo />

            <nav>
                <Link href="/tech">
                    <Button>Tech Stack</Button>
                </Link>
            </nav>
        </header>
    );
};
