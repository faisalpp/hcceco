import React,{useState} from "react";

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [ntfState, setNtfState] = useState(false)
    const [dsclState, setDsclState] = useState(false)
    const [homeSearch,setHomeSearch] = useState(false)
    const [ntfMsg,setNtfMsg] = useState(true)
    const [isLogin,setIsLogin] = useState(false)
    const [msgState,setMsgState] = useState(false)
    const [chtState,setChtState] = useState(false)

    // Mobile States
    const [userMobMenu,setUserMobMenu] = useState(false)

    return <AppContext.Provider value={{userMobMenu,setUserMobMenu,chtState,setChtState,msgState,setMsgState,isLogin,setIsLogin,ntfState,setNtfState,dsclState,setDsclState,homeSearch,setHomeSearch,ntfMsg,setNtfMsg}}>{children}</AppContext.Provider>
};

export {AppContext,AppProvider}