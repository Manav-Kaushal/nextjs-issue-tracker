import { FormValues } from "@interfaces/FormValues";
import create from "zustand";

const useStore = create((set) => ({
    formValues: [
        { description: "Test", severity: "Low", assignedTo: "Manav" },
        { description: "Test2", severity: "Medium", assignedTo: "Test User" },
    ],
}));

export default useStore;
