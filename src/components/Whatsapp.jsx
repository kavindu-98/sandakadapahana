/** @format */

import whatsappIcon from "../assets/images/WhatsApp.webp";

const Whatsapp = () => {
  return (
    <div className="whatsapp-widget">
      <span className="whatsapp-text">
        Need Help?{" "}
        <a
          href="https://wa.me/94771216123?text=Hello%2C%20Can%20I%20know%20more%20details%20about%20Sandakadapahana%20Concert%3F"
          target="_blank"
          rel="noopener noreferrer"
        >
          Connect with us
        </a>
      </span>
      <a
        href="https://wa.me/94771216123?text=Hello%2C%20Can%20I%20know%20more%20details%20about%20Sandakadapahana%20Concert%3F"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={whatsappIcon} className="whatsapp-icon" alt="WhatsApp" />
      </a>
    </div>
  );
};

export default Whatsapp;
