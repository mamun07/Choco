import Link from "next/link";
import styles from "../styled/productsection.module.css";

const SectionTitle = (props) => {
  return (
    <div className={styles.section_title}>
      <h2>{props.title}</h2>
      <Link href={props.link}>
        <a className={styles.show_more}>
          {props.seemore}
          <i class="las la-arrow-right"></i>
        </a>
      </Link>
    </div>
  );
};

export default SectionTitle;
