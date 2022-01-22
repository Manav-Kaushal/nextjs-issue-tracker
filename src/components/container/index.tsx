import { ContainerInterface } from "@interfaces/Components";

export const Container: React.FC<ContainerInterface> = ({ children }) => {
    return <div className="flex flex-col min-h-screen">{children}</div>;
};
