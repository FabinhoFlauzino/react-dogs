import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";
import MinhasFotos from "../../Assets/feed.svg";
import Estatisticas from "../../Assets/estatisticas.svg";
import AdicionarFoto from "../../Assets/adicionar.svg";
import Sair from "../../Assets/sair.svg";
import styles from "./UserHeaderNav.module.css";

const UserHeaderNav = () => {
  const [mobile, setMobile] = useState(null);
  const { userLogout } = useContext(UserContext);
  const navigate = useNavigate()

  function handleLogout() {
    userLogout()
    navigate('/login')
  }
  return (
    <nav className={styles.nav}>
      <NavLink to={"/conta"} end>
        <img src={MinhasFotos} alt="Fotos" /> {mobile && "Minhas Fotos"}
      </NavLink>
      <NavLink to={"/conta/estatisticas"}>
        <img src={Estatisticas} alt="Estatisticas" /> {mobile && "Estatísticas"}
      </NavLink>
      <NavLink to={"/conta/postar"}>
        <img src={AdicionarFoto} alt="Foto" /> {mobile && "Adicionar Foto"}
      </NavLink>
      <button onClick={handleLogout}>
        <img src={Sair} alt="Sair" /> {mobile && "Sair"}
      </button>
    </nav>
  );
};

export default UserHeaderNav;
