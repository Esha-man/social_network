import {useFormik} from "formik";
import React from "react";


type TextareaFormType = {
    clickCallback: (textarea: string) => void
}


export const TextareaForm = (props: TextareaFormType) => {
    const formik = useFormik({
        initialValues: {
            textarea: "",
        },
        validate: values => {
            console.log(values.textarea.length)
            const errors: any = {};
            if (!values.textarea) {
                errors.textarea = "You can enter a message";
            } else if (values.textarea.length > 140) {
                errors.textarea = "No more than 140 symbols";
            }
            return errors
        },
        onSubmit: values => {
            props.clickCallback(values.textarea)
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="textarea">Add post</label>
            <div>
                <textarea
                    id="textarea"
                    name="textarea"
                    onChange={formik.handleChange}
                    value={formik.values.textarea}
                    onBlur={formik.handleBlur}
                />
            </div>
            {formik.errors.textarea
                ? <div style={{color: "green"}}>{formik.errors.textarea}</div>
                : <div></div>}
            <button type="submit">Add post</button>
        </form>
    );
}