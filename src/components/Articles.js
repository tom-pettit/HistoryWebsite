import React from 'react';
import ArticleSummary from './ArticleSummary'


const Articles = ({articles}) => {
    console.log(articles)
    return (
        <div>
            { articles && articles.map(article => {
                return (
                    <ArticleSummary article={article} key={article.id} />
                )
            })}
        </div>
    )}
                


export default Articles