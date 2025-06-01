import React from "react";
import styles from "../styles/page/discover_page.module.less";
import SwampStyle from "../components/SwampStyle.tsx";


const currentPage = 5;
const totalPages = 7;


const DiscoverPage: React.FC = () => {
  return (

      <SwampStyle currentPage={currentPage} totalPages={totalPages}>
          <main className={styles.main}>
            <div className={styles.notesListWrapper}>
              <div className={styles.notesListHeader}>
                <div>Note</div>
                <div>Posted</div>
              </div>
              <div className={styles.notesList}>

              </div>
            </div>
          </main>
      </SwampStyle>
  );
};

export default DiscoverPage;
