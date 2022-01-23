import IssueCard from "@components/card/IssueCard";
import React from "react";
import useStore from "src/store";

export const IssuesDisplayPanel: React.FC = () => {
    const formData = useStore((state) => state.formValues);
    console.log("Form Data:", formData);

    return (
        <div className="px-16 py-5 font-light bg-gray-700">
            <div className="container mx-auto">
                <div className="w-full p-6 bg-gray-100 rounded-md">
                    {formData.map((data) => (
                        <IssueCard data={data} />
                    ))}
                </div>
            </div>
        </div>
    );
};
