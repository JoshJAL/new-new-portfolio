import styles from './LoadingSpinner.module.css';

export default function LoadingSpinner() {
  return (
    <div className='flex w-full items-center justify-center pt-12'>
      <span className={styles.loader}></span>
    </div>
  );
}
