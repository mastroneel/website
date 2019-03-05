import React from 'react'
import styled from 'styled-components'
import { rgba } from 'polished'

import Seo from '../components/seo'
import PageIntro from '../components/PageIntro'
import { Wrapper, Container, Row, Column } from '../components/ui/Grid'
import theme from '../theme'
import Heading, { Underline } from '../components/ui/Heading'
import Tabs from '../components/ui/Tabs'

import companiesIll from '../images/companies.svg'
import heart from '../images/companies/heart.svg'

const SectionIcon = styled.div`
  background-color: #fff;
  width: 84px;
  height: 84px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 200px;
  border: 1px solid ${ props => rgba(props.theme.color.dark, 0.1) };

  img {
    max-width: 42px;
  }
`

export default () => (
  <>
    <Seo title="Companies - Our Investments" />
    <PageIntro
      small="Where We Invest"
      heading="Companies"
      paragraph="The way we chose to invest."
      image={{
        src: companiesIll,
        alt: 'Companies illustratio',
      }}
    />

    <Container
      size="md"
      css={`
        margin-bottom: ${ theme.spacing.lg };
      `}
    >
      <Row>
        <Column>
          <h2 css={Underline}>Investment Themes</h2>
          <p>
            In our approach to a theme we consider the fund as industry agnostic, provided it fits within the funds
            thesis and vision. We do however focus on explosive growth sectors, a vector of an industry that is post
            fringe cycle and beginning its growth cycle stage, at its tipping point, contained within hardware- and
            software-based tools, leveraging advancements in AI, designed to enhance human psychological well-being,
            cognitive function and physical capabilities, known as Transformative Technology.
          </p>
        </Column>
      </Row>
    </Container>
    <Wrapper bgColor={rgba(theme.color.dark, 0.03)}>
      <Container
        size="md"
        css={`
          padding: ${ theme.spacing.lg } 0;
        `}
      >
        <Row>
          <Column>
            <SectionIcon>
              <img
                src={heart}
                alt="Heart icon"
                css={`
                  position: relative;
                  top: 3px;
                `}
              />
            </SectionIcon>
            <h2 css={Underline}>Disruptive Health</h2>
            <p>
              Disruptive health can be defined as any innovations within the healthcare industry, utilizing the advent
              of AI, big data, other forms of technology, in efforts to either prolong and extend life, reduce symptoms
              and diseases, and seek to improve or otherwise augment the current capabilities of treatment and the
              capacity of the human brain and body. Biotech and longevity.
            </p>
          </Column>
        </Row>
        <Row>
          <Tabs>
            <div label="Gator">
              See ya later, <em>Alligator</em>!
            </div>
          </Tabs>
        </Row>
      </Container>
    </Wrapper>
  </>
)
