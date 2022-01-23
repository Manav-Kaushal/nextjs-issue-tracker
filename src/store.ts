import create from "zustand";
// import { persist } from "zustand/middleware";

const store = (set: any, get) => ({
    formState: [],
    setFormState: (values: any) =>
        set(() => ({
            formState: values,
        })),
    updateFormState: (values) =>
        set((state) => ({ formState: [...state.formState, { ...values }] })),

    allClosed: 0,
    addAllClosed: () => set({ allClosed: get().allClosed + 1 }),

    allRaised: 0,
    addAllRaised: () => set({ allRaised: get().allRaised + 1 }),
});

const useStore = create(store);

export default useStore;
