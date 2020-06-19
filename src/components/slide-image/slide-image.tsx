/** @jsx jsx */
import { jsx } from '@emotion/core'
import Img from 'gatsby-image'

const SlideImage = (imageSource?: any) => {
  return <Img fluid={imageSource} />
}

export default SlideImage
