 import {followAC, InitialStateUsersType, setNewUsersAC, unFollowAC, usersReducer} from "../users-reducer";
//
// test("user must be be follow", () => {
//
//     const startState: InitialStateUsersType = {
//         users: [
//             {
//                 id: "1",
//                 avatar: "https://image.flaticon.com/icons/png/512/147/147144.png",
//                 name: "Dima",
//                 location: {country: "Belarus", city: "Minsk"},
//                 followed: true,
//                 status: "Letim!"
//             },
//             {
//                 id: "2",
//                 avatar: "https://image.flaticon.com/icons/png/512/147/147140.png",
//                 name: "Vasya",
//                 location: {country: "Russia", city: "Moscov"},
//                 followed: true,
//                 status: "I am fine"
//             },
//             {
//                 id: "3",
//                 avatar: "https://cdn.iconscout.com/icon/free/png-256/avatar-373-456325.png",
//                 name: "Masha",
//                 location: {country: "Ukraine", city: "Kiev"},
//                 followed: true,
//                 status: "Ololo"
//             },
//         ]
//     }
//
//     // const keys = Object.keys(endState.users)
//
//     const action = followAC("2")
//     const endState = usersReducer(startState, action)
//
//     expect(endState.users[1].name).toBe("Vasya")
//     expect(endState.users[1]).not.toBe(startState.users[1])
//     expect(endState.users[1].followed).toBe(true)
//
//
// })
//
// test("unfollow test", () => {
//
//     const startState: InitialStateUsersType = {
//         users: [
//             {
//                 id: "1",
//                 avatar: "https://image.flaticon.com/icons/png/512/147/147144.png",
//                 name: "Dima",
//                 location: {country: "Belarus", city: "Minsk"},
//                 followed: true,
//                 status: "Letim!"
//             },
//             {
//                 id: "2",
//                 avatar: "https://image.flaticon.com/icons/png/512/147/147140.png",
//                 name: "Vasya",
//                 location: {country: "Russia", city: "Moscov"},
//                 followed: true,
//                 status: "I am fine"
//             },
//             {
//                 id: "3",
//                 avatar: "https://cdn.iconscout.com/icon/free/png-256/avatar-373-456325.png",
//                 name: "Masha",
//                 location: {country: "Ukraine", city: "Kiev"},
//                 followed: true,
//                 status: "Ololo"
//             },
//         ]
//     }
//
//     const action = unFollowAC("3")
//     const endState = usersReducer(startState, action)
//
//     expect(endState.users[2].name).toBe("Masha")
//     expect(endState.users[2]).not.toBe(startState.users[2])
//     expect(endState.users[2].followed).toBe(false)
// })
//
// test("set new users test", () => {
//     const startState: InitialStateUsersType = {
//         users: [
//             {
//                 id: "1",
//                 avatar: "https://image.flaticon.com/icons/png/512/147/147144.png",
//                 name: "Dima",
//                 location: {country: "Belarus", city: "Minsk"},
//                 followed: true,
//                 status: "Letim!"
//             },
//             {
//                 id: "2",
//                 avatar: "https://image.flaticon.com/icons/png/512/147/147140.png",
//                 name: "Vasya",
//                 location: {country: "Russia", city: "Moscov"},
//                 followed: true,
//                 status: "I am fine"
//             },
//             {
//                 id: "3",
//                 avatar: "https://cdn.iconscout.com/icon/free/png-256/avatar-373-456325.png",
//                 name: "Masha",
//                 location: {country: "Ukraine", city: "Kiev"},
//                 followed: true,
//                 status: "Ololo"
//             },
//         ]
//     }
//
//     const action = setNewUsersAC([{
//         id: "4",
//         avatar: "https://cdn.iconscout.com/icon/free/png-256/avatar-373-456325.png",
//         name: "Petya",
//         location: {country: "Iraq", city: "Bagdad"},
//         followed: true,
//         status: "Hello"
//     },])
//     const endState = usersReducer(startState, action)
//
//     expect(endState.users.length).toBe(4)
// })