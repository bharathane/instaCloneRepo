import './index.css'

const RenderProfilePosts = props => {
  const {profilePostData, profileAltText} = props
  const {postImage} = profilePostData
  return (
    <li>
      <img src={postImage} alt={profileAltText} />
    </li>
  )
}

export default RenderProfilePosts
