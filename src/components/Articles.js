import React from 'react';
import ArticleSummary from './ArticleSummary'
import { Link } from 'react-router-dom'


const Articles = ({articles}) => {
    console.log(articles)
    return (
        <div>
            { articles && articles.map(article => {
                return (
                    <Link to={'/view_article/'+article.id}>
                        <ArticleSummary article={article} key={article.id} />
                    </Link>
                )
            })}
        </div>
    )}
                


export default Articles