import Masonry from "react-masonry-css";
import styles from "./Masonry.module.css";

export default function MyMasonry({ children, imgArray }) {
  const breakpointColumnsObj = {
    default: 4,
    1000: 3,
    700: 2,
    500: 1,
  };
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className={styles.myMasonryGrid}
      columnClassName={styles.myMasonryGridColumn}
    >
      {children}
    </Masonry>
  );
}
