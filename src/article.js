import React from 'react';
import articleHelper from './articleHelper';
import './article.css';

const Article = (article) => {
  return(
      <div id="article" className="article">
        <img className="img-responsive" src={article.article.image} />
        <h4 id="date" className="date-text">{articleHelper.trimDate(article.article.date)}</h4>
        <h2 id="title" className="title-text">{article.article.title}</h2>
        <p id="body" className="body-text">{article.article.body}</p>
      </div>
  );
};

export default Article
