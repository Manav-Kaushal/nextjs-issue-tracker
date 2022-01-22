import { FormValues } from "@interfaces/FormValues";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import React from "react";

const initialValues = {
    description: "",
    severity: "low",
    assignedTo: "",
};

const onSubmit = (values: FormValues) => {
    setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
    }, 500);
};

const validationSchema = Yup.object({
    description: Yup.string().required("Required!"),
    severity: Yup.string().notRequired(),
    assignedTo: Yup.string().required("Required!"),
});

const severityValues = [
    {
        id: "low",
        title: "Low",
    },
    {
        id: "medium",
        title: "Medium",
    },
    {
        id: "high",
        title: "High",
    },
];

export const IssueForm: React.FC = () => {
    return (
        <div className="px-16 py-5 font-light bg-gray-700">
            <div className="container mx-auto sticky top-[4.85rem]">
                <div className="w-full p-6 bg-gray-100 rounded-md">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                        validateOnMount
                    >
                        {(formik) => {
                            console.log(formik);

                            return (
                                <Form>
                                    <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                                        <div>
                                            <div>
                                                <h3 className="text-lg font-medium leading-6 text-gray-900">
                                                    Add new issue:
                                                </h3>
                                            </div>

                                            <div className="mt-6 space-y-6 sm:mt-5 sm:space-y-5">
                                                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:py-5">
                                                    <label
                                                        htmlFor="description"
                                                        className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                                                    >
                                                        Description{" "}
                                                        <span className="text-red-500">
                                                            *
                                                        </span>
                                                        <ErrorMessage name="description">
                                                            {(error) => (
                                                                <div className="error">
                                                                    {error}
                                                                </div>
                                                            )}
                                                        </ErrorMessage>
                                                    </label>

                                                    <div className="my-1 sm:mt-0 sm:col-span-2">
                                                        <Field
                                                            as="textarea"
                                                            id="description"
                                                            name="description"
                                                            className="block w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                                                            placeholder="Write the description for
                                                    the issue"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:py-5">
                                                <label
                                                    htmlFor="severity"
                                                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                                                >
                                                    Severity{" "}
                                                    <span className="text-red-500">
                                                        *
                                                    </span>
                                                    <ErrorMessage name="severity">
                                                        {(error) => (
                                                            <div className="error">
                                                                {error}
                                                            </div>
                                                        )}
                                                    </ErrorMessage>
                                                </label>
                                                <div className="mt-1 sm:mt-0 sm:col-span-2">
                                                    <div className="sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                                                        {severityValues.map(
                                                            (severity) => (
                                                                <div
                                                                    key={
                                                                        severity.id
                                                                    }
                                                                    className="flex items-center"
                                                                >
                                                                    <Field
                                                                        id={
                                                                            severity.id
                                                                        }
                                                                        name="severity"
                                                                        type="radio"
                                                                        value={
                                                                            severity.id
                                                                        }
                                                                        className={`w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500`}
                                                                    />
                                                                    <label
                                                                        htmlFor={
                                                                            severity.id
                                                                        }
                                                                        className="block ml-3 text-sm font-medium text-gray-700"
                                                                    >
                                                                        {
                                                                            severity.title
                                                                        }
                                                                    </label>
                                                                </div>
                                                            ),
                                                        )}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                                <label
                                                    htmlFor="assignedTo"
                                                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                                                >
                                                    Assigned To{" "}
                                                    <span className="text-red-500">
                                                        *
                                                    </span>
                                                    <ErrorMessage name="assignedTo">
                                                        {(error) => (
                                                            <div className="error">
                                                                {error}
                                                            </div>
                                                        )}
                                                    </ErrorMessage>
                                                </label>
                                                <div className="mt-1 sm:mt-0 sm:col-span-2">
                                                    <Field
                                                        type="text"
                                                        name="assignedTo"
                                                        id="assignedTo"
                                                        className="block w-full p-2 my-1 border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-5">
                                        <div className="flex justify-end">
                                            <button
                                                type="submit"
                                                disabled={!formik.isValid}
                                                className="inline-flex justify-center px-4 py-2 ml-3 text-sm font-medium text-white bg-purple-600 border border-transparent rounded-md shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:bg-gray-500"
                                            >
                                                Add Issue
                                            </button>
                                        </div>
                                    </div>
                                </Form>
                            );
                        }}
                    </Formik>
                </div>
            </div>
        </div>
    );
};
