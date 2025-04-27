import styles from "./page.module.scss";
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
import NavigationsWrapper from "./components/NavigationsWrapper/NavigationsWrapper";

export default function Home() {
  console.log('rerender');

  return (
    <>
      <main className={styles.mainWrapper}>
        <NavigationsWrapper />
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
