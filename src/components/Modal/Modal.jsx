import React from "react";
import styles from "./Modal.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCardExpanded from "../ProjectCardExpanded";

const Modal = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transiton: 0.3 }}
            exit={{ opacity: 0, transiton: { delay: 0.3 } }}
            className={styles.modalBackdrop}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1, transiton: 0.3 }}
              exit={{ scale: 0, transiton: { delay: 0.3 } }}
              className={styles.modalContentWrapper}
            >
              <motion.div
                initial={{ x: 300, opacity: 0 }}
                animate={{
                  x: 0,
                  opacity: 1,
                  transition: { delay: 0.3, duration: 0.3 },
                }}
                exit={{
                  x: 100,
                  opacity: 0,
                  transition: {
                    duration: 0.3,
                  },
                }}
                className={styles.modalContent}
              >
                <button onClick={() => setOpen(false)}>X</button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Modal;
