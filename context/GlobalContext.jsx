import React,{useState} from "react";

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    // Change Notification Button Trigger
    const [ntfState, setNtfState] = useState(false)
    // Login Page Desclaimer popup
    const [dsclState, setDsclState] = useState(false)
    // Main Navabr SearchBar
    const [homeSearch,setHomeSearch] = useState(false)
    // Show Dot on Notification Icon
    const [ntfMsg,setNtfMsg] = useState(true)
    // User Login State
    const [isLogin,setIsLogin] = useState(true)
    // 
    const [msgState,setMsgState] = useState(false)
    // 
    const [chtState,setChtState] = useState(true)
    // 
    const [share,setShare] = useState(false)

    // Mobile States
    // Mobile Navbar Menu Trigger
    const [userMobMenu,setUserMobMenu] = useState(false)
    // Colleges Filter Menu "show college filter in college page"
    const [clgFilter,setClgFilter] = useState(false); 
    // Exam Filter "shwo exam filter in exam page"
    const [exmFilter,setExmFilter] = useState(false);
    // Mobile Message Panel "show message panel when true"
    const [mobMsg,setMobMsg] = useState(false);
    // Mobile Notification Panel "show notification menu when true"
    const [mobNtf,setMobNtf] = useState(false);
    // Mobile Logout Popup "General logout popup"
    const [logoutPopup,setLogoutPopup] = useState(false);
    // Mobile Logout Popup "Please Login To get Updates"
    const [loginPopup,setLoginPopup] = useState(false);
    // Mobile Email Notificiation Popup
    const [emailPopup,setEmailPopup] = useState(false);
    // Mobile Signup Popup
    const [signupPopup,setSignupPopup] = useState(false);
    // Mobile User Block Popup
    const [blockPopup,setBlockPopup] = useState(false);


    return <AppContext.Provider value={{blockPopup,setBlockPopup,signupPopup,setSignupPopup,emailPopup,setEmailPopup,loginPopup,setLoginPopup,logoutPopup,setLogoutPopup,mobNtf,setMobNtf,mobMsg,setMobMsg,exmFilter,setExmFilter,clgFilter,setClgFilter,share,setShare,userMobMenu,setUserMobMenu,chtState,setChtState,msgState,setMsgState,isLogin,setIsLogin,ntfState,setNtfState,dsclState,setDsclState,homeSearch,setHomeSearch,ntfMsg,setNtfMsg}}>{children}</AppContext.Provider>
};

export {AppContext,AppProvider}