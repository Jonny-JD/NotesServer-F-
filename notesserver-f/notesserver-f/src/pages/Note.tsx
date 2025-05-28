import React from "react";
import cn from "classnames";
import styles from "../styles/note_page.module.less";

const NotePage: React.FC = () => {
  return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <header className={styles.header}>
            <div className={styles.pageCounter}>
              <span>4/5</span>
              <span className={styles.pagePage}>PAGE</span>
            </div>
            <div className={styles.headerLeft}>
              <div className={styles.logoContainer}>
                <img className={styles.logo} src="/img/swamp/logo.svg" alt="Logo" />
                <div className={styles.logoTextWrapper}>
                  <img className={styles.logoText} src="/img/swamp/logo_text.svg" alt="Logo Text" />
                  <img className={styles.officersText} src="/img/swamp/officers_text.svg" alt="Officers Text" />
                </div>
                <div className={cn(styles.buttonWrapper, styles.discover)}>
                  <input
                      type="image"
                      className={cn(styles.headerButton, "c-button")}
                      src="/img/swamp/your_notes_button.svg"
                      alt="Your Notes"
                  />
                </div>
                <div className={cn(styles.buttonWrapper, styles.discover)}>
                  <input
                      type="image"
                      className={cn(styles.headerButton, "c-button")}
                      src="/img/swamp/discover_button.svg"
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
                        src="/img/swamp/logout_button.svg"
                        alt="Logout"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.redBar}>
                <img className={styles.bar} src="/img/swamp/header_bar.svg" alt="Header Bar" />
              </div>
            </div>
            <div className={styles.redLine}>
              <img className={styles.line} src="/img/swamp/top_line.svg" alt="Top Line" />
            </div>
          </header>

          <aside className={styles.sidebar}>
            <div className={styles.sidebarHeader}>FRESH NOTES</div>
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
            <div className={styles.buttonWrapper}>
              <img className={cn(styles.searchButton, "c-button")} src="/img/swamp/search_button.svg" alt="Search Button" />
            </div>
          </aside>

          <main className={styles.main}>
            <div className={styles.newNoteFormWrapper}>
              <div className={styles.noteForm}>
                <div className={styles.formField}>
                  <span>Title:</span>
                  <span className={styles.formText}>some title</span>
                </div>
                <div className={styles.formField}>
                  <span className={styles.tagHeader}>Tag:</span>
                  <span className={styles.formText}>some tag</span>
                </div>
                <div className={cn(styles.formField, styles.noteTextWrapper)}>
                  <div className={styles.noteArea}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit...
                  </div>
                </div>
                {/* Закомментированные кнопки */}
              </div>
            </div>
          </main>

          <footer className={styles.footer}>
            <div className={styles.footerLine}>
              <img className={styles.redLine} src="/img/swamp/footer_line.svg" alt="Footer Line" />
            </div>
          </footer>
        </div>
      </div>
  );
};

export default NotePage;
