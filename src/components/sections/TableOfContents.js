import React, { useState } from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { rgba } from 'polished'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Scrollspy from 'react-scrollspy'
import arrowLeft from '../../images/arrow-left.svg'
import arrowRight from '../../images/arrow-right.svg'

const TableCont = styled.div`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  background-color: white;
  padding: 0.7em 1em;
  box-shadow: 0 4px 12px ${ props => rgba(props.theme.color.dark, 0.12) };
  display: flex;
  align-items: center;
  justify-content: space-between;

  h5 {
    margin: 0;
    display: none;

    &.is-current {
      display: inline;
    }
  }

  ul {
    margin: 0;
  }
`

const CycleLink = styled(AnchorLink)`
  background-color: ${ props => props.theme.color.pink };
  color: white;
  text-decoration: none;
  display: inline-block;
  padding: 0.3em 0.5em;
  line-height: 1;
  border-radius: 4px;
  transition: all 0.25s ease;
  opacity: ${ props => (props.href ? '1' : '0') };
  visibility: ${ props => (props.href ? 'visible' : 'hidden') };

  :hover {
    opacity: 0.7;
  }

  img {
    width: 32px;
    height: 32px;
  }
`

const DIR = {
  NEXT: 'next',
  BACK: 'back',
}

const TOC = () => {
  const [linkIdx, setLinkIdx] = useState(1)
  const {
    table: {
      tableOfContents: { items: entries },
    },
  } = useStaticQuery(tableOfContents)

  function cycleSection (dir) {
    setLinkIdx(prev => {
      switch (dir) {
      case DIR.NEXT:
        if (prev === entries.length - 1) return prev
        return prev + 1
      case DIR.BACK:
        if (prev === 0) return prev
        return prev - 1
      default:
        return prev
      }
    })
  }

  function findEntry (el) {
    const currentId = el !== undefined && el.id
    if (currentId) {
      setLinkIdx(entries.findIndex(obj => obj.url.substr(1) === currentId))
    }
  }

  function getUrl (idx, dir) {
    const next = entries[idx + 1]
    const previous = entries[idx - 1]

    if (dir === DIR.NEXT && next) {
      return next.url
    } else if (dir === DIR.BACK && previous) {
      return previous.url
    } else {
      return null
    }
  }

  function cycleButton (idx, dir) {
    function buildArrow (src) {
      return <img
        src={src}
        alt="Cycle button"
      />
    }

    return (
      <CycleLink
        href={getUrl(idx, dir)}
        onClick={() => cycleSection(dir)}
      >
        {dir === DIR.BACK ? buildArrow(arrowLeft) : buildArrow(arrowRight)}
      </CycleLink>
    )
  }

  return (
    <TableCont>
      {cycleButton(linkIdx, DIR.BACK)}
      <Scrollspy
        items={entries.map(entry => entry.url.substr(1))}
        currentClassName="is-current"
        onUpdate={el => findEntry(el)}
      >
        {entries.map((entry, idx) => (
          <h5 key={idx}>{entry.title}</h5>
        ))}
      </Scrollspy>
      {cycleButton(linkIdx, DIR.NEXT)}
    </TableCont>
  )
}

export const tableOfContents = graphql`
  query {
    table: mdx(frontmatter: { title: { eq: "Philosophy" } }) {
      tableOfContents
    }
  }
`

export default TOC
