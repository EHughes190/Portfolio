import React, { useState } from "react";
import styles from "./Contact.module.scss";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

//Props are passed from Routes
const Contact = (props) => {
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
      <FaEnvelope className={styles.contact__icon} />
    </motion.div>
  );

  return (
    <>
      <motion.section
        className={styles.contact}
        initial="hidden"
        animate="enter"
        variants={props.variants}
        // Smooth entrance
        transition={{ type: "linear" }}
      >
        <h3 className={styles.contact__heading}>Interested?</h3>
        <h4 className={styles.contact__subHeading}>
          Let's get this party started
        </h4>
        <div className={styles.contact__container}>
          <div className={styles.contact__flex}>
            <motion.a
              whileHover={{ scale: 1.1 }}
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/ed-hughes-190"
            >
              <FaLinkedin className={styles.contact__icon} />
            </motion.a>
            {emailIcon}
            <motion.a
              whileHover={{ scale: 1.1 }}
              target="_blank"
              rel="noreferrer"
              href="https://github.com/EHughes190"
            >
              <FaGithub className={styles.contact__icon} />
            </motion.a>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Contact;
