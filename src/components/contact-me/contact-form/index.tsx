"use client"
import React, {useEffect} from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from "axios";
import {toast} from "react-toastify";
import {CircularProgress} from "@mui/material";


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

    const [isLoading,setIsLoading] = React.useState<boolean>(false);
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        validationSchema:validationSchema ,
        onSubmit: values => {
            handleSubmit(values);
            console.log(values);
        }
    });


    const handleSubmit = async (values)=>{
        try {
            setIsLoading(true);
            const response = await axios.post(`${process.env.NEXT_PUBLIC_FORMSPREE_URL}`, values);
            setIsLoading(false);
            toast.success('Thanks for reaching out!');
            console.log('Form submitted successfully:', response.data);
            formik.resetForm();
        } catch (error) {
            setIsLoading(false);

            toast.error('Oops, Something Went Wrong!');

            console.error('Error submitting form:', error);
        } finally {
            // setSubmitting(false);
        }
    }

    return (
        <div className="w-full lg:w-[32%] mx-auto mt-10 flex flex-col justify-center ">
            <form onSubmit={formik.handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-subheading">Name</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="What's your name?"

                        className="mt-1 block w-full placeholder-placeholder px-3 py-2 border bg-sub-primary border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                    />
                    {formik.touched.name && formik.errors.name ? (
                        <div className="text-red-500 text-sm">{formik.errors.name}</div>
                    ) : null}
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-subheading">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="How can we reach you?"

                        className="mt-1 block w-full px-3 py-2 placeholder-placeholdery bg-sub-primary border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <div className="text-red-500 text-sm">{formik.errors.email}</div>
                    ) : null}
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-subheading">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="What's on your mind?"
                        className="mt-1 block w-full px-3 py-2  bg-sub-primary pplaceholder-placeholder border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                        disabled={isLoading}
                        type="submit"
                        className=" w-full border-2 border-[#959595] rounded-md px-6 py-2 text-[#959595] bg-transparent"
                    >
                        {isLoading ? <CircularProgress sx={{color: '#FD6F00'}} size={20}/> :

                            'Send'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
