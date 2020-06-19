/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { useState } from 'react'
import styled from '@emotion/styled'
import Slide from '../slide/slide'
import { useContentfulImagesQuery } from '../../hooks/use-images-query'
import AnimatedWrapper from '../animated-wrapper'
import { GrNext, GrPrevious } from 'react-icons/gr'

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
`

const Meta = styled.div`
  padding: 10px;
`

const SlideWrapper = styled.div`
  grid-column: 2 / 2;
  grid-row: 1 / -1;
  padding: 5px;
  border-radius: 5px;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.5s;
  padding: 10px;
  display: block;
  &:hover {
    box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);
  }
`

const Button = styled.button`
  margin: 5px;
  border: none;
  display: block;
  border-radius: 5px;
  will-change: transform;
  transition: box-shadow 0.5s;
  transition: transform 0.2s;
  transition: background-color 0.9s;
  font-size: 32px;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
  &:hover {
    box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);
    transform: scale(1.02);
    background-color: white;
  }
`

const Slider = () => {
  const [index, setIndex] = useState(0)

  const allContentfulImage = useContentfulImagesQuery()
  const imageData = allContentfulImage.edges

  const length = imageData.length - 1

  const handleNext = () =>
    index === length ? setIndex(0) : setIndex(index + 1)

  const handlePrevious = () =>
    index === 0 ? setIndex(length) : setIndex(index - 1)

  const slide = imageData[index]

  return (
    <AnimatedWrapper>
      <GridWrapper>
        <SlideWrapper>
          <Slide
            key={slide.node.photo.contentful_id}
            fluid={slide.node.photo.fluid}
          />
          <Meta>
            <div>Title: "{slide.node.photo.title}"</div>
            <div>{slide.node.imageCaption.imageCaption}</div>
            <div>Photograph by {slide.node.imageCredits.imageCredits}</div>
          </Meta>
        </SlideWrapper>
        <Button
          css={css`
            grid-column: 1 / 1;
            grid-row: 2 / 2;
          `}
          onClick={() => handlePrevious()}
        >
          <GrPrevious />
        </Button>
        <Button
          css={css`
            grid-column: 3 / 3;
            grid-row: 2 / 2;
          `}
          onClick={() => handleNext()}
        >
          <GrNext />
        </Button>
      </GridWrapper>
    </AnimatedWrapper>
  )
}
console.log('Log gatsby Image', Slide)

export default Slider
