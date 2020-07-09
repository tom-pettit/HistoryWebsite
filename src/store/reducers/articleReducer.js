const initState = {
    articles: [
        {id: 1, title: 'John', tags: 'history', body: 'article'},
        {id: 2, title: 'Alex', tags: 'history', body: 'article'},
        {id: 3, title: 'Ollie', tags: 'history', body: 'article'}
    ]
}

const articleReducer = (state = initState, action) => {
    return state
}   

export default articleReducer