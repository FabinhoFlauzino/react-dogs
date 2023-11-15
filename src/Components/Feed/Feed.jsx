import React, { useEffect, useState } from "react";
import FeedModal from "./FeedModal";
import FeedPhotos from "./FeedPhotos";

const Feed = ({ user }) => {
  const [modalPhoto, setModalPhoto] = useState(null);
  const [pages, setPages] = useState([1])
  const [infinit, setInfinit] = useState(true)

  useEffect(() => {
    let wait = false
    function infinitScroll() {
      if(infinit){
        const scroll = window.scrollY
        const height = document.body.offsetHeight - window.innerHeight
  
        if (scroll > height * 0.75 && !wait) {
          setPages((pages) => [...pages, pages.length + 1])
          wait = true
  
          setTimeout(() => {
            wait = false
          }, 500)
        }
      }

    }
    window.addEventListener('wheel', infinitScroll)
    window.addEventListener('scroll', infinitScroll)

    return () => {
      window.removeEventListener('wheel', infinitScroll)
      window.removeEventListener('scroll', infinitScroll)
    }
  }, [infinit])

  return (
    <div>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}

      {pages.map(page =>
        <FeedPhotos
          key={page}
          page={page}
          user={user}
          setModalPhoto={setModalPhoto}
          setInfinit={setInfinit}
        />
      )}
    </div>
  );
};

export default Feed;
