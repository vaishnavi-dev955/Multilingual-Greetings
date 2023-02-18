import './index.css'

const ImageItem = props => {
  const {ImageItemData} = props
  const {imageUrl, imageAltText} = ImageItemData
  return (
    <li className="list-Item1">
      <img src={imageUrl} alt={imageAltText} className="img-style" />
    </li>
  )
}

export default ImageItem
