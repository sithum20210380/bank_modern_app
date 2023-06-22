import styles from "./style";
import videoBackground from './assets/landing_video.mp4';
import { Billing, Business, CardDeal, Clients, CTA, Footer, Stats, Testimonials, Hero } from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <video className="video-background" autoPlay loop muted>
      <source src={videoBackground} type="video/mp4" />
    </video>

    {/* <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div> */}

    <div className="overlay"></div>

    <div className={`navbar-wrapper ${styles.paddingX} ${styles.flexCenter}` } >
    <div className={`${styles.boxWidth}`}>
      <Navbar />
      </div>
    </div>

    <div className={`navbar-wrapper ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`navbar-wrapper ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;