import React from "react";
import { Container, Header, Footer, Card } from "@components";
import { techStack } from "src/utils/mockData";

const TechStack: React.FC = () => {
    return (
        <Container>
            <Header />
            <div className="bg-gray-700">
                <div className="container flex-1 max-w-screen-xl p-5 mx-auto my-8 ">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                        {techStack.plugins.map((plugin) => (
                            <Card
                                title={plugin.name}
                                description={plugin.description}
                                url={plugin.url}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </Container>
    );
};

export default TechStack;
