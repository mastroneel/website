import React from 'react'
import { graphql } from 'gatsby'
import styled, { css } from 'styled-components'
import { linearGradient } from 'polished'

import Seo from '../components/seo'
import { Wrapper, Container, Row, Column } from '../components/ui/Grid'
import PageIntro from '../components/PageIntro'
import Article from '../components/ui/Article'
import { Underline } from '../components/ui/Heading'
import theme, { devices } from '../theme'

import about from '../images/about.svg'
import rectangle from '../images/rect-ill.svg'

const Box = css`
  position: relative;
  padding: 2em;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 100%;
    ${ linearGradient({
    colorStops: [theme.color.blue, theme.color.pink],
    toDirection: '0deg',
    fallback: props => props.theme.color.pink,
  }) }
  }

  & > *:first-child {
    margin-top: 0;
    margin-bottom: 0;
  }
`

const UnderlineWhite = css`
  ${ Underline }
  color: #fff;
`

const ColumnSpacing = css`
  padding: 0 2.5em;

  &:first-child {
    border-right: 1px solid ${ theme.color.pink };

    @media (${ devices.tablet }) {
      border-right: 0;
    }
  }
`

const DarkBgIllustration = css`
  background-image: url(${ rectangle });
  background-repeat: no-repeat;
  background-size: 60%;
  background-position: bottom right;
  padding-bottom: 20%;
`

const MarkdownStyle = css`
  h3 {
    ${ Underline }
  }
`

export default ({ data }) => (
  <>
    <Seo title="About Us" />
    <PageIntro
      small="Our History"
      heading="About"
      paragraph="Where we came from, how it started, where we're going and what we're doing."
      image={{
        src: about,
        alt: 'About illustration',
      }}
    />
    <Wrapper bgColor="#f9f6fb">
      <Container>
        <Row>
          <Column align="center">
            <h2 css={Underline}>History</h2>
          </Column>
        </Row>
        <Row>
          <Column>
            <Article css={Box}>
              <h3>In the beginning...</h3>
              <p>
                Gordy and Aaron have been partners for over 12 years, and they like to say that they work in the realm
                of “Everything is Possible”. But, in the beginning, it wasn’t clear that anything at all would be
                possible.
              </p>

              <p>
                During the height of Pay Per Click arbitrage in 2006, Gordy discovered one of Aaron’s websites and
                immediately called Aaron. Aaron hung up. Gordy persisted – even getting the next flight over to
                Vancouver Island to meet Aaron. The next day Aaron flew to Vancouver to meet the team. Ever since then
                the two have been practically inseparable.
              </p>

              <p>
                Over the years they continued to develop companies in the advertising industry, until a fundamental
                question arose: What legacy am I leaving on this world? Over the next years it grew into a mission to
                direct attention to build a company unlike any they had built before, one focused on contributing value,
                rather than extracting it.{' '}
              </p>
            </Article>
          </Column>
        </Row>
      </Container>
    </Wrapper>
    <Wrapper
      bgColor={theme.color.dark}
      css={DarkBgIllustration}
    >
      <Container>
        <Row>
          <Column align="center">
            <h2 css={UnderlineWhite}>The Origins of CTR</h2>
          </Column>
        </Row>
        <Row
          grid={1 / 2}
          css={`
            color: #fff;
          `}
        >
          <Column css={ColumnSpacing}>
            <p>
              Victoria, BC, rarely sees snow, but in the memorable 2006 brutal winter storm, messages were flying back
              and forth between Gordy and Aaron. Aaron had no power for a week and directed the process from landline.
              By the time Victoria returned to its usual benign weather patterns, the deal was closed
            </p>
            <p>
              The end result was that Samsonoff Media merged with The Guide to Content Publishers, and became Qool Media
              a about 1 year later. The team decided to move to Victoria and make Aaron’s office the homebase for the
              growth of the new company. It soon ballooned to 25 local Victoria staff and 20+ outsourced staff in the
              Philippines, where Aaron met his wife and lived for 3 years. The teams built over 1000 niche content sites
              and drove HFT ad traffic to them.
            </p>
            <p>
              During this period many networks were bridged and invites seem to have come out of nowhere, a true
              imposter syndrome came over Gordy, “How am I here rubbing elbows with these people.” but the message
              resonated so strongly and a shared fundamental question had apparently arisen in many others as well.
              After a few years of increasing competition and greater demands, Gordy was ready to move on by 2009/2010.
              Aaron also stepped away in 2011. However, in 2013 their contacts began to suggest strongly that they
              should get back into the HFT ad space. They put together a development team and built out an automated
              platform that tied into major, existing relationships and we again scaled to 8 figures annually as
              AdLumix.
            </p>
          </Column>
          <Column css={ColumnSpacing}>
            <p>
              By 2014, the focus had begun to change. Gordy and Aaron were having ongoing discussions around what we
              were building, its legacy, and how there was no real value for those whose lives they were touching. They
              both started to take the life journey seriously, and began to engage in a lots of self-discovery
              activities, including going deeply into personal growth opportunities such as Landmark,Tony Robbins and
              multiple spiritual modalities.
            </p>
            <p>
              Gordy and Aaron were committed to changing the world and in 2015 launched Conscious Thought Revolution
              (CTR). The overarching theme was: If you want change in the world it starts within.They set out along a
              path to creating businesses and touch points that bring awareness of the mental, emotional, physical and
              spiritual aspects of people’s lives. They wanted to increase awareness of how those influences affect the
              quality of life of each individual and the people surrounding them.
            </p>
            <p>
              Most of 2017 was spent in discussions between the partners on how best to harness and respect each other’s
              superpowers. Gordy was looking for ways to move fast without having 3 partners needed for all decision
              making. Aaron was looking to move out of advertising and into investing with all his focus and Haafiz wfas
              looking to build an empowering technology platform that helps to raise awareness and consciousness.
            </p>
          </Column>
        </Row>
      </Container>
    </Wrapper>
    <Container
      className="content-styled"
      size="md"
    >
      <Row>
        <Column css={MarkdownStyle}>
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        </Column>
      </Row>
    </Container>
  </>
)

export const aboutQuery = graphql`
  {
    markdownRemark(fileAbsolutePath: { regex: "/about_md/" }) {
      html
    }
  }
`
