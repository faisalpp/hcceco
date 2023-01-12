import { Routes,Route } from "react-router-dom";
import Desclaimer from "../components/Desclaimer";
import EditProfile from "./EditProfile";
import CollegesHome from "./pages/CollegesHome";

import Home from './pages/Home';
import HomeLatestAnnouncements from "./pages/HomeLatestAnnouncements";
import HomeLinkRequest from "./pages/HomeLinkRequest";
import HomeMessages from "./pages/HomeMessages";
import Login from "./pages/Login";

function App() {
  return (  
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      
      <Route path="/colleges" element={<CollegesHome/>}/>
      <Route path="/messages" element={<HomeMessages/>}/>
      <Route path="/latest-announcements" element={<HomeLatestAnnouncements/>}/>
      <Route path="/link-request" element={<HomeLinkRequest/>}/>

       {/* User Related Pages */}
       <Route path="/edit-profile" element={<EditProfile/>}/>
   

      <Route path="/desclaimer" element={<Desclaimer/>}/>
     </Routes>
  )
}

export default App
