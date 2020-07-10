const initState = {
    articles: [
        {id: 1, title: 'Why the Jews were discriminated against in Tudor England 1905', tags: 'history', body: 'article'},
        {id: 2, title: 'Alex', tags: 'history, jews, tudor', body: 'article'},
        {id: 3, title: 'Ollie', tags: 'history', body: 'article'}
    ]
}

const articleReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_ARTICLE':
            console.log('created article', action.article)
            return state
        case 'CREATE_ARTICLE_ERROR':
            console.log('create article error', action.error)
            return state
        default:
            return state
    }
}   

export default articleReducer