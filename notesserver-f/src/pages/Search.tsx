import React from "react";
import styles from "../styles/search_page.module.less";
import logo from "@/assets/img/swamp/logo.svg";
import logoText from "@/assets/img/swamp/logo_text.svg";
import officersText from "@/assets/img/swamp/officers_text.svg";
import yourNotesButton from "@/assets/img/swamp/your_notes_button.svg";
import discoverButton from "@/assets/img/swamp/discover_button.svg";
import logoutButton from "@/assets/img/swamp/logout_button.svg";
import headerBar from "@/assets/img/swamp/header_bar.svg";
import topLine from "@/assets/img/swamp/top_line.svg";
import searchButton from "@/assets/img/swamp/search_button.svg";
import footerLine from "@/assets/img/swamp/footer_line.svg";

const SearchPage: React.FC = () => {
  return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <header className={styles.header}>
            <div className={styles.pageCounter}>
              <span>5/5</span>
              <span className={styles.pagePage}>PAGE</span>
            </div>
            <div className={styles.headerLeft}>
              <div className={styles.logoContainer}>
                <img className={styles.logo} src={logo} alt="Logo" />
                <div className={styles.logoTextWrapper}>
                  <img className={styles.logoText} src={logoText} alt="Logo Text" />
                  <img className={styles.officersText} src={officersText} alt="Officers Text" />
                </div>
                <div className={`${styles.buttonWrapper} ${styles.discover}`}>
                  <input
                      type="image"
                      className={`${styles.headerButton} ${styles.cButton}`}
                      src={yourNotesButton}
                      alt="Your Notes"
                  />
                </div>
                <div className={`${styles.buttonWrapper} ${styles.discover}`}>
                  <input
                      type="image"
                      className={`${styles.headerButton} ${styles.cButton}`}
                      src={discoverButton}
                      alt="Discover"
                  />
                </div>
              </div>
            </div>
            <div className={styles.headerRight}>
              <div className={styles.menuContainer}>
                <div className={styles.menuButtons}>
                  <div className={styles.buttonWrapper}>
                    <input
                        type="image"
                        className={`${styles.headerButton} ${styles.cButton}`}
                        src={logoutButton}
                        alt="Logout"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.redBar}>
                <img className={styles.bar} src={headerBar} alt="Header Bar" />
              </div>
            </div>
            <div className={styles.redLine}>
              <img className={styles.line} src={topLine} alt="Top Line" />
            </div>
          </header>

          <aside className={styles.sidebar}>
            <div className={styles.sidebarHeader}>FRESH NOTES</div>
            <div className={styles.note}>
              <div className={`${styles.noteItem} ${styles.header}`}>
                <span className={styles.noteHeader}>I need more ennies MutherFuckers!</span>
              </div>
              <div className={`${styles.noteItem} ${styles.tag}`}>
                <span className={styles.noteTagHeader}>Tag:</span>
                <span className={styles.noteTag}>Ennie problems</span>
              </div>
              <div className={`${styles.noteItem} ${styles.author}`}>
                <span className={styles.noteAuthorHeader}>Author:</span>
                <span className={styles.noteAuthor}>FreshDog@cbr.com</span>
              </div>
            </div>
            <div className={styles.buttonWrapper}>
              <img className={`${styles.searchButton} ${styles.cButton}`} src={searchButton} alt="Search" />
            </div>
          </aside>

          <main className={styles.main}>
            <div className={styles.searchBlockWrapper}>
              <div className={styles.searchFieldWrapper}>
                <div className={styles.searchChoice}>
                  <span className={styles.searchHeader}>Search by:</span>
                  <span className={styles.byTitle}>Title</span>
                  <span className={styles.byTag}>Tag</span>
                </div>
                <div className={styles.searchInputWrapper}>
                  <input type="search" />
                </div>
              </div>
            </div>
            <div className={styles.buttonWrapper}>
              <img className={`${styles.searchButton} ${styles.cButton}`} src={searchButton} alt="Search Button" />
            </div>
          </main>

          <footer className={styles.footer}>
            <div className={styles.footerLine}>
              <img className={styles.redLine} src={footerLine} alt="Footer Line" />
            </div>
          </footer>
        </div>
      </div>
  );
};

export default SearchPage;
