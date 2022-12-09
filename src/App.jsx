import React from 'react';
import styles from './style';

import { NavBar, HeroSection, Stats, Business, Billing, CardDeal, Testimonials, Client, CTA, Footer} from "./components";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">

      {/* Navbar */}

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <NavBar />
        </div>
      </div>

      {/* Hero section */}

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <HeroSection />
        </div>
      </div>


      {/* Stats, Business, Billing, CardDeal, Testimonials, Client, CTA, Footer */}

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
            <Stats />
            <Business />
            <Billing />
            <CardDeal />
            <Testimonials />
            <Client />
            <CTA />
            <Footer />
        </div>
      </div>

    </div>
  )
}

export default App;