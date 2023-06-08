import { motion } from "framer-motion";



function EqualizerBar({isPlaying}) {
  const barVariants = {
    initial: { height: "2px" },
    animate: { height: isPlaying?  ["2px", "33px", "2px"] : ["2px"] },
    transition: { duration: 0.5, repeat: Infinity },
  };

  return (
    <motion.div
      style={{
        width: "10px",
        height: "2px",
        background: "#333",
       
        position: "absolute",
        bottom: '0'
      }}
      variants={barVariants}
      initial="initial"
      animate="animate"
      transition={barVariants.transition}
    />
  );
}

export default EqualizerBar;
