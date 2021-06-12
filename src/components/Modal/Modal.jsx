import React, { useState } from "react";
import styles from "./Modal.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";

const Modal = (props) => {
  const { isOpen, setActive } = props;
  //const [open, setOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transiton: 0.2 }}
            exit={{ opacity: 0, transiton: { delay: 0.3 } }}
            className={styles.modalBackdrop}
            onClick={setActive}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1, transiton: 0.2 }}
              exit={{ scale: 0, transiton: { delay: 0.3 } }}
              className={styles.modalContentWrapper}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { delay: 0.3, duration: 0.3 },
                }}
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 0.3,
                  },
                }}
                className={styles.modalContent}
              >
                <div className={styles.menu}>
                  <ul className={styles.links}>
                    <NavLink
                      exact
                      to="projects"
                      key="nav:projects"
                      onClick={setActive}
                    >
                      <li className={styles.link__item}>PROJECTS</li>
                    </NavLink>

                    <NavLink
                      exact
                      to="about"
                      key="nav:about"
                      onClick={setActive}
                    >
                      <li className={styles.link__item}>ABOUT</li>
                    </NavLink>

                    <NavLink
                      exact
                      to="contact"
                      key="nav:contact"
                      onClick={setActive}
                    >
                      <li className={styles.link__item}>CONTACT</li>
                    </NavLink>
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Modal;
