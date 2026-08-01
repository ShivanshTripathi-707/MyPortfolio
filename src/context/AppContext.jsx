import { createContext } from "react";

export const AppContext = createContext(null);

const AppContextProvider = ({ children }) => {
    let backend_url = "http://localhost:4000"
    
    const value = {
        backend_url
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;