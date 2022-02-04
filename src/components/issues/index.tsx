import IssueCard from "@components/card/IssueCard";
import { LottieAnimator } from "@components/lottie";
import React, { useEffect, useRef } from "react";
import Searching from "../../lotties/searching.json";
import useStore from "src/store";
import { gsap } from "gsap";

export const IssuesDisplayPanel: React.FC = () => {
    const panelRef = useRef();
    const formData = useStore((state) => state.formState);

    useEffect(() => {
        gsap.from(panelRef.current, {
            x: 100,
            scale: 0.8,
            opacity: 0,
            duration: 0.5,
        });
    }, [panelRef]);

    return (
        <div ref={panelRef}>
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
        </div>
    );
};
