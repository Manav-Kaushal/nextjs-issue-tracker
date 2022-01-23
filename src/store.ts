import { FormValues } from "@interfaces/FormValues";
import create from "zustand";

const useStore = create((set) => ({
    formValues: [
        { description: "Test", severity: "Low", assignedTo: "Manav" },
        { description: "Test2", severity: "Medium", assignedTo: "Sheetal" },
    ],
    setFormValues: (values: FormValues) =>
        set((state) => ({
            values: [
                {
                    description: values.description,
                    severity: values.severity,
                    assignedTo: values.assignedTo,
                },
                ...state.values,
            ],
        })),
}));

export default useStore;
