import React from 'react'
import './NewsCard.css'

const NewsCard = ({ newsItem }) => {

  // console.log(newsItem.url);

  const fullDate = new Date(newsItem.publishedAt)
  var date = fullDate.toString().split(" ");
  const hour = parseInt(date[4].substring(0, 2))
  const time = hour > 12 ? true : false

  return (
    <div className="newsCard">
      <img className="newsImage" alt="newsItem.title" src={newsItem.urlToImage ? newsItem.urlToImage : "https://s3-alpha.figma.com/hub/file/948140848/1f4d8ea7-e9d9-48b7-b70c-819482fb10fb-cover.png"} />
      <div className="newsText">
        <div>
          <span className="title">{newsItem.title}</span>
          <br />
          <span className="author"><a href="{newsItems.url}" target="_blank" rel="noreferrer"><b>Short</b> </a> <span className="muted">by {newsItem.author ? newsItem.author : 'Unknown'} /
            {time ?
              `${hour - 12}: ${date[4].substring(3, 5)} pm`
              :
              `${hour}: ${date[4].substring(3, 5)} am`
            } on {date[2]} {date[1]} {date[3]}, {date[0]}
          </span></span>
        </div>
        <div className="lowerNewsText">
          <div className="description">
            {newsItem.description}
          </div>

          <span className="readMore">read more at {" "}
            <a href={newsItem.url} target="_blank" rel="noreferrer"><b>{newsItem.source.name}</b></a>
          </span>
        </div>
      </div>
    </div>
  )
}

export default NewsCard
