import React from "react";
import Image from "next/image";

export const Footer: React.FC = () => {
    return (
        <div className="py-5 text-center bg-gray-800">
            <a
                href="https://github.com/pankod"
                target="_blank"
                className="block mb-3"
            >
                <h2 className="text-2xl text-white">NextJS Issue Tracker</h2>
            </a>

            <ul className="flex justify-center p-0 m-0 list-none">
                <li className="mx-3">
                    <Image
                        src="/icons/github-icon.svg"
                        alt="github"
                        width="28"
                        height="29"
                    />
                </li>
                <li className="mx-3">
                    <Image
                        src="/icons/twitter-icon.svg"
                        alt="nextjs"
                        width="28"
                        height="28"
                    />
                </li>
                <li className="mx-3">
                    <Image
                        src="/icons/youtube-icon.svg"
                        alt="youtube"
                        width="28"
                        height="29"
                    />
                </li>
                <li className="mx-3">
                    <Image
                        src="/icons/linkedin-icon.svg"
                        alt="linkedin"
                        width="28"
                        height="32"
                    />
                </li>
            </ul>
        </div>
    );
};
