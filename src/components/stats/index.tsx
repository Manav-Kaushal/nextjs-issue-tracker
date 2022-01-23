import useStore from "src/store";
import {
    HiOutlineInformationCircle,
    HiOutlineClock,
    HiOutlineCheckCircle,
} from "react-icons/hi";
import { useState } from "react";
import { useEffect } from "react";

/* This example requires Tailwind CSS v2.0+ */

export const Stats: React.FC = () => {
    const [totalOpen, setTotalOpen] = useState(0);
    const [totalClosed, setTotalClosed] = useState(0);
    const formData = useStore((state) => state.formState);
    const { allClosed, allRaised } = useStore();

    console.log("allClosed", allClosed);

    useEffect(() => {
        setTotalOpen(formData.filter((data) => data.isClosed !== true).length);
        setTotalClosed(
            formData.filter((data) => data.isClosed === true).length,
        );
    }, [formData]);

    const stats = [
        {
            name: "Total Issues Opened",
            stat: `${allRaised}`,
            icon: (
                <HiOutlineInformationCircle
                    className="w-[18px] h-[18px] text-red-500"
                    aria-hidden="true"
                />
            ),
            textColor: "text-red-500",
        },
        {
            name: "Total Issues Closed",
            stat: `${allClosed}`,
            icon: (
                <HiOutlineInformationCircle
                    className="w-[18px] h-[18px] text-red-500"
                    aria-hidden="true"
                />
            ),
            textColor: "text-red-500",
        },
        {
            name: "Currently Open Issues",
            stat: `${totalOpen}`,
            icon: (
                <HiOutlineClock
                    className="w-[18px] h-[18px] text-yellow-500"
                    aria-hidden="true"
                />
            ),
            textColor: "text-yellow-500",
        },
        {
            name: "Currently Closed Issues",
            stat: `${totalClosed}`,
            icon: (
                <HiOutlineCheckCircle
                    className="w-[18px] h-[18px] text-green-500"
                    aria-hidden="true"
                />
            ),
            textColor: "text-green-500",
        },
    ];

    return (
        <div className="p-6 my-6 bg-gray-100 rounded-lg">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
                Some stats for nerds:{" "}
            </h3>
            <small className="text-sm leading-3">
                (These stats are maintained with zustand store)
            </small>
            <dl className="grid grid-cols-1 gap-5 mt-5 sm:grid-cols-2">
                {stats.map((item) => (
                    <div
                        key={item.name}
                        className="px-3 py-3 overflow-hidden bg-white rounded-lg shadow sm:p-5"
                    >
                        <dt
                            className={`flex items-center text-sm font-medium truncate ${item.textColor}`}
                        >
                            <span className="mr-2">{item.icon}</span>{" "}
                            {item.name}
                        </dt>
                        <dd className="mt-1 text-4xl font-semibold text-gray-700">
                            {item.stat}
                        </dd>
                    </div>
                ))}
            </dl>
        </div>
    );
};
