import styles from "./styles.module.scss";

interface SubScribeButtonProps {
  priceId: string;
}

export function SubscribeButton({ priceId }: SubScribeButtonProps) {
  return (
    <button type="button" className={styles.subscribeButton}>
      Subscribe now
    </button>
  );
}
