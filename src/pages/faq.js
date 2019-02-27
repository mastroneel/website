import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { rgba } from 'polished'
import Collapsible from 'react-collapsible'

import { Container, Wrapper } from '../components/ui/Grid'
import SEO from '../components/seo'
import faqIllustration from '../images/faq.svg'
import PageIntro from '../components/PageIntro'

const SectionTitle = styled.h3`
  font-weight: 900;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    width: 30%;
    height: 3px;
    background-color: ${ props => props.theme.color.pink };
    position: absolute;
    bottom: -2px;
    left: 0;
  }
`

const FaqBody = styled.div`
  border: 1px solid ${ props => rgba(props.theme.color.dark, 0.15) };
  margin: 1.5em 0;
  transition: box-shadow 0.25s ease;

  :hover {
    box-shadow: 0 4px 20px ${ props => rgba(props.theme.color.dark, 0.1) };
  }

  .Collapsible.open {
    background-color: #fff;
    box-shadow: 0 4px 20px ${ props => rgba(props.theme.color.dark, 0.1) };
    transition: background-color 0.25s ease;
  }

  .Collapsible__trigger {
    padding: 1em 1.5em;
    cursor: pointer;
    display: inline-block;
    width: 100%;
    font-size: 2rem;
    font-weight: 700;
    position: relative;

    &.is-open {
      color: ${ props => props.theme.color.pink };

      &::before {
        background-color: ${ props => props.theme.color.pink };
        box-shadow: 0 0 0 8px ${ props => rgba(props.theme.color.pink, 0.08) };
      }
    }

    &::before {
      content: '';
      position: absolute;
      left: -6px;
      top: 50%;
      width: 12px;
      height: 12px;
      background-color: ${ props => props.theme.color.blue };
      border-radius: 20px;
      transform: translateY(-50%);
      transition: background-color 0.25s ease;
      box-shadow: 0 0 0 8px ${ props => rgba(props.theme.color.blue, 0.08) };
    }
  }

  .Collapsible__contentInner {
    padding: 0 1.5em;
    padding-bottom: 0;
    margin: 1.5em 0;
    margin-top: 0;

    p {
      margin: 0;
    }
  }
`

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
          src: faqIllustration,
          alt: 'The Answers You Want to Know',
        }}
      />

      <Wrapper bgColor="#f9f6fb">
        <Container size="md">
          {faq.map(entry => (
            <div key={entry.node.id}>
              <SectionTitle>{entry.node.section}</SectionTitle>
              {entry.node.faq.map((qa, idx) => (
                <FaqBody key={idx}>
                  <Collapsible
                    openedClassName="open"
                    trigger={qa.q}
                    transitionTime={200}
                    easing="ease-in-out"
                  >
                    <p>{qa.a}</p>
                  </Collapsible>
                </FaqBody>
              ))}
            </div>
          ))}
        </Container>
      </Wrapper>
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
