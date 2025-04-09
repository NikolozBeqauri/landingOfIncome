import styles from "./page.module.scss";
import Navigation from "./components/Navigation/Navigation";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import Services from "./components/Services/Services";
import Offer from "./components/Offer/Offer";
import DownloadSection from "./components/DownloadSection/DownloadSection";
import Questions from "./components/Questions/Questions";
import BankSlider from "./components/BankSlider/BankSlider";
import Comments from "./components/Comments/Comments";
import Advice from "./components/Advice/Advice";
import FooterComponent from "./components/FooterComponent/FooterComponent";
import ContactSection from "./components/ContactSection/ContactSection";

export default function Home() {
  return (
    <>
      <main className={styles.mainWrapper}>
        <Navigation />
        <HeroBanner />
        <BankSlider />
        <Services />
        <Offer />
        <DownloadSection />
        <Comments />
        <Questions />
        <ContactSection />
        <Advice />
      </main>
      <FooterComponent />
    </>
  );
}
