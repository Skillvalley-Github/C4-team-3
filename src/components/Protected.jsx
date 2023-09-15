import { Navigate } from "react-router-dom";
function Protected({ isSignedIn, children }) {
  if (isSignedIn) {
    return children;
  }
  return <Navigate to="/" replace />;
}
export default Protected;
