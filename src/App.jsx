import { Routes,Route } from "react-router-dom";
import Desclaimer from "../components/Desclaimer";
import EditProfile from "./pages/EditProfile";
import CollegesHome from "./pages/CollegesHome";

import Home from './pages/Home';
import HomeLatestAnnouncements from "./pages/HomeLatestAnnouncements";
import HomeLinkRequest from "./pages/HomeLinkRequest";
import HomeMessages from "./pages/HomeMessages";
import Login from "./pages/Login";
import WriteReview from "./pages/WriteReview";
import ProfileSearch from "./pages/ProfileSearch";
import PeoplePosts from "./pages/PeoplePosts";
import Hiring from "./pages/Hiring";

// College Inner Pages
import CollegeIntro from "./pages/CollegesInnerPage/CollegeIntro";
import AllCourses from "./pages/CollegesInnerPage/AllCourses";
import Announcements from "./pages/CollegesInnerPage/Announcements";
import Admission from "./pages/CollegesInnerPage/Admission";
import DistanceEducation from "./pages/CollegesInnerPage/DistanceEducation";
import Placement from './pages/CollegesInnerPage/Placement';
import Scholership from './pages/CollegesInnerPage/Scholership';
import Faq from './pages/CollegesInnerPage/Faq';

function App() {
  return (  
    <Routes>
      {/* Home Page */}
      <Route index element={<Home/>}/>
      {/* Edite Profile Page */}
      <Route path="/edit-profile" element={<EditProfile/>}/>
      {/* Login Page */}
      <Route path="/login" element={<Login/>}/>
      {/* College Home */}
      <Route path="/colleges" element={<CollegesHome/>}/>
      {/* Messages Page */}
      <Route path="/messages" element={<HomeMessages/>}/>
      {/* Latest Announcements Page */}
      <Route path="/latest-announcements" element={<HomeLatestAnnouncements/>}/>
      {/* Link Request Page */}
      <Route path="/link-request" element={<HomeLinkRequest/>}/>
       {/* Write A Review Page */}
       <Route path="/write-review" element={<WriteReview/>}/>
       {/* Desclaimer for login page */}
       <Route path="/desclaimer" element={<Desclaimer/>}/>
       {/* Profile Search Page */}
       <Route path="/profile-search" element={<ProfileSearch/>}/>
       {/* Hiring Search Page */}
       <Route path="/hiring-search" element={<Hiring/>}/>
       {/* All People Posts */}
       <Route path="/people-posts" element={<PeoplePosts/>}/>
        
       {/* College Inner Page */}
        {/* College About Page */}
        <Route path="/college/about" element={<CollegeIntro/>}/>
        {/* College Courses Page */}
        <Route path="/college/all-courses" element={<AllCourses/>}/>
        {/* College Announcement Page */}
        <Route path="/college/announcements" element={<Announcements/>}/>
        {/* College Admission Page */}
         <Route path="/college/admission" element={<Admission/>}/>
        {/* Review Page */}
        
        {/* Distance Education Page */}
         <Route path="/college/distance-education" element={<DistanceEducation/>}/>
         
        {/* Placement Page */}
        <Route to="/college/placement" element={<Placement/>}/>
        {/* Scholership Page */}
        <Route to="/college/scholership" element={<Scholership/>}/>
        {/* FAQ Page */}
        <Route to="/college/faq" element={<Faq/>}/>

     </Routes>
  )
}

export default App
