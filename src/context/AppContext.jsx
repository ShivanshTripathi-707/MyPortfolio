import { createContext } from "react";

export const AppContext = createContext(null);

const AppContextProvider = ({ children }) => {
    let backend_url = "https://shivansh-portfolio-backend.onrender.com"
    
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