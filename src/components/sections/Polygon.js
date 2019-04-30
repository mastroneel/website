import React, { useEffect, useRef } from 'react'
import styled, { keyframes } from 'styled-components'

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
          d="M192.751 42C203.528 23.3333 230.472 23.3333 241.249 42L345.172 222C355.949 240.667 342.477 264 320.923 264H113.077C91.5225 264 78.051 240.667 88.8282 222L192.751 42Z"
          fill="#FF3789"
        />
        <path
          d="M166.751 71C177.528 52.3333 204.472 52.3333 215.249 71L302.717 222.5C313.495 241.167 300.023 264.5 278.469 264.5H103.531C81.977 264.5 68.5055 241.167 79.2827 222.5L166.751 71Z"
          fill="#FF6172"
        />
        <path
          d="M141.751 99C152.528 80.3333 179.471 80.3333 190.249 99L261.263 222C272.04 240.667 258.568 264 237.014 264H94.9859C73.4315 264 59.96 240.667 70.7372 222L141.751 99Z"
          fill="#FF973D"
        />
        <path
          d="M115.751 128C126.529 109.333 153.472 109.333 164.249 128L218.808 222.5C229.586 241.167 216.114 264.5 194.56 264.5H85.4403C63.8859 264.5 50.4145 241.167 61.1917 222.5L115.751 128Z"
          fill="#FFAE4D"
        />
        <path
          d="M93.2513 151C104.028 132.333 130.972 132.333 141.749 151L182.885 222.25C193.662 240.917 180.191 264.25 158.636 264.25H76.3638C54.8094 264.25 41.3379 240.917 52.1151 222.25L93.2513 151Z"
          fill="#FFD335"
        />
        <path
          d="M68.2513 178C79.0285 159.333 105.972 159.333 116.749 178L142.296 222.25C153.074 240.917 139.602 264.25 118.048 264.25H66.9522C45.3978 264.25 31.9263 240.917 42.7035 222.25L68.2513 178Z"
          fill="#58308A"
        />
        <path
          d="M43.7513 204C54.5285 185.333 81.4715 185.333 92.2487 204L102.641 222C113.418 240.667 99.9467 264 78.3923 264H57.6077C36.0532 264 22.5818 240.667 33.359 222L43.7513 204Z"
          fill="#180035"
        />
      </svg>
      <PolygonLight />
    </SvgOuter>
  )
}

export { Polygon as default, PolygonLight }
