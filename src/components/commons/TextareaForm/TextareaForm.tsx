import {useFormik} from "formik";
import React from "react";


type TextareaFormType = {
    clickCallback: (textarea: string) => void
    // textareaValue: string
}
export const TextareaForm = (props: TextareaFormType) => {
    const formik = useFormik({
        initialValues: {
            textarea: "",
        },
        onSubmit: values => {
            // alert(JSON.stringify(values));
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
                    // type="textarea"
                    onChange={formik.handleChange}
                    value={formik.values.textarea}
                />
            </div>
            <button type="submit">Add post</button>
        </form>
    );
}