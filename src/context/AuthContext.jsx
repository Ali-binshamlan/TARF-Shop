
import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // جلب المستخدم من التوكن إذا كان موجودًا
  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      // هنا بإمكانك جلب بيانات المستخدم من API باستخدام التوكن
      setUser({ name: "علي بن خالد ", email: "user@example.com" });
    }
  }, []);

  const login = (token, userData) => {
    Cookies.set("token", token, { expires: 7 }); // أسبوع
    setUser(userData);
    navigate("/");
  };

  const logout = () => {
    Cookies.remove("token");
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// hook لاستخدام السياق بسهولة
export const useAuth = () => useContext(AuthContext);
