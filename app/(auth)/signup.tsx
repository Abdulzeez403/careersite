"use client"
import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { FormField } from '../components/textInput/textInput';
import CustomButton from '../components/button';
import { useAuthContext } from './context';
import { IUser } from '../constant/model';




const SignUpFormValues = Yup.object().shape({
    firstName: Yup.string().required('FirstName is Required '),
    lastName: Yup.string().required('lastName is Required '),
    email: Yup.string().email('Invalid email address').required('Email is Required'),
    role: Yup.string().required('lastName is Required '),
    password: Yup.string().min(6, 'Must be at least 6 characters').required('Password is Required'),


});

export const SignUpForm: React.FC = () => {

    const { signUp, loading } = useAuthContext()

    const initialValues: IUser = {
        firstName: '',
        lastName: '',
        email: '',
        role: "admin",
        password: '',
    };

    const handleSubmit = (values: IUser) => {
        signUp(values)
        console.log(values);
    };

    return (

        <Formik
            initialValues={initialValues}
            validationSchema={SignUpFormValues}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
                <Form>
                    <FormField label="FirstName" name="firstName" className="my-4" />
                    <FormField label="LastName" name="lastName" className="my-4" />
                    <FormField label="Email" name="email" className="my-4" />
                    <FormField label="Password" name="password" type="password" className="my-4" />

                    <div>
                        <CustomButton type="submit" loading={isSubmitting}>
                            Sign Up
                        </CustomButton>

                    </div>
                </Form>
            )}
        </Formik>


    );
};
