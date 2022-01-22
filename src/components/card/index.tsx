import { CardInterface } from "@interfaces/GlobalInterfaces";
import styled, { keyframes } from "styled-components";
import { techStack } from "src/utils/mockData";
import React from "react";
import Link from "next/link";
import { getAnimations } from "src/utils/helpers";

const items: number = techStack?.plugins?.length + 1;

const zoom = keyframes`
  0% {  
      transform: scale(0);
        opacity: 0;
    }
    
  100% {
      transform: scale(1);
    opacity: 1;
    }
`;

const Zoom = styled.a`
    transform: scale(1);
    animation: ${zoom} 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    ${getAnimations(items)}
    &:hover {
        transform: scale(1.1);
    }
`;

export const Card: React.FC<CardInterface> = ({ title, description, url }) => {
    return (
        <Link href={url} passHref>
            <Zoom
                target="_blank"
                className="col-span-1 p-5 text-gray-500 transform scale-100 bg-white border border-gray-300 rounded-md shadow-md cursor-pointer select-none my-transition group duration hover:bg-purple-600 hover:text-white hover:border-purple-600 hover:scale-105"
            >
                <div>
                    <h2 className="text-xl font-semibold">{title}</h2>
                    <p className="mt-2">{description}</p>
                </div>
            </Zoom>
        </Link>
    );
};
