import React from 'react'
import styled from 'styled-components'
import { rgba } from 'polished'

import Seo from '../components/seo'
import PageIntro from '../components/PageIntro'
import { Wrapper, Container, Row, Column } from '../components/ui/Grid'
import theme from '../theme'
import { Underline } from '../components/ui/Heading'
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
              Disruptive health can be defined as any innovations within the healthcare industry that utilize the advent of AI, big data and other forms of technology. These innovations aim to prolong and extend life, reduce symptoms and diseases, and seek to improve or otherwise augment the current capabilities of treatment, and the capacity of the human brain and body. Within this industry a particular focus includes the subcategory of Human Potential.
            </p>
          </Column>
        </Row>
        <Row>
          <Column>
            <Tabs>
              <div aria-label="Inclusion">
                <p>
                  This is designed specifically around the health and well-being of individuals, leveraging the advances in Machine Learning and Artificial Intelligence in relation to genomic testing, bio-engineering and pharmaceuticals.
                </p>
              </div>
              <div aria-label="Impact">
                <p>
                  If people can live healthier longer more fulfilled lives the result is that many of the worries associated with a concentrated lower-level thinking (worrying on basic necessities) can be eliminated, in order to accelerate the personal growth of each individual.  The impact of lower-barrier, affordable healthcare leads to a significant proportion of the global population having greater capacity for higher-level thinking about solutions for global challenges.
                </p>
              </div>
              <div aria-label="Returns">
                <p>
                  Healthcare represents annually about 17.9% of the United States GDP. It is easy to see that, within the last decade, this year-over-year rate has grown by roughly 3% per annum compounded. With an industry that is only going to grow larger year after year, it is likely that there are many components and specific sectors that are ripe for disruption.  Discerning which sectors are ripe for disruption is key to picking some of the investments that, in the past few years, have risen approximately 591% with a median exit value of $39.6MM.
                </p>
              </div>
              <div aria-label="Examples">
                <p>
                  25 Again, 23andme, Calico, Oura, Life Extension Project, Davinci Robot, Doc.ai, Innovation Labs, Dave Asprey, Wim Hoff, Flow Genome Project, Nootropics, Free Solo, Verily, Headspace
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
              src={civilization}
              alt="Civilization icon"
            />
          </SectionIcon>
          <h2 css={Underline}>Sustainable Civilization</h2>
          <p>
            We’re looking for corporations that strive to develop technology that will create the opportunity for us to live in balance with our ecosystem and repair the previous damage. This broad category carries with it many subcategories of focus, particularly Renewable Energy, Sustainable Development and Climate Rehabilitation.
          </p>
        </Column>
      </Row>
      <Row>
        <Column>
          <Tabs>
            <div aria-label="Inclusion">
              <p>
                This has been included as a specific focus because of the long term benefits and return on investment that is nearly incalculable.  As of now, one of the most significant ongoing discussions centers on our proletic disruption of the planet's natural resources, some of them being depleted beyond recognition or repair.  Our focus is to find, invest, and support the technologies that root out ways of replenishing our ecosystem.
              </p>
            </div>
            <div aria-label="Impact">
              <p>
                If we look at the definition of consciousness as a state of being aware of one’s surroundings, taking an extreme interest in one's surroundings, and focusing on the state of them, then seeking solutions to environmental problems is in itself a key part of raising consciousness.
              </p>
            </div>
            <div aria-label="Returns">
              <p>
                This has a two-front economic return, accomplished from three interrelated categories: fair distribution, sustainable scale and efficient allocation.  These interrelated categories work to improve the quality of life and to raise social capital.  With this, there are carbon pricing scale models that influence carbon savings programs.  There are two fronts that this impacts. Firstly, there are reduced costs and savings for companies and, secondly, is the production of new and formerly unfound revenue streams, such as purchasing offsets for the amount of carbon or Co2 emissions. Within the subsect of cleantech we have seen that there is an average exit value growth of roughly 491% and a median exit value of $37.6MM.
              </p>
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
              Fintech has been previously defined as any computer program or technology used to support, enable or disrupt the banking and financial services industries. Financial technology can also include the less connected subsector of protecting and securing financially relevant data.  A particular subcategory of focus for the fund, is both Blockchain and Digital Assets.
            </p>
          </Column>
        </Row>
        <Row>
          <Column>
            <Tabs>
              <div aria-label="Inclusion">
                <p>
                  The fund is looking to capitalize on one sector and industry that has truly stood the test of time, and that is value exchange and value storage.  Fintech is quite simply the newest slice of an everlasting loaf of bread.  It seemingly touches every citizen of earth, as almost all engage in some form of value exchange on a daily or multiple daily basis.  There are many that are currently unbanked or outside of the traditional financial system as they are in areas that remain exempt from being included.  Our reasoning for inclusion is that many fintech companies are creating solutions to solve this. They work both within and outside of traditional financial services, creating and supporting an inclusive web that seeks to push all economies into an open and shared global online financial economy.
                </p>
              </div>
              <div aria-label="Impact">
                <p>
                  The fund seeks out companies working within the fintech sector that are taking steps to ensure the financial well-being of all.  They give individuals the opportunity to make better, more impactful decisions, and are reshaping the global spending and saving habits, potentially lowering consumer debts and giving rise to more freedoms and abilities by taking care of one of the most integral steps within “Maslow's hierarchy of needs”.
                </p>
              </div>
              <div aria-label="Returns">
                <p>
                  The rise in financial technologies has seen an industry growth of 6.8% over the past five years. With the growth of mobile application users, Mobile First banking has exploded and consumers in the millennial age range are 25% more likely to use one of these providers. We’ve also seen business models completely disrupted by offering $0 fees for trading and banking services, as well as things like robo traders for financial management. Digital currencies have opened up a new wave for public offerings and crowdfunding has seen explosive growth. Many of these companies have grown to billion dollar valuations within the past five years, however the average exit value stands at approximately 580% with the median exit value being $32.2MM.
                </p>
              </div>
              <div aria-label="Examples">
                <p>
                  Robinhood, Simple, Circle, Mint, Wealthsimple, Stripe, Square, Plaid, Coinbase, Blockstream,
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
    </Wrapper>
  </>
)
