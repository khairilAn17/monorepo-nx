import styles from './ui-ui.module.css';

/* eslint-disable-next-line */
export interface UiUiProps {}

export function UiUi(props: UiUiProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiUi!</h1>
    </div>
  );
}

export default UiUi;
