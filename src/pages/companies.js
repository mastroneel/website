import React from 'react'
import styled from 'styled-components'
import { rgba } from 'polished'

import Seo from '../components/seo'
import PageIntro from '../components/PageIntro'
import { Wrapper, Container, Row, Column } from '../components/ui/Grid'
import theme from '../theme'
import Heading, { Underline } from '../components/ui/Heading'
import Tabs from '../components/ui/Tabs'
import Button, { ButtonGroup } from '../components/ui/Buttons'

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
          <Column>
            <Tabs>
              <div aria-label="Inclusion">
                <p>
                  This has been included as a specific focus for the potentialities that such technology will assist in
                  the raising of consciousness, the capabilities and possibilities of what an average human can perform
                  or tap into. Leveraging technology to provide access, information and tools for the education of end
                  users.
                </p>
              </div>
              <div aria-label="Impact">
                <p>
                  If people can live longer, healthier lives then many of the worries associated with a lower level
                  thinking can be escaped and accelerate the growth of the individual personally.
                </p>
              </div>
              <div aria-label="Returns">
                <p>
                  Healthcare represents annually about 17.9% of the nations GDP, it is easy to see that within the last
                  decade this year over year rate has grown by roughly 3% per annum compounded, with a growing industry
                  that is only going to grow larger year after year, it is likely that there are many components and
                  specific sectors that are ripe for disruption. Discerning which sectors are ripe for disruption.
                </p>
              </div>
              <div aria-label="Examples">
                <p>
                  25 Again, 23andme, Calico, Oura, Life Extension Project, Davinci Robot, Doc.ai, Innovation Labs, Dave
                  Asprey, Whim Hoff, Flow Genome Project, Nootropics, Free Solo, Verily, Headspace
                </p>
              </div>
            </Tabs>
          </Column>
        </Row>
        <Row>
          <Column>
            <h4>Our Investments</h4>
            <div>
              <Button
                as="a"
                appearance="secondary"
                href="https://www.ouraring.com"
                target="_blank"
                rel="nofollow"
              >
                Oura
              </Button>
            </div>
          </Column>
        </Row>
      </Container>
    </Wrapper>
  </>
)
