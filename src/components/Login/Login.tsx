import React from 'react';
import { ErrorMessage, useFormik } from 'formik';
import { validate } from 'uuid';

type ErrorsType = {
    email?: string
    password?: string
    rememberMe?: boolean
}

export const Login = () => {

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            rememberMe: false,
        },
        validate: values => {
            const errors: ErrorsType = {}
            if (!values.email) {
                errors.email = "Email is required."
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = "Please enter valid email address"
            }

            if (!values.password) {
                errors.password = "Password required"
            } else if (values.password.length < 5 || values.password.length > 10) {
                errors.password = "Password must be 5 characters but less 10"
            }
            return errors
        },
        onSubmit: values => {
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
                        name="email"
                        type="email"
                        // placeholder="enter email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                </div>
                {formik.errors.email ? <div style={{color: "red"}}>{formik.errors.email}</div> : null}
            </div>
            <div>
                <label htmlFor="email">Your Password</label>
                <div>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        // placeholder="enter password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                </div>
                {formik.errors.password ? <div style={{color: "red"}}>{formik.errors.password}</div> : null}
            </div>
            <div>
                <label htmlFor="email">Remember Me</label>
                <div>
                    <input
                        id="rememberMe"
                        name="rememberMe"
                        type="checkBox"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                </div>
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}
