import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {
    name: '',
    comment: '',
    commentsList: [],
  }

  onAddBtn = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const randomNum = Math.floor(
      Math.random() * initialContainerBackgroundClassNames.length,
    )
    const backgroundColorClassName =
      initialContainerBackgroundClassNames[randomNum]
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLiked: false,
      date: new Date(),
      className: backgroundColorClassName,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
    }))
  }

  onChangeName = event => {
    this.setState({
      name: event.target.value,
    })
  }

  onChangeText = event => {
    this.setState({
      comment: event.target.value,
    })
  }

  onDeleteComment = id => {
    const {commentsList} = this.state
    const filteredList = commentsList.filter(each => each.id !== id)
    this.setState({
      commentsList: filteredList,
    })
  }

  onLikeComment = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(each => {
        if (each.id === id) {
          return {...each, isLiked: !each.isLiked}
        }
        return each
      }),
    }))
  }

  render() {
    const {commentsList, name, comment} = this.state
    return (
      <div className="comments-app-container">
        <div className="sub-comments-app-container">
          <h1 className="comment-title">Comments</h1>
          <div className="comment-img-details-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="comments-img"
            />
            <form className="add-comment-container">
              <p className="desc">Say something about 4.0 Technologies</p>
              <input
                placeholder="Your Name"
                className="name-input"
                onChange={this.onChangeName}
                value={name}
              />
              <br />
              <textarea
                placeholder="Your Comment"
                rows="6"
                className="comment-input-desc"
                onChange={this.onChangeText}
                value={comment}
              >
                {comment}
              </textarea>
              <br />
              <button type="submit" className="add-btn" onClick={this.onAddBtn}>
                Add Comment
              </button>
            </form>
          </div>
          <p className="comments-count">
            <span className="count">{commentsList.length}</span>
            Comments
          </p>
          <ul className="comments-list">
            {commentsList.map(eachComment => (
              <CommentItem
                key={eachComment.id}
                commentDetails={eachComment}
                onLikeComment={this.onLikeComment}
                onDeleteComment={this.onDeleteComment}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
