import React, { useState } from "react";
import styles from "./Contact.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { motion } from "framer-motion";
import Envelope from "../../components/Envelope";

const Contact = () => {
  const [isShowingEmail, setisShowingEmail] = useState(false);

  const setActiveEmail = () => {
    setisShowingEmail(!isShowingEmail);
  };

  const emailIcon = isShowingEmail ? (
    <motion.p
      whileHover={{ scale: 1.1 }}
      onClick={setActiveEmail}
      className={styles.emailText}
    >
      edhughes345@gmail.com
    </motion.p>
  ) : (
    <motion.div whileHover={{ scale: 1.1 }} onClick={setActiveEmail}>
      <FontAwesomeIcon
        icon={faEnvelope}
        className={styles.contact__icon}
      ></FontAwesomeIcon>
    </motion.div>
  );

  return (
    <>
      <section className={styles.contact}>
        <h3 className={styles.contact__heading}>Interested?</h3>
        <h4 className={styles.contact__subHeading}>
          Lets get this party started
        </h4>
        <div className={styles.contact__container}>
          <div className={styles.contact__flex}>
            <motion.a
              whileHover={{ scale: 1.1 }}
              target="_blank"
              href="https://www.linkedin.com/in/ed-hughes-190"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className={styles.contact__icon}
              ></FontAwesomeIcon>
            </motion.a>
            {emailIcon}
            <motion.a
              whileHover={{ scale: 1.1 }}
              target="_blank"
              href="https://github.com/EHughes190"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className={styles.contact__icon}
              ></FontAwesomeIcon>
            </motion.a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
