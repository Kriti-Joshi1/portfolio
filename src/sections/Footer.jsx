import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <a
              key={index}
              href={
                socialImg.name === "github"
                  ? "https://github.com/Kriti-Joshi1"
                  : socialImg.name === "linkedin"
                    ? "https://linkedin.com/in/kriti-joshi-69b476258"
                    : "#"
              }
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <img 
                src={socialImg.imgPath} 
                alt={socialImg.name} 
className="w-5 h-5 md:w-6 md:h-6"
              />

            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Kriti Joshi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
