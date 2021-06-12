import React from "react";
import styles from "./Contact.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Contact = () => {
  return (
    <>
      <section className={styles.contact}>
        <h3 className={styles.contact__heading}>Interested?</h3>
        <h4 className={styles.contact__subHeading}>
          Lets get this party started
        </h4>
        <div className={styles.contact__container}>
          <div className={styles.contact__flex}>
            <a target="_blank" href="https://www.linkedin.com/in/ed-hughes-190">
              <FontAwesomeIcon
                icon={faLinkedin}
                className={styles.contact__icon}
              ></FontAwesomeIcon>
            </a>
            <FontAwesomeIcon
              icon={faEnvelope}
              className={styles.contact__icon}
            ></FontAwesomeIcon>
            <a target="_blank" href="https://github.com/EHughes190">
              <FontAwesomeIcon
                icon={faGithub}
                className={styles.contact__icon}
              ></FontAwesomeIcon>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
