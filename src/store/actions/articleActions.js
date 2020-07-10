export const createArticle = (article) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // async call to add data to DB goes here
        dispatch({ type: 'CREATE_ARTICLE', article: article})
    }
}