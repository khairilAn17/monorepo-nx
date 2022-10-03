import styles from './books-ui.module.css';

/* eslint-disable-next-line */
export interface BooksUiProps {}

export function BooksUi(props: BooksUiProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to BooksUi!</h1>
    </div>
  );
}

export default BooksUi;
