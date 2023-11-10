import React from "react";
import styles from "./PhotoDelete.module.css";
import { PHOTO_DELETE } from "../../api";
import useFetch from "../../Hooks/useFetch";

const PhotoDelete = ({ id }) => {
  const token = localStorage.getItem("token");
  const { loading, request } = useFetch();

  async function handleClick() {
    const confirm = window.confirm("Deseja Deletar a foto");

    if (confirm) {
      const { url, options } = PHOTO_DELETE(id, token);
      const { response } = await request(url, options);

      if (response.ok) {
        location.reload();
      }
    }
  }

  return (
    <>
      {loading ? (
        <button className={styles.delte} disabled>
          Deletando....
        </button>
      ) : (
        <button onClick={handleClick} className={styles.delte}>
          Deletar
        </button>
      )}
    </>
  );
};

export default PhotoDelete;
