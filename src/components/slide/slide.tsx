/** @jsx jsx */
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
import Img from 'gatsby-image'

const SlideWrapper = styled.div`
  background-color: wheat;
  height: 100%;
  width: 100%;
  border-radius: 5px;
  z-index: 1;
`

const SlideTitle = styled.div`
  padding: 5px;
`

const StyledImage = styled(Img)`
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const Slide = (props?: any) => {
  return (
    <div>
      <SlideWrapper>
        <StyledImage {...props} />
      </SlideWrapper>
    </div>
  )
}

export default Slide
