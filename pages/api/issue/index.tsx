import connectDB from "config/connectDB";
import Issues from "../../../models/issueModel";
import { getSession } from "next-auth/react";

connectDB();

export default async function handler(req, res) {
    switch (req.method) {
        case "POST":
            await createIssue(req, res);
            break;
    }
}

const createIssue = async (req, res) => {
    try {
        const session = await getSession({ req });
        console.log(session);
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
};
