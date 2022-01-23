import React from "react";
import {
    HiOutlineInformationCircle,
    HiOutlineUserCircle,
} from "react-icons/hi";

interface IssueCardInterface {
    data: {
        description: string;
        severity: string;
        assignedTo: string;
    };
}

const IssueCard: React.FC<IssueCardInterface> = ({ data }) => {
    const { description, severity, assignedTo } = data;
    return (
        <div className="p-4 my-2 bg-green-200 rounded-md">
            <div>
                <p className="text-sm font-semibold">Issue ID: 123456</p>
            </div>
            <div className="my-2">
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800">
                    Badge
                </span>
            </div>
            <div>
                <h2 className="text-2xl font-semibold">{description}</h2>

                <div className="flex items-center my-1">
                    <div className="flex-shrink-0">
                        <HiOutlineInformationCircle
                            className="w-5 h-5 text-black"
                            aria-hidden="true"
                        />
                    </div>
                    <div className="flex-1 w-0 ml-2">
                        <p className="text-sm font-medium text-gray-900">
                            {severity}
                        </p>
                    </div>
                </div>

                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        <HiOutlineUserCircle
                            className="w-5 h-5 text-black"
                            aria-hidden="true"
                        />
                    </div>
                    <div className="flex-1 w-0 ml-2">
                        <p className="text-sm font-medium text-gray-900">
                            {assignedTo}
                        </p>
                    </div>
                </div>

                <div className="flex mt-4 mb-2">
                    <button
                        type="button"
                        className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-white bg-yellow-500 border border-transparent rounded-md shadow-sm hover:bg-yellow-600"
                    >
                        Close
                    </button>
                    <button
                        type="button"
                        className="inline-flex items-center px-3 py-2 ml-2 text-sm font-medium leading-4 text-white bg-red-500 border border-transparent rounded-md shadow-sm hover:bg-red-600"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default IssueCard;
