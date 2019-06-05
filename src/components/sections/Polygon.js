import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'

const Svg = styled.svg`
  transform: ${ props => `rotate(${ props.rotation }deg) scale(${ props.polyScale })` };
`

const PolygonLight = ({ ...props }) => (
  <Svg
    className="polygon-light"
    width="179"
    height="163"
    viewBox="0 0 179 163"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M65.5662 14.3151C76.3434 -4.35155 103.286 -4.35154 114.064 14.3151L175.118 120.065C185.896 138.732 172.424 162.065 150.87 162.065H28.7601C7.20572 162.065 -6.26577 138.732 4.51144 120.065L65.5662 14.3151Z"
      fill="#F7F5FA"
    />
  </Svg>
)

const SvgOuter = styled.div`
  position: relative;

  svg.polygon {
    path {
      cursor: pointer;
      transition: all 0.2s ease-in-out;

      :hover,
      &.active {
        transform: translateY(-6%);
      }
    }
  }

  svg.polygon-light {
    position: absolute;
    left: calc(50% - 4em);
    top: 50%;
    transform: translate(-50%, -50%) scale(1.5) rotate(180deg);
    z-index: -1;
  }
`

const Polygon = ({ setPoly, activePoly }) => {
  const svgRef = useRef(null)
  useEffect(() => {
    Array.from(svgRef.current.children).map((node, idx) => {
      node.setAttribute('id', idx)
      node.setAttribute('class', activePoly === idx ? 'active' : 'normal')
    })
  }, [activePoly])
  return (
    <SvgOuter
      onClick={e => {
        if (!e.target.getAttribute('id')) {
          return null
        }

        return setPoly(e.target.getAttribute('id'))
      }}
    >
      <svg
        className="polygon"
        width="393"
        height="352"
        viewBox="0 0 393 352"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ref={svgRef}
      >
        <path
          d="M196.751 42.2899C207.528 23.6233 234.472 23.6232 245.249 42.2899L349.172 222.29C359.949 240.957 346.477 264.29 324.923 264.29H117.077C95.5225 264.29 82.051 240.957 92.8282 222.29L196.751 42.2899Z"
          fill="#FF3789"
        />
        <path
          d="M170.751 71.2899C181.528 52.6233 208.472 52.6232 219.249 71.2899L306.717 222.79C317.495 241.457 304.023 264.79 282.469 264.79H107.531C85.977 264.79 72.5055 241.457 83.2827 222.79L170.751 71.2899Z"
          fill="#FF6172"
        />
        <path
          d="M145.751 99.2899C156.528 80.6233 183.471 80.6232 194.249 99.2899L265.263 222.29C276.04 240.957 262.568 264.29 241.014 264.29H98.9859C77.4315 264.29 63.96 240.957 74.7372 222.29L145.751 99.2899Z"
          fill="#FF973D"
        />
        <path
          d="M119.751 128.29C130.529 109.623 157.472 109.623 168.249 128.29L222.808 222.79C233.586 241.457 220.114 264.79 198.56 264.79H89.4403C67.8859 264.79 54.4145 241.457 65.1917 222.79L119.751 128.29Z"
          fill="#FFAE4D"
        />
        <path
          d="M97.2513 151.29C108.028 132.623 134.972 132.623 145.749 151.29L186.885 222.54C197.662 241.207 184.191 264.54 162.636 264.54H80.3638C58.8094 264.54 45.3379 241.207 56.1151 222.54L97.2513 151.29Z"
          fill="#FFD335"
        />
        <path
          d="M72.2513 178.29C83.0285 159.623 109.972 159.623 120.749 178.29L146.296 222.54C157.074 241.207 143.602 264.54 122.048 264.54H70.9522C49.3978 264.54 35.9263 241.207 46.7035 222.54L72.2513 178.29Z"
          fill="#58308A"
        />
        <path
          d="M47.7513 204.29C58.5285 185.623 85.4715 185.623 96.2487 204.29L106.641 222.29C117.418 240.957 103.947 264.29 82.3923 264.29H61.6077C40.0532 264.29 26.5818 240.957 37.359 222.29L47.7513 204.29Z"
          fill="#180035"
        />
        <path
          d="M27.4989 227.375C36.8327 211.208 60.1673 211.208 69.5011 227.375V227.375C78.8349 243.542 67.1677 263.75 48.5 263.75V263.75C29.8323 263.75 18.1651 243.542 27.4989 227.375V227.375Z"
          fill="black"
        />
      </svg>
      <PolygonLight />
    </SvgOuter>
  )
}

export { Polygon as default, PolygonLight }
