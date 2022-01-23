import { LottiAnimatorInterface } from "@interfaces/GlobalInterfaces";
import React from "react";
import Lottie from "react-lottie";

export const LottieAnimator: React.FC<LottiAnimatorInterface> = ({
    src,
    height,
    width,
}) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: src,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    return (
        <div>
            <Lottie
                options={defaultOptions}
                height={height || 400}
                width={width || 400}
            />
        </div>
    );
};
