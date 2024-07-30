import styles from './SignupPage.module.css';
import AuthForm from '../../components/AuthForm/AuthForm';

export default function SignupPage() {
  return (
    <div className={styles.wrapper}>
      <AuthForm title='Зарегистрироваться' type='signup' />
    </div>
  );
}
