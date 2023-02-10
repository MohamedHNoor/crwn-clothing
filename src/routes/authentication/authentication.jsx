import SignUpForm from '../../components/sign-up-form/Sign-up-form';
import SignInForm from '../../components/sign-in-form/Sign-in-form';
import './authentication.styles.scss';

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
