import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { rgba } from 'polished'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Scrollspy from 'react-scrollspy'

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
`

const DIR = {
  NEXT: 'next',
  BACK: 'back',
}

const TOC = ({ data, ...rest }) => {
  const { items: entries } = data().table.edges[0].node.tableOfContents
  const [linkIdx, setLinkIdx] = useState(1)

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
    return (
      <CycleLink
        href={getUrl(idx, dir)}
        onClick={() => cycleSection(dir)}
      >
        {dir === DIR.BACK ? '←' : '→'}
      </CycleLink>
    )
  }

  return (
    <TableCont {...rest}>
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

export default TOC
