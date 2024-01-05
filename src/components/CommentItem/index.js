// Write your code here
import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {commentDetails, onLikeComment, onDeleteComment} = props
  const {name, comment, isLiked, id, className, date} = commentDetails
  const imgUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const activeBtnClassName = isLiked ? 'active-btn' : ''

  const onClickLikeBtn = () => {
    onLikeComment(id)
  }

  function getTime() {
    return formatDistanceToNow(date)
  }

  const onClickDeleteBtn = () => {
    onDeleteComment(id)
  }

  return (
    <li className="comment">
      <div className="comment-name-container">
        <p className={`comment-logo ${className}`}>{name.slice(0, 1)}</p>
        <div className="name-comment-container">
          <div className="name-time-container">
            <h1 className="name">{name}</h1>
            <p className="comment-time">{getTime()}</p>
          </div>
          <p className="comment-desc">{comment}</p>
        </div>
      </div>
      <div className="buttons-container">
        <button
          type="button"
          className={`button ${activeBtnClassName}`}
          onClick={onClickLikeBtn}
        >
          <img src={imgUrl} alt="like" className="like-img" />
          Like
        </button>
        <button
          type="button"
          className="button"
          onClick={onClickDeleteBtn}
          data-testid="delete"
        >
          <img
            alt="delete"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
