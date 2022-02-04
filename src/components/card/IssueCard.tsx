import { IssueCardInterface } from "@interfaces/GlobalInterfaces";
import React from "react";
import {
    HiOutlineInformationCircle,
    HiOutlineUserCircle,
} from "react-icons/hi";
import useStore from "src/store";

const IssueCard: React.FC<IssueCardInterface> = ({ data }) => {
    const formData = useStore((state) => state.formState);
    const { addAllClosed } = useStore();
    const { setFormState } = useStore();

    const { uuid, description, severity, assignedTo, isClosed } = data;

    const handleCloseClick = () => {
        const tempObj = formData.find((item: any) => item.uuid === data.uuid);
        tempObj.isClosed = true;
        setFormState([...formData]);
        addAllClosed();
    };

    const handleDeleteClick = () => {
        if (!isClosed) {
            alert("You sure to delete this issue? It's not been closed yet!");
        } else {
            const tempArr: any = formData.filter(
                (item: any) => item.uuid !== data.uuid,
            );
            setFormState([...tempArr]);
        }
    };

    return (
        <div>
            <div
                className={`p-4 my-4 my-transition rounded-md shadow-md ${
                    isClosed ? "bg-green-100/80" : "bg-yellow-100/80"
                }`}
            >
                <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold">UID: {uuid}</p>
                    <span
                        className={`inline-flex items-center px-2 py-0.5 rounded text-xs my-transition font-medium ${
                            isClosed
                                ? "bg-green-200 text-green-800"
                                : "bg-yellow-200 text-yellow-800"
                        }`}
                    >
                        {isClosed ? "Closed" : "Open"}
                    </span>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold leading-7">
                        {description}
                    </h2>

                    <div className="flex items-center mt-3">
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

                    <div className="flex items-center mt-1">
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
                            className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-white bg-yellow-500 border border-transparent rounded-md shadow-sm hover:bg-yellow-600 disabled:bg-gray-500 disabled:cursor-not-allowed"
                            disabled={isClosed}
                            onClick={handleCloseClick}
                        >
                            Close
                        </button>
                        <button
                            type="button"
                            className="inline-flex items-center px-3 py-2 ml-2 text-sm font-medium leading-4 text-white bg-red-500 border border-transparent rounded-md shadow-sm hover:bg-red-600"
                            onClick={handleDeleteClick}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IssueCard;
