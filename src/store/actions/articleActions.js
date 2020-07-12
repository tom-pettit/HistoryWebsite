export const createArticle = (article) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // async call to add data to DB goes here
        const firestore = getFirestore()
        firestore.collection('articles').add({
            title: article.title,
            imageurl: article.imageurl,
            tags: article.tags,
            body: article.body
        }).then(() => {
            dispatch({ type: 'CREATE_ARTICLE', article: article})
        }).catch((err) => {
            dispatch({ type: 'CREATE_ARTICLE_ERROR', error: err})
        })
    }
}

export const editArticle = (article) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore()
        firestore.collection('articles').doc(article.prev_id).update({
            title: article.title,
            imageurl: article.imageurl,
            tags: article.tags,
            body: article.body
        }).then(() => {
            dispatch({ type: 'EDIT_ARTICLE', article: article})
        }).catch((err) => {
            dispatch({ type: 'EDIT_ARTICLE_ERROR', error: err})
        })
    }
}