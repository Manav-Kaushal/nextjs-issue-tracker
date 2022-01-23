import create from "zustand";
// import { persist } from "zustand/middleware";

const store = (set: any) => ({
    formState: [],
    setFormState: (values: any) =>
        set(() => ({
            formState: values,
        })),
    updateFormState: (values) =>
        set((state) => ({ formState: [...state.formState, { ...values }] })),
    // allClosed: 0,
    // setAllClosed: (data) => set((state) => state.allClosed + data),
});

const useStore = create(store);

export default useStore;
