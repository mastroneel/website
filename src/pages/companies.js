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
import finance from '../images/companies/finance.svg'
import civilization from '../images/companies/civilization.svg'
import human from '../images/companies/human.svg'

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
    max-width: 64px;
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
              src={human}
              alt="Human icon"
              css={`
                position: relative;
                top: 3px;
              `}
            />
          </SectionIcon>
          <h2 css={Underline}>Human Potential</h2>
          <p>
            The concept of cultivating extraordinary potential which lies largely untapped in all people. This can
            feature a wide range of products services and businesses focusing in on skill, talent, aptitude and ability.
            It’s a combination between the health component of the body as well as the psychological adaptation and
            unlocking of the ability to tap into the potential that exists, does not require medical professional and is
            a methodology or process which an individual can master.
          </p>
        </Column>
      </Row>
      <Row>
        <Column>
          <Tabs>
            <div aria-label="Inclusion">
              <p>
                This has been included as a specific focus for the potentialities that such technology will assist in
                the raising of consciousness, the capabilities and possibilities of what an average human can perform or
                tap into. Leveraging technology to provide access, information and tools for the education of end users.
              </p>
            </div>
            <div aria-label="Impact">
              <p>
                With the advent of furthering what an average human is capable of, brings into focus what one is capable
                of, within themselves and their surroundings. The more we allow ourselves to recognize what is possible
                the more likely we are to share the belief that anyone is capable of sharing in these advancements and
                likely to advance themselves, the more each individual advances, the collective share of consciousness
                rises.
              </p>
            </div>
            <div aria-label="Returns">
              <p>
                We’ve seen a rise in direct to consumer technologies, the transformative technology conference and
                academy and ancillary services which run parallel in many ways (regenerative medicine). This rise has
                lead to an increased investment of X% as well as the total number of successful companies by Y%.
              </p>
            </div>
          </Tabs>
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
                src={civilization}
                alt="Civilization icon"
              />
            </SectionIcon>
            <h2 css={Underline}>Sustainable Civilization</h2>
            <p>
              An opportunity that strives to develop technology which will create the opportunity for us to live in
              balance with our ecosystem and repair the previous damage.
            </p>
          </Column>
        </Row>
        <Row>
          <Column>
            <Tabs>
              <div aria-label="Inclusion">
                <p>no content</p>
              </div>
              <div aria-label="Impact">
                <p>
                  If we look at the definition of consciousness, as a state of being aware of one’s surroundings, taking
                  an extreme interest and focus on one's surroundings, the state of them, and seeking solutions to the
                  environments problems is in itself a key part of raising consciousness.
                </p>
              </div>
              <div aria-label="Returns">
                <p>no content</p>
              </div>
              <div aria-label="Examples">
                <p>Solar City, Tesla, Malta, Makani, Dandelion, 4ocean, The Ocean Cleanup, Synova</p>
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
                href="http://fullcyclefund.com/"
                target="_blank"
                rel="nofollow"
              >
                Full Cycle Energy Fund
              </Button>
            </div>
          </Column>
        </Row>
      </Container>
    </Wrapper>
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
              src={finance}
              alt="Finance icon"
              css={`
                position: relative;
                top: 3px;
              `}
            />
          </SectionIcon>
          <h2 css={Underline}>Financial Technology</h2>
          <p>
            Fintech has been previously defined as any computer program or technology used to support, enable, or
            disrupt the banking and financial services industries.
          </p>
        </Column>
      </Row>
      <Row>
        <Column>
          <Tabs>
            <div aria-label="Inclusion">
              <p>
                The fund is looking to capitalize on one sector and industry that has truly stood the test of time, and
                that is value exchange and value storage. Fintech is quite simply the newest slice of an everlasting
                loaf of bread. It seemingly touches nearly every citizen of earth, as almost all engage in some form of
                value exchange on a nearly daily or multiple daily basis. While there are those that are currently
                unbanked or not involved in the traditional financial system as they are in areas that remain exempt
                from being included, many fintech companies are providing solutions to problems within and outside of
                traditional financial services, creating and supporting an inclusive web that seeks to push every
                economy into one massively open and shared global online financial economy.
              </p>
            </div>
            <div aria-label="Impact">
              <p>
                With Maslow's hierarchy of needs, we take steps to ensure the financial well being to help accelerate
                that process, companies doing good with that money as well have the opportunity to shape leveraging this
                wealth of knowledge, to make better decisions, more impactful ones as well as have a return.
              </p>
            </div>
            <div aria-label="Returns">
              <p>
                The rise in financial technologies has seen an industry growth of X% over the past five years, with the
                growth of mobile application users the Mobile First banking has exploded (Y%) and consumers in the
                millennial age range are 25% more likely to use one of these providers. We have also seen business
                models be completely disrupted by offering $0 fees for trading and banking services as well as things
                like robo traders for financial management. Analytics has also seen a growth of Z% with tools used to
                track spending and behaviors as well as make recommendations for products and services. Digital
                currencies have opened up a new wave for public offerings as well crowdfunding has seen explosive
                growth. Many of these companies have grown to billion dollar valuations within the past five years.
              </p>
            </div>
            <div aria-label="Examples">
              <p>
                Robinhood, Simple, Circle, Mint, Wealthsimple, Stripe, Robinhood, Square, Plaid, Coinbase, Blockstream,
                LedgerX, Chain, Bitpay
              </p>
            </div>
          </Tabs>
        </Column>
      </Row>
      <Row>
        <Column>
          <h4>Our Investments</h4>
          <ButtonGroup>
            <Button
              as="a"
              appearance="secondary"
              href="https://goodmoney.com/"
              target="_blank"
              rel="nofollow"
            >
              Good Money
            </Button>
            <Button
              as="a"
              appearance="secondary"
              href="http://www.investabit.com"
              target="_blank"
              rel="nofollow"
            >
              Investabit
            </Button>
          </ButtonGroup>
        </Column>
      </Row>
    </Container>
  </>
)
