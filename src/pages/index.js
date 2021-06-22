import Head from 'next/head';
import styles from './styles.module.scss';

export default function Home({ dataSet }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>NextJS Tool Kit</title>
        <meta name="description" content="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.content}></div>
    </div>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      dataSet: data['hello']
    }
  };
}
