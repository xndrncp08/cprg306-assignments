import { AuthContextProvider } from "./_utils/AuthContext";

export default function Week9Layout({ children }) {
  return <AuthContextProvider>{children}</AuthContextProvider>;
}