import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Instagram</title>
        <meta name="description" content="Clone instagram.com" />
        <link rel="icon" href="/logo_full.png" />
      </Head>
    </div>
  );
}
