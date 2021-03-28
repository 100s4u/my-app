let store = {
    _state: {
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
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('nice');
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}
window.store = store;
export default store;