import React from "react";
import cn from "classnames";
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
                <div className={styles.noteWrapper}>
                  <div className={styles.note}>
                    <div className={cn(styles.noteItem, styles.header)}>
                      <span className={styles.noteHeader}>I need more ennies MutherFuckers!</span>
                    </div>
                    <div className={cn(styles.noteItem, styles.tag)}>
                      <span className={styles.noteTagHeader}>Tag:</span>
                      <span className={styles.noteTag}>Ennie problems</span>
                    </div>
                    <div className={cn(styles.noteItem, styles.author)}>
                      <span className={styles.noteAuthorHeader}>Author:</span>
                      <span className={styles.noteAuthor}>FreshDog@cbr.com</span>
                    </div>
                  </div>
                  <div className={styles.posted}>
                    <span className={styles.postedDate}>07.12.2027</span>
                    <span className={styles.postedTime}>10:37</span>
                  </div>
                </div>
              </div>
            </div>
          </main>
      </SwampStyle>
  );
};

export default DiscoverPage;
