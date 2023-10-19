import CommonNav from "../components/CommonNav";
import SignInForm from "../components/Auth/SignInForm";
import useWindowHeight from '../utils/useWindowHeight';

export default function Auth() {
  const { height, isReady } = useWindowHeight();

  return (
    <>
      <div
        style={{
          height: `${height}px`,
          opacity: isReady ? 1 : 0,
          transition: 'opacity 0.5s linear'
        }}
      >
        <CommonNav />
        <SignInForm />
      </div>
    </>
  );
}