const techStack = {
    name: "nextjs-issue-tracker",
    plugins: [
        {
            name: "TailwindCSS",
            description:
                "A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.",
            url: "https://tailwindcss.com/docs",
        },
        {
            name: "Styled Components",
            description:
                "Utilising tagged template literals (a recent addition to JavaScript) and the power of CSS, styled-components allows you to write actual CSS code to style your components.",
            url: "https://styled-components.com/docs",
        },
        {
            name: "Axios",
            description:
                "Promise based HTTP client for the browser and node.js.",
            url: "https://github.com/axios/axios",
        },
        {
            name: "Environment Variables",
            description:
                "Use environment variables in your next.js project for server side, client or both.",
            url: "https://github.com/vercel/next.js/tree/canary/examples/environment-variables",
        },
        {
            name: "Bundle Analyzer",
            description:
                "Use webpack-bundle-analyzer in your Next.js project. Visualize size of webpack output files with an interactive zoomable treemap.",
            url: "https://github.com/vercel/next.js/tree/canary/packages/next-bundle-analyzer",
        },
        {
            name: "SWR",
            description: "React Hooks library for data fetching from Vercel",
            url: "https://swr.vercel.app/",
        },
        {
            name: "react-use",
            description: "A Collection of useful React hooks.",
            url: "https://github.com/streamich/react-use",
        },
        {
            name: "Zustand",
            description:
                "A small, fast and scalable bearbones state-management solution using simplified flux principles.",
            url: "https://github.com/pmndrs/zustand",
        },
        {
            name: "ESLint",
            description:
                "A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript. Maintain your code quality with ease.",
            url: "https://eslint.org/docs/user-guide/getting-started",
        },
        {
            name: "Prettier",
            description:
                "An opinionated code formatter; Supports many languages; Integrates with most editors.",
            url: "https://prettier.io/docs/en/index.html",
        },
        {
            name: "Docker",
            description:
                "Docker simplifies and accelerates your workflow, while giving developers the freedom to innovate with their choice of tools, application stacks, and deployment environments for each project.",
            url: "https://www.docker.com/get-started",
        },
    ],
};

const issuesData: any = [];

export { techStack, issuesData };
