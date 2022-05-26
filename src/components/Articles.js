import React, { useState } from 'react';

function Articles({ articles }) {
  // state for maintaining modification of article
  const [sortedArticle, setSortedArticle] = useState(articles);

  // sort by upVote function
  // slice function without any argument create a copy of array, it means we are not sorting the actual articles array but the copy of articles array.
  const modifyArticleByVote = () => {
    setSortedArticle(
      articles.slice().sort((current, next) => next.upvotes - current.upvotes)
    );
  };

  // sort by bate function
  // here we are cheking that if there comes any positive difference in date of next row and current row then we will sort them (internally swap those value)
  const modifyArticleByDate = () => {
    setSortedArticle(
      articles
        .slice()
        .sort((current, next) => new Date(next.date) - new Date(current.date))
    );
  };

  // JSX return statement
  return (
    <div className="card">
      <table id="article">
        <thead>
          <tr>
            <th>Title</th>
            {/* modifyArticleByVote function will invoke on click of upvotes */}
            <th onClick={modifyArticleByVote}>Upvotes</th>
            {/* modifyArticleByDate function will invoke on click of Date */}
            <th onClick={modifyArticleByDate}>Date</th>
          </tr>
        </thead>
        <tbody>
          {/* map over sorted array */}
          {sortedArticle.map((article, index) => {
            return (
              <tr data-testid="article" key={index}>
                <td data-testid="article-title">{article.title}</td>
                <td data-testid="article-upvotes">{article.upvotes}</td>
                <td data-testid="article-date">{article.date}</td>
              </tr>
            );
          })}
          {/* end map */}
        </tbody>
      </table>
    </div>
  );
}

export default Articles;
