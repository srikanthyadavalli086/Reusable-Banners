// Write your code here.
import './index.css'

const reusableBanners = props => {
  const {bannerCards} = props
  const {headerText, description, className} = bannerCards
  return (
    <li className={className}>
      <h1>{headerText}</h1>
      <p>{description}</p>
      <button>Show More</button>
    </li>
  )
}

export default reusableBanners
