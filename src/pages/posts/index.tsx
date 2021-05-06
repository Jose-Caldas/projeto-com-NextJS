import Head from "next/head";
import styles from "./styles.module.scss";

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | jrnews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>06 de maio 2021</time>
            <strong>
              These tokens allow your application to permanently access this
              repository
            </strong>
            <p>
              We provide native SDK for your favourite technology. Those SDK
              handle caching, preview, A/B testing etc.
            </p>
          </a>
          <a href="#">
            <time>06 de maio 2021</time>
            <strong>
              These tokens allow your application to permanently access this
              repository
            </strong>
            <p>
              We provide native SDK for your favourite technology. Those SDK
              handle caching, preview, A/B testing etc.
            </p>
          </a>
          <a href="#">
            <time>06 de maio 2021</time>
            <strong>
              These tokens allow your application to permanently access this
              repository
            </strong>
            <p>
              We provide native SDK for your favourite technology. Those SDK
              handle caching, preview, A/B testing etc.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
