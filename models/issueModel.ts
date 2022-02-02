import mongoose from "mongoose";
import { string } from "prop-types";

const issueSchema = new mongoose.Schema(
    {
        name: { type: string, required: true },
        user: { type: mongoose.Types.ObjectId, ref: "users" },
    },
    { timestamps: true },
);

const Dataset = mongoose.models.issue || mongoose.model("issue", issueSchema);

export default Dataset;
