export interface CardInterface {
    title: string;
    description: string;
    url: string;
}

export interface IssueCardInterface {
    data: {
        uuid: string;
        description: string;
        severity: string;
        assignedTo: string;
        isClosed: boolean;
    };
}

export interface LottiAnimatorInterface {
    src: unknown;
    height?: number;
    width?: number;
}

export interface HomeInterface {
    session: {
        expires: string;
        user: {
            name: string;
            email: string;
            image: string;
        };
    };
}
