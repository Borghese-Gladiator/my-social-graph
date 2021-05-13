// Routing w/ Next.js
import Link from 'next/link';
import Sidebar from '../Sidebar';
// styling
import styles from './DefaultLayout.module.css';
// icons
import { AiFillHome, AiFillEdit, AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai';
import { GrView } from 'react-icons/gr';

const DefaultLayout = ({ userList = [], setUserList, children }) => (
  <div className={styles.root_container}>
    <nav className={styles.sidebar}>
      <Sidebar width={300} height={"100vh"}>
        <Link href="/">
          <a className={styles.vertical_align_text}><AiFillHome style={{ fontSize: '30' }} />Home</a>
        </Link>
        <Link href="/edit">
          <a className={styles.vertical_align_text}><AiFillEdit style={{ fontSize: '30' }} />Edit Graph</a>
        </Link>
        <Link href="/view">
          <a className={styles.vertical_align_text}><GrView style={{ fontSize: '30' }} />View Graph</a>
        </Link>
      </Sidebar>
    </nav>
    <div style={{ flexGrow: 1 }}>
      {children}
    </div>
  </div>
);

export const getLayout = page => <DefaultLayout>{page}</DefaultLayout>;

export default DefaultLayout;