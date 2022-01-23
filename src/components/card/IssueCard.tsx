import { Transition } from "@headlessui/react";
import { FormValues } from "@interfaces/FormValues";
import { IssueCardInterface } from "@interfaces/GlobalInterfaces";
import React, { useState } from "react";
import {
    HiOutlineInformationCircle,
    HiOutlineUserCircle,
} from "react-icons/hi";
import useStore from "src/store";

const IssueCard: React.FC<IssueCardInterface> = ({ data }) => {
    const formData = useStore((state) => state.formState);
    const { setFormState } = useStore();

    const { uuid, description, severity, assignedTo, isClosed } = data;
    const [open, setOpen] = useState(true);

    const handleRemoveCard = () => {
        const tempArr: any = formData.filter(
            (item: any) => item.uuid !== data.uuid,
        );
        setFormState([...tempArr]);
    };

    console.log(isClosed);

    return (
        <Transition
            appear={true}
            show={true}
            enter="transition-opacity duration-75"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <div className="p-4 my-4 bg-white rounded-md shadow-md">
                <div>
                    <p className="text-sm font-semibold">Unique ID: {uuid}</p>
                </div>
                <div className="my-2">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                        {open ? "Open" : "Closed"}
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
                            className={`inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-white bg-yellow-500 border border-transparent rounded-md shadow-sm hover:bg-yellow-600`}
                        >
                            Close
                        </button>
                        <button
                            type="button"
                            className="inline-flex items-center px-3 py-2 ml-2 text-sm font-medium leading-4 text-white bg-red-500 border border-transparent rounded-md shadow-sm hover:bg-red-600"
                            onClick={handleRemoveCard}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </Transition>
    );
};

export default IssueCard;
