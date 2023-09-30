import supabase from "../api";
import CommonNav from "../components/CommonNav";
import SignInForm from "../components/Auth/SignInForm";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const navigate = useNavigate();
  const handleFormSubmit = async ({ email, password }) => {
    let { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    console.log(data)
    if (data.user !== null) {
      navigate("/dashboard");
    } else {
      console.log(error);
      alert(error.message);
    }
  };
  return (
    <>
      <CommonNav />
      <SignInForm handleFormSubmit={handleFormSubmit} />
    </>
  );
}
