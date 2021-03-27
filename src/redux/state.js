import {rerenderEntireTree} from "../render";
let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Some text for testing props work', likesCount: 4 },
            { id: 2, message: 'Some text for testing props work (but just second post)', likesCount: 60 }
        ],
        newPostText: 'text',
    },
    dialogsPage: {
        dialogs: [
            { id: 1, name: "Sas" },
            { id: 2, name: "Bob" },
            { id: 3, name: "Mark" },
            { id: 4, name: "Alisa" },
            { id: 5, name: "Sos" }
        ],
        messages: [
            { id: 1, message: "Test" },
            { id: 2, message: "Testing" },
            { id: 3, message: "The test" }
        ],
    }
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export default state;