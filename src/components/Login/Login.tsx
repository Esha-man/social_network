import React from 'react';
import {ErrorMessage, Field, useFormik} from 'formik';
import {Formik} from 'formik';
import * as Yup from 'yup';


type ErrorsType = {
    email?: string
    password?: string
    rememberMe?: boolean
}


export const Login = () => {


    return (
        <Formik
            initialValues={{email: "", password: "", rememberMe: false}}
            validationSchema={Yup.object({
                email: Yup.string().email('Invalid email address').required('Email required'),
                password: Yup.string().min(4, 'Password must be 4 characters but less 10')
                    .max(10, 'Password must be 4 characters but less 10')
                    .required('Password required')
            })}
            onSubmit={(values, {setSubmitting}) => {
                setTimeout(() => {
                    alert(JSON.stringify(values))
                    setSubmitting(false)
                }, 400)
            }}
        >
            {formik => (
                <form onSubmit={formik.handleSubmit}>
                    <div>
                        <div><label htmlFor="email">Email Address</label></div>
                        <div><Field name="email" type="email"/></div>
                        <div style={{color: "red"}}><ErrorMessage name="email"/></div>
                    </div>
                    <div>
                        <div><label htmlFor="password">Your Password</label></div>
                        <div><Field name="password" type="password"/></div>
                        <div style={{color: "red"}}><ErrorMessage name="password"/></div>
                    </div>
                    <div>
                        <div><label htmlFor="rememberMe">Remember Me</label></div>
                        <div><Field name="rememberMe" type="checkbox"/></div>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            )}

        </Formik>
    )
}


/// ---------------------------Old version of form --------------------------------///

export const FormikSignUp = () => {

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            rememberMe: false,
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Email required'),
            password: Yup.string().min(4, 'Password must be 4 characters but less 10')
                .max(10, 'Password must be 4 characters but less 10')
                .required('Password required'),
        }),
        onSubmit: (values) => {
            alert(JSON.stringify(values))
        }
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor="email">Email Address</label>
                <div>
                    <input
                        id="email"
                        type="email"
                        {...formik.getFieldProps("email")}

                    />
                </div>
                {formik.touched.email && formik.errors.email ? <div style={{color: "red"}}>{formik.errors.email}</div> :
                    <div></div>}
            </div>
            <div>
                <label htmlFor="password">Your Password</label>
                <div>
                    <input
                        id="password"
                        type="password"
                        {...formik.getFieldProps("password")}
                    />
                </div>
                {formik.touched.password && formik.errors.password ?
                    <div style={{color: "red"}}>{formik.errors.password}</div> : <div></div>}
            </div>
            <div>
                <label htmlFor="rememberMe">Remember Me</label>
                <div>
                    <input
                        id="rememberMe"
                        type="checkBox"
                        {...formik.getFieldProps("rememberMe")}

                    />
                </div>
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}

///------------------------------ end old form -----------------------------------///



