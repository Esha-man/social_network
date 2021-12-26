import {v1} from "uuid";
import {newStatePostAC, profileReducer} from "../profile-reducer";


let startState = {
    myPostsData: [
        {id: v1(), likes: 2, post: "Hello!"},
        {id: v1(), likes: 7, post: "What your name?"},
        {id: v1(), likes: 5, post: "Go! Go! Go!"},
        {id: v1(), likes: 4, post: "Hi"},
    ],
    profileUser: {
        userId: 0,
        lookingForAJob: false,
        lookingForAJobDescription: "",
        fullName: "",
        contacts: {
            github: null,
            vk: null,
            facebook: null,
            instagram: null,
            twitter: null,
            website: null,
            youtube: null,
            mainLink: null,
        },
        photos: {
            small: null,
            large: null,
        }
    },
    status: "",
}

test("new post should be added to state", ()=> {
    const action = newStatePostAC("NEW-STATE-POST")
    const endState = profileReducer(startState, action)

expect(endState.myPostsData.length).toBe(5)

})