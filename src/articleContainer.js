import React from 'react';
import Article from './article';

const ArticleContainer = (articlesData) => {

  const articles = articlesData.articlesData.map((article) => {
    return(
      <Article article={article} key={article.postId} />
    )
  })

  return(
    <div id="articleContainer" className="col-xs-12">
      {articles}
    </div>
  )
}

export default ArticleContainer
