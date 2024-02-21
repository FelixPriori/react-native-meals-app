import { createContext, useState } from "react";

export const FavouritesContext = createContext({
  ids: [],
  addFavourite: (id) => { },
  removeFavourite: (id) => { },
});

export default function FavouritesContextProvider({ children }) {
  const [favouriteMealIds, setFavouriteMealIds] = useState([])

  function addFavourite(id) {
    setFavouriteMealIds((currentFavId) => [...currentFavId, id])
  }

  function removeFavourite(id) {
    setFavouriteMealIds((currentFavId) => currentFavId.filter(mealId => mealId !== id))
  }

  const value = {
    ids: favouriteMealIds,
    addFavourite,
    removeFavourite,
  }

  return (
    <FavouritesContext.Provider value={value}>
      {children}
    </FavouritesContext.Provider>
  )
}