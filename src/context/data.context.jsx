import { createContext, useState } from "react";

import DATA from "../data.json";

//console.log(DATA);

export const DataContext = createContext(DATA);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(DATA);
  const value = { data };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
