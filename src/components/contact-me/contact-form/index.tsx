"use client"
import React, {useEffect} from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from "axios";
import {toast} from "react-toastify";


const validationSchema = Yup.object({
    name: Yup.string()
        .matches(/^[A-Za-z\s]+$/, 'Must contain only letters and spaces')
        .max(50, 'Must be 50 characters or less')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
    message: Yup.string()
        .required('Required')
})
const ContactForm = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        validationSchema:validationSchema ,
        onSubmit: values => {
            console.log(values);
        }
    });

    useEffect(() => {
        toast.error('i am intregrated')
    }, []);
    const handleSubmit = async (values)=>{
        try {
            const response = await axios.post('https://your-api-endpoint.com/submit', values);
            console.log('Form submitted successfully:', response.data);
            formik.resetForm();
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            // setSubmitting(false);
        }
    }

    return (
        <div className="max-w-md mx-auto mt-10">
            <form onSubmit={formik.handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                    />
                    {formik.touched.name && formik.errors.name ? (
                        <div className="text-red-500 text-sm">{formik.errors.name}</div>
                    ) : null}
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <div className="text-red-500 text-sm">{formik.errors.email}</div>
                    ) : null}
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.message}
                    />
                    {formik.touched.message && formik.errors.message ? (
                        <div className="text-red-500 text-sm">{formik.errors.message}</div>
                    ) : null}
                </div>

                <div>
                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
