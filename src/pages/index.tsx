import { GetStaticProps } from "next";

import Head from "next/head";
import { SubscribeButton } from "../components/SubscribeButton";

import styles from "./home.module.scss";

import { stripe } from "../services/stripe";

// 3 formas de pedir informações da api
//client-side-rendering
// server-side-rendering
// static-site-generation

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  };
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏Hey, welcome</span>
          <h1>
            News about the <span>React </span>world.
            <p>
              Get acess to all the publications
              <br />
              <span>for {product.amount} month</span>
            </p>
          </h1>
          <SubscribeButton priceId={product.priceId} />
        </section>
        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve("price_1Iku82BErWCTbCG5VhpclatG");

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price.unit_amount / 100),
  };

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, // 24 horas
  };
};
