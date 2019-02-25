import React from 'react'
import Collapsible from 'react-collapsible'
import { graphql } from 'gatsby'

import { Container, Row, Column } from '../components/ui/Grid'
import SEO from '../components/seo'
import arrow from '../images/arrow.svg'
import PageIntro from '../components/PageIntro'

export default ({ data }) => {
  const { edges: faq } = data.allFaqJson
  return (
    <>
      <SEO
        title="The Answers You Want to Know"
        description="These are some of the most frequent questions asked of us and our responses."
      />
      <PageIntro
        small="FAQ"
        heading="The Answers You Want to Know"
        paragraph="These are some of the most frequent questions asked of us and our responses"
        image={{
          src: 'static/team-c1f9ff52629c475b6dc5196b5265034f.svg',
          alt: 'Image',
        }}
      />
      <Container className="inner">
        {faq.map(entry => (
          <div key={entry.node.id}>
            <h2>{entry.node.section}</h2>
            {entry.node.faq.map((qa, idx) => (
              <div key={idx} className="faq">
                <Collapsible trigger={qa.q}>
                  <p>{qa.a}</p>
                </Collapsible>
              </div>
            ))}
          </div>
        ))}
      </Container>
    </>
  )
}

export const allPages = graphql`
  query {
    allFaqJson {
      edges {
        node {
          id
          section
          faq {
            q
            a
          }
        }
      }
    }
  }
`
