import React from "react";
import Link from "next/link";
import Image from "next/image";

export const Logo: React.FC = () => {
    return (
        <Link href="/">
            <Image
                src="/icons/nextjs-icon.svg"
                alt="nextjs"
                width="96"
                height="58"
                className="cursor-pointer"
            />
        </Link>
    );
};
