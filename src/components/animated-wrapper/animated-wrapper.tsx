/** @jsx jsx  */
import { jsx, css } from '@emotion/core'
import { useSpring, animated } from 'react-spring'

interface AnimatedWrapperProps {
  children?: React.ReactNode
  maxWidth?: number
}

const calc = (x: number, y: number) => [
  -(y - window.innerHeight / 2) / 200,
  (x - window.innerWidth / 2) / 200,
  1.1,
]

const trans = (x?: any | number, y?: any | number, s?: any | number) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

function AnimatedWrapper({ children, maxWidth }: AnimatedWrapperProps) {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }))
  return (
    <animated.div
      className="card"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
      css={css`
        max-width: ${maxWidth}px;
        margin: auto;
        position: relative;
        will-change: transform;
      `}
    >
      {children}
    </animated.div>
  )
}

export default AnimatedWrapper
