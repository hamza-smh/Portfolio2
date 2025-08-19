import {createContext,useContext,useEffect,useState} from "react";

const ThemeContext = createContext();

const LOCAL_STORAGE_KEY = "themeMode";

export const ThemeProvider = ({ children }) => {
  const getInitialData = () => {
    try {
      const data = localStorage.getItem(LOCAL_STORAGE_KEY);
      return data ? JSON.parse(data) : {
        theme:"dark"
      };
    } catch (err) {
      console.error("Failed to parse theme from localStorage", err);
      return {};
    }
  };

  const [themeMode, setThemeMode] = useState(getInitialData);

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(themeMode));
    } catch (err) {
      console.error("Failed to save themeMode to localStorage", err);
    }
  }, [themeMode]);

  return (
    <ThemeContext.Provider value = {{themeMode,setThemeMode}}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);



//when deleting data
//localStorage.removeItem("userData");
