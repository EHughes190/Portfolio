import React, { useState } from "react";
import styles from "./Envelope.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Envelope = () => {
  const [isShowingEmail, setisShowingEmail] = useState(false);
  return (
    <>
      <p>Envelope works</p>
    </>
  );
};

export default Envelope;
