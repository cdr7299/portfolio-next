import {
  ChevronLeft,
  ChevronRight,
  Lock,
  Plus,
  RefreshCcw,
} from "lucide-react";

import styles from "./styles.module.css";

function CodeBody() {
  return (
    <div className={styles.codeBody}>
      <div className={styles.codeBodySections}>a</div>
      <div className={styles.codeBodySections}>b</div>
      <div className={styles.codeBodySections}>c</div>
    </div>
  );
}

export default CodeBody;
