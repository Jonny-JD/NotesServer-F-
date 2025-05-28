import React from "react";
import cn from "classnames";
import styles from "../styles/create_page.module.less";
import logo from "@/assets/img/swamp/logo.svg";
import logoText from "@/assets/img/swamp/logo_text.svg";
import officersText from "@/assets/img/swamp/officers_text.svg";
import yourNotesButton from "@/assets/img/swamp/your_notes_button.svg";
import discoverButton from "@/assets/img/swamp/discover_button.svg";
import logoutButton from "@/assets/img/swamp/logout_button.svg";
import headerBar from "@/assets/img/swamp/header_bar.svg";
import topLine from "@/assets/img/swamp/top_line.svg";
import searchButton from "@/assets/img/swamp/search_button.svg";
import createNoteButton from "@/assets/img/swamp/create_note_button.svg";
import privateButton from "@/assets/img/swamp/private_button.svg";
import footerLine from "@/assets/img/swamp/footer_line.svg";

const NoteCreatePage: React.FC = () => {
  return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <header className={styles.header}>
            <div className={styles.pageCounter}>
              <span>3/5</span>
              <span className={styles.pagePage}>PAGE</span>
            </div>
            <div className={styles.headerLeft}>
              <div className={styles.logoContainer}>
                <img className={styles.logo} src={logo} alt="Logo" />
                <div className={styles.logoTextWrapper}>
                  <img className={styles.logoText} src={logoText} alt="Logo Text" />
                  <img className={styles.officersText} src={officersText} alt="Officers Text" />
                </div>
                <div className={cn(styles.buttonWrapper, styles.discover)}>
                  <input
                      type="image"
                      className={cn(styles["header-button"], "c-button")}
                      src={yourNotesButton}
                      alt="Your Notes"
                  />
                </div>
                <div className={cn(styles.buttonWrapper, styles.discover)}>
                  <input
                      type="image"
                      className={cn(styles["header-button"], "c-button")}
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
                        className={cn(styles["header-button"], "c-button")}
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
              <img className={cn(styles["search-button"], "c-button")} src={searchButton} alt="Search" />
            </div>
          </aside>

          <main className={styles.main}>
            <div className={styles.newNoteFormWrapper}>
              <form className={styles.noteForm} method="get" action="">
                <div className={styles.formField}>
                  <label htmlFor="note-title">Title:</label>
                  <input type="text" name="note-title" id="note-title" required />
                </div>
                <div className={styles.formField}>
                  <label htmlFor="note-tag">Tag:</label>
                  <input type="text" name="note-tag" id="note-tag" required />
                </div>
                <div className={cn(styles.formField, styles.noteTextWrapper)}>
                  <label htmlFor="note-text">Text:</label>
                  <textarea name="note-text" id="note-text" rows={10} cols={10} />
                </div>
                <div className={styles.formButtonsWrapper}>
                  <div className={styles.buttonWrapper}>
                    <img src={createNoteButton} alt="Create Note" />
                  </div>
                  <div className={styles.buttonWrapper}>
                    <img src={privateButton} alt="Private Note" />
                  </div>
                </div>
              </form>
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

export default NoteCreatePage;
