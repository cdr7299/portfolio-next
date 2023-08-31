import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";

const normalShadow = "0px 10px 30px -5px rgba(0, 0, 0, 0.3)";
const liftShadow = "0px 30px 30px -5px rgba(0, 0, 0, 0.3)";

function BrowserBodyProjects({
  projectTitle,
  accentColor,
}: {
  projectTitle: string;
  accentColor: string;
}) {
  return (
    <motion.div>
      <Balancer>{projectTitle}</Balancer>
    </motion.div>
  );
}

export default BrowserBodyProjects;
