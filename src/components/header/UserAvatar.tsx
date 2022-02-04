import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import { signOut } from "next-auth/react";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export interface UserData {
    userData: {
        name?: string;
        email?: string;
        image?: string;
    };
}

const UserAvatar: React.FC<UserData> = ({ userData }) => {
    return (
        <>
            <Menu as="div" className="relative ml-3">
                <div>
                    <Menu.Button className="flex w-10 h-10 text-sm rounded-full">
                        <span className="sr-only">Open user menu</span>
                        <Image
                            src={userData.image}
                            alt={userData.name}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-full"
                        />
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    onClick={() => signOut()}
                                    className={classNames(
                                        active ? "bg-gray-100" : "",
                                        "block px-4 py-2 text-sm text-gray-700 cursor-pointer",
                                    )}
                                >
                                    Sign out
                                </a>
                            )}
                        </Menu.Item>
                    </Menu.Items>
                </Transition>
            </Menu>
        </>
    );
};

export default UserAvatar;
