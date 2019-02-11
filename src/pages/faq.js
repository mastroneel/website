import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

const Faq = props => (
  <Layout>
    <Helmet>
      <title>FAQ - CTR Capital</title>
      <meta
        name="description"
        content="Landing Page"
      />
    </Helmet>

    <BannerLanding name="FAQ" />

    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>Sed amet aliquam</h2>
          </header>
          <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna.</p>
        </div>
      </section>
      <section
        id="two"
        className="spotlights"
      >
        <div className="inner">
          <ul className="alt">
            <li>
              <header className="major">
                <h3>How do you make decisions?</h3>
              </header>
              <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
            </li>
            <li><header className="major">
              <h3>How does timing work?</h3>
            </header>
            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p></li>
            <li><header className="major">
              <h3>What else?</h3>
            </header>
            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p></li>
          </ul>
        </div>
      </section>
    </div>

  </Layout>
)

export default Faq
