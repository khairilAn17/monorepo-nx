import styles from './books.module.css';

/* eslint-disable-next-line */
export interface BooksProps {}

export function Books(props: BooksProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Books!</h1>
    </div>
  );
}

export default Books;
