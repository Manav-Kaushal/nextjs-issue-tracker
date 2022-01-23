import IssueCard from "@components/card/IssueCard";
import { LottieAnimator } from "@components/lottie";
import React from "react";
import Searching from "../../lotties/searching.json";
import useStore from "src/store";

export const IssuesDisplayPanel: React.FC = () => {
    const formData = useStore((state) => state.formState);
    console.log("Form Data:", formData);

    return (
        <div className="px-16 py-5 font-light bg-gray-700">
            <div className="container mx-auto">
                <div className="w-full p-6 bg-purple-200 rounded-md">
                    {formData.length === 0 ? (
                        <div className="grid place-items-center">
                            <h2 className="text-4xl font-bold">Oops...</h2>
                            <LottieAnimator
                                src={Searching}
                                width={400}
                                height={400}
                            />
                        </div>
                    ) : (
                        <>
                            <div className="text-2xl font-semibold">
                                Open Issues:
                            </div>
                            {formData?.map((data) => (
                                <IssueCard data={data} />
                            ))}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};
