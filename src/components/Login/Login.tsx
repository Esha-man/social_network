import {Form, Field} from 'react-final-form'

export const LoginForm = () => {
    return (
        <>
            <Form onSubmit={(formObj) => {
                console.log(formObj)
            }}>
                {({handleSubmit}) => (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <Field name={"Mail"} component={"input"} placeholder={"Mail"}/>
                        </div>
                        <div>
                            <Field name={"Password"} component={"input"} placeholder={"Placeholder"}/>
                        </div>
                        <div>
                            <Field name={"RememberMe"} component={"input"} type={"checkbox"}/> Remember me
                        </div>

                        <button type={"submit"}>Login</button>
                    </form>
                )}
            </Form>
        </>
    )
}

export const Login = () => {
    return (
        <>
            <h1>Login</h1>
            <LoginForm/>
        </>
    )
}