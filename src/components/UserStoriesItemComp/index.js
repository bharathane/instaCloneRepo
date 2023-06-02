import './index.css'

const UserStoriesItemCompo = props => {
  const {itemDetails} = props
  return (
    <div className="storyCon">
      <img src={itemDetails.storyUrl} alt="userStory" className="storyImg" />
      <p className="userNameStories">{itemDetails.userName}</p>
    </div>
  )
}

export default UserStoriesItemCompo
