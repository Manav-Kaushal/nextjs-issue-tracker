import IssueCard from "@components/card/IssueCard";
import { LottieAnimator } from "@components/lottie";
import React from "react";
import Searching from "../../lotties/searching.json";
import useStore from "src/store";

export const IssuesDisplayPanel: React.FC = () => {
    const formData = useStore((state) => state.formState);

    return (
        <div className="py-5 pl-6 pr-16 font-light">
            <div className="container mx-auto">
                <div className="w-full p-6 bg-gray-100 rounded-md">
                    {formData.length === 0 ? (
                        <div className="grid place-items-center">
                            <h2 className="text-2xl font-semibold">
                                Oops... no issues found!
                            </h2>
                            <LottieAnimator
                                src={Searching}
                                width={400}
                                height={400}
                            />
                        </div>
                    ) : (
                        <>
                            <div className="text-left">
                                <p className="text-2xl font-semibold">
                                    Open Issues:
                                </p>
                            </div>
                            {formData.map((data) => (
                                <IssueCard data={data} />
                            ))}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};
