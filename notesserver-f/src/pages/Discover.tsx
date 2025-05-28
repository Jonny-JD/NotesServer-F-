import React from "react";
import cn from "classnames";
import styles from "../styles/discover_page.module.less";
import logo from "@/assets/img/swamp/logo.svg";
import logo_text from "@/assets/img/swamp/logo_text.svg"
import officers_text from "@/assets/img/swamp/officers_text.svg"
import your_notes_button from "@/assets/img/swamp/your_notes_button.svg"
import discover_button from "@/assets/img/swamp/discover_button.svg"
import logout_button from "@/assets/img/swamp/logout_button.svg"
import header_bar from "@/assets/img/swamp/header_bar.svg"
import top_line from "@/assets/img/swamp/top_line.svg"
import search_button from "@/assets/img/swamp/search_button.svg"
import footer_line from "@/assets/img/swamp/footer_line.svg"



const DiscoverPage: React.FC = () => {
  return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <header className={styles.header}>
            <div className={styles.pageCounter}>
              <span>2/5</span>
              <span className={styles.pagePage}>PAGE</span>
            </div>
            <div className={styles.headerLeft}>
              <div className={styles.logoContainer}>
                <img className={styles.logo} src={logo} alt="Logo" />
                <div className={styles.logoTextWrapper}>
                  <img className={styles.logoText} src={logo_text} alt="Logo Text" />
                  <img className={styles.officersText} src={officers_text} alt="Officers Text" />
                </div>
                <div className={cn(styles.buttonWrapper, styles.discover)}>
                  <input
                      type="image"
                      className={cn(styles.headerButton, "c-button")}
                      src={your_notes_button}
                      alt="Your Notes"
                  />
                </div>
                <div className={cn(styles.buttonWrapper, styles.discover)}>
                  <input
                      type="image"
                      className={cn(styles.headerButton, "c-button")}
                      src={discover_button}
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
                        className={cn(styles.headerButton, "c-button")}
                        src={logout_button}
                        alt="Logout"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.redBar}>
                <img className={styles.bar} src={header_bar} alt="Header Bar" />
              </div>
            </div>
            <div className={styles.redLine}>
              <img className={styles.line} src={top_line} alt="Top Line" />
            </div>
          </header>

          <aside className={styles.sidebar} id="sidebarDiscover">
            <div className={styles.sidebarHeader}>FRESH NOTES</div>
            <div className={styles.sidebarNotelistWrapper} id="sidebarNotelistWrapper">
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
            </div>
            <div className={styles.buttonWrapper}>
              <input
                  type="image"
                  className={cn(styles.searchButton, "c-button")}
                  id="sidebarSearchBtn"
                  src={search_button}
                  alt="Search Button"
              />
            </div>
          </aside>

          <main className={styles.main}>
            <div className={styles.notesListWrapper}>
              <div className={styles.notesListHeader}>
                <div>Newest notes</div>
                <div>Posted</div>
                <div className={styles.tagHeader}>Tag</div>
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
                  <div className={styles.tag}>
                    <span className={styles.postedTag}>Enni problems</span>
                  </div>
                </div>
              </div>
            </div>
          </main>

          <footer className={styles.footer}>
            <div className={styles.footerLine}>
              <img className={styles.redLine} src={footer_line} alt="Footer Line" />
            </div>
          </footer>
        </div>
      </div>
  );
};

export default DiscoverPage;
