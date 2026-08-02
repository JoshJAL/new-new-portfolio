import styles from './LoadingSpinner.module.css';

export default function LoadingSpinner() {
  return (
    <div aria-live='polite' className='flex w-full items-center justify-center pt-12' role='status'>
      <span aria-hidden='true' className={styles.loader} />
      <span className='sr-only'>Loading...</span>
    </div>
  );
}
