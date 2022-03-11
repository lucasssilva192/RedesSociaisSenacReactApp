export default function reducer(state, action){
    switch(action.type){
        case "CRIAR_POST":
            const NewPost = action.payload;
            return {...state, posts: [NewPost, ...state.posts]};
        case "REMOVER_POST":
            return 0;
        default:
            return state;
    }
}