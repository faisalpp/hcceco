import React,{useState} from "react";

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [ntfState, setNtfState] = useState(false)
    const [dsclState, setDsclState] = useState(false)
    return <AppContext.Provider value={{ntfState,setNtfState,dsclState,setDsclState}}>{children}</AppContext.Provider>
};

export {AppContext,AppProvider}