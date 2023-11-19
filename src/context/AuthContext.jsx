import  { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = (props) => {
  const [token, setToken] = useState(() => {
    // Recupera o token do sessionStorage ou retorna null se não estiver presente
    const storedToken = sessionStorage.getItem("token");
    return storedToken ? storedToken : null;
  });

  const updateToken = (newToken) => {
    setToken(newToken);

    // Atualiza o sessionStorage com o novo valor do token
    if (newToken) {
      sessionStorage.setItem("token", newToken);
    } else {
      sessionStorage.removeItem("token");
    }
  };

  return (
    <AuthContext.Provider value={{ token, setToken: updateToken }}>
      {props.children}
    </AuthContext.Provider>
  );
};


export  { AuthProvider, AuthContext };