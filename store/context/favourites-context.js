import { createContext, useState } from "react";

// First create the context object with default values, any component that subscribes to this context will
// read the current context value from the closest matching Provider above it in the tree.

// The defaultValue argument is only used when a component does not have a matching Provider
// above it in the tree. This default value can be helpful for testing components in isolation
// without wrapping them. Note: passing undefined as a Provider value does not cause consuming
// components to use defaultValue.

export const FavouritesContext = createContext({
  ids: [],
  addFavourite: (id) => {},
  removeFavourite: (id) => {},
});

// Now specify the provider
// Every Context object comes with a Provider React component that allows consuming components to subscribe
// to context changes.

// The Provider component accepts a value prop to be passed to consuming components that are descendants
// of this Provider. One Provider can be connected to many consumers. Providers can be nested to override
// values deeper within the tree.

// All consumers that are descendants of a Provider will re-render whenever the Provider’s value prop changes.

const FavouritesContextProvider = ({ children }) => {
  const [favouriteMealIds, setFavouriteMealIds] = useState([]);

  const addFavouriteFn = (id) => {
    setFavouriteMealIds((currentFavIds) => [...currentFavIds, id]);
    // current FavIds is the current state that will be updated.
  };

  const removeFavouriteFn = (id) => {
    setFavouriteMealIds((currentFavIds) =>
      currentFavIds.filter((mealId) => mealId !== id)
    );
  };

  const valueProps = {
    ids: favouriteMealIds,
    addFavourite: addFavouriteFn,
    removeFavourite: removeFavouriteFn,
  };

  return (
    <FavouritesContext.Provider value={valueProps}>
      {children}
    </FavouritesContext.Provider>
  );
  // note: value has already been set upon creation, we're just passing the props into it.
  // Now, any child can read and edit the current context values (valueProps) from the closest provider.
};

// will use this function to wrap the provider and other components that are in it.
// Also, this way we can pass the logic into the function
export default FavouritesContextProvider;
