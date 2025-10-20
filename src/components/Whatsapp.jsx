/** @format */

import whatsappIcon from "../assets/images/WhatsApp.webp";

const Whatsapp = () => {
  return (
    <div className="whatsapp-widget">
      <span className="whatsapp-text">
        Need Help?{" "}
        <a
          href="https://wa.me/94742699814?text=Hello%2C%20how%20can%20I%20get%20more%20info%3F"
          target="_blank"
          rel="noopener noreferrer"
        >
          Connect with us
        </a>
      </span>
      <a
        href="https://wa.me/94719551405?text=Hello%2C%20how%20can%20I%20help%20you%3F"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={whatsappIcon} className="whatsapp-icon" alt="WhatsApp" />
      </a>
    </div>
  );
};

export default Whatsapp;
