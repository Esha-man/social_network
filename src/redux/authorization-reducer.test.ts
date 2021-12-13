import {authorizationReducer, InitialAuthStateType, setServerError} from "./authorization-reducer";


test("server error must be: 'ERROR!'", ()=>{
    const startState: InitialAuthStateType = {
        id: "",
        email: "",
        login: "",
        isAuthorized: false,
        serverError: null,
    }

    const action = setServerError("ERROR!")
    const endState = authorizationReducer(startState, action)

    expect(endState.serverError).toBe("ERROR!")
})