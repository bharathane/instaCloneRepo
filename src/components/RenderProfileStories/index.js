import './index.css'

const RenderProfileStories = props => {
  const {storiesDetails, storiesAltText} = props
  const {image} = storiesDetails
  return (
    <li className="li">
      <img src={image} alt={storiesAltText} className="sImg" />
    </li>
  )
}

export default RenderProfileStories
