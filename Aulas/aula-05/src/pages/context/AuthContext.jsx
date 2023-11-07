import { createContext, useState } from "react";
import api from "../../services/api";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const logar = (login, senha) => {
    //Login deve ser realizado via post na api
    if (login == "joao" && senha == "senha@123") {
      setUser("João Felipe");
      //Token JWT que vem como resposta do login
      const token = ".....";
      //configura o token na instância do axios
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  };

  const sair = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user: user, estaLogado: !!user, logar, sair }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
