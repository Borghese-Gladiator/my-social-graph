import React from 'react';
// styling
import styles from './Sidebar.module.css';
// icons
import { AiFillHome, AiFillEdit, AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai';
import { GrView } from 'react-icons/gr';

function Sidebar({ width, height, children }) {
  const [xPosition, setX] = React.useState(-width);

  const toggleMenu = () => {
    if (xPosition < 0) {
      setX(0);
    } else {
      setX(-width);
    }
  };

  React.useEffect(() => {
    setX(0);
  }, []);

  return (
    <React.Fragment>
      <div
        className={styles.sidebar}
        style={{
          transform: `translate(${xPosition}px, 0)`,
          width: width,
          minHeight: height
        }}
      >
        <button
          onClick={() => toggleMenu()}
          className={styles.btn_toggle_menu}
          style={{
            transform: `translate(${width}px, 20vh)`
          }}
        >
        </button>
        <div className={styles.header}>
          <h1>Social Graph</h1>
        </div><hr className={styles.horizontal_line} />

        <div className={styles.body}>
          {children}
        </div><hr className={styles.horizontal_line} />

        <div className={styles.footer}>
          <button>Upload</button>
          <button>Download</button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Sidebar;
/*

          {
            (xPosition === 0)
              ? <AiOutlineMenuFold />
              : <AiOutlineMenuUnfold />
          }
*/