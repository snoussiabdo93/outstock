import React ,{useEffect} from 'react';

const Wrapper = ({children}) => {
  useEffect(() => {
    const handleScroll = (event) => {
      // Empêcher le défilement vers le haut
      if (event.deltaY < 0) {
        event.preventDefault();
      }
    };

    // Ajouter l'écouteur d'événement de scroll
    window.addEventListener('wheel', handleScroll);

    // Retirer l'écouteur d'événement lors du démontage du composant
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);
  return (
    <>
      {children}
    </>
  );
};

export default Wrapper;