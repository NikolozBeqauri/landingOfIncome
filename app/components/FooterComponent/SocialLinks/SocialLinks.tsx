import styles from './SocialLinks.module.scss';
import Image from 'next/image';

const SocialLinks = () => {
    const socialMedia = [
      { name: "Facebook", url: "https://facebook.com", img: "/facebook.svg" },
      { name: "Twitter", url: "https://twitter.com", img: "/twitter.svg" },
      { name: "Instagram", url: "https://instagram.com", img: "/instagram.svg" },
      { name: "LinkedIn", url: "https://linkedin.com", img: "/linkedin.svg" },
      { name: "YouTube", url: "https://youtube.com", img: "/youtube.svg" },
    ];
  
    return (
      <nav className={styles.linksWrapper} aria-label="Social media links">
        <ul className={styles.links}>
          {socialMedia.map((social) => (
            <li key={social.name}>
              <a
                href={social.url}
                aria-label={social.name}
                target="_blank"
                title={`Visit our ${social.name} page`}
              >
                <Image
                  src={social.img}
                  alt={`${social.name} icon`}
                  width={24}
                  height={24}
                />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  };
  
  export default SocialLinks;
  