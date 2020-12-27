// Setting a CONTEXTAPI for state management
import React, { useState, useContext } from "react";
import allemojis from "./complete";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [searchEmoji, setSearchEmoji] = useState(allemojis);
  const [sortedList, setSortedList] = useState([]);
  const [searched, setSearched] = useState(true);

  //CONTEXT PROVIDER distributes data throughtout the child components
  return (
    <AppContext.Provider
      value={{
        searchEmoji,
        sortedList,
        searched,
        setSearchEmoji,
        setSortedList,
        setSearched,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// CUSTOM HOOK to be imported where the state values are required
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
