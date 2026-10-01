import { createContext, useContext, useState, ReactNode } from 'react';

type FavoritesType = {
  favorites: string[]; // only ids
  toggleFavorite: (id: string) => void;
};

const FavoritesContext = createContext<FavoritesType>({
  favorites: [],
  toggleFavorite: () => {},
});

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<string[]>([]);

  function toggleFavorite(id: string) {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((f) => f !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  }

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}
