/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import Slider from '../components/slider'

const Container = styled.div`
  width: 100%;
  position: relative;
  max-width: 768px;
  margin: auto;
`
export default function Home() {
  return (
    <Container>
      <div
        css={css`
          margin-bottom: 80px;
        `}
      >
        <h1>Simple Image Carousel</h1>
      </div>
      <Slider />
    </Container>
  )
}
