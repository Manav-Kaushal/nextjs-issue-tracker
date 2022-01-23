import { FormValues } from "@interfaces/FormValues";
import create from "zustand";
import { devtools } from "zustand/middleware";

const store = (set: any) => ({
    formState: [],
    setFormState: (values: any) =>
        set(() => ({
            // formState: [...state.formState, { ...values }],
            formState: values,
        })),
});

const useStore = create(devtools(store));

export default useStore;
