import { motion } from "framer-motion"
import "./Sidebar.css"


function Sidebar() {

  return (

    <motion.div
      className="sidebar"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3 }}
    >
      <div className="sidebar-spacer"></div>
      <div className="sidebar-item">Me</div>
      <div className="sidebar-item">Education</div>
      <div className="sidebar-item">Skills</div>
      <div className="sidebar-item">Projects</div>
      <div className="sidebar-item">Beyond Code</div>
      <div className="sidebar-item">Contact</div>
    </motion.div>
  );
}

export default Sidebar
