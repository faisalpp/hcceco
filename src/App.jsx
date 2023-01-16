import { Routes,Route } from "react-router-dom";
import Login from "./pages/Login";
import EditProfile from "./pages/EditProfile";

import Home from './pages/Home';
import HomeLatestAnnouncements from "./pages/HomeLatestAnnouncements";
import HomeLinkRequest from "./pages/HomeLinkRequest";
import HomeMessages from "./pages/HomeMessages";
import CollegesHome from "./pages/CollegesHome";

import WriteReview from "./pages/WriteReview";

// Search Pages Import
import ProfileSearch from "./pages/ProfileSearch";
import PeoplePosts from "./pages/PeoplePosts";
import Hiring from "./pages/Hiring";

// Popup import
import Desclaimer from "../components/Desclaimer";

// College Inner Pages
import About from "./pages/CollegesInnerPage/About";
import AllCourses from "./pages/CollegesInnerPage/AllCourses";
import Announcements from "./pages/CollegesInnerPage/Announcements";
import Admission from "./pages/CollegesInnerPage/Admission";
import Review from './pages/CollegesInnerPage/Review';
import DistanceEducation from "./pages/CollegesInnerPage/DistanceEducation";
import Placement from './pages/CollegesInnerPage/Placement';
import Scholership from './pages/CollegesInnerPage/Scholership';
import Faq from './pages/CollegesInnerPage/Faq';


//Below Imports are all related to course and its Details
import Courses from '../src/pages/Courses';
import CoursesSearch from '../src/pages/CoursesSearch';
import AboutCourseTab from "./pages/CoursesInnerPage/AboutCourseTab";
import SpecializationTab from './pages/CoursesInnerPage/SpecializationTab';
import AfterCourseTab from './pages/CoursesInnerPage/AfterCourseTab';
import AfterCareerTab from './pages/CoursesInnerPage/AfterCareerTab';
import EligibilityTab from './pages/CoursesInnerPage/EligibilityTab';
import SalaryTrendTab from './pages/CoursesInnerPage/SalaryTrendTab';
import TopRecruiterTab from './pages/CoursesInnerPage/TopRecruiterTab';
import ExamBookTab from './pages/CoursesInnerPage/ExamBookTab';
import AverageFeesTab from './pages/CoursesInnerPage/AverageFeesTab';

// Exam Page
import Exams from './pages/Exams';
import Corporate from "./pages/Corporate";
import CorporateMockList from "./pages/CorporateMockList";
import MockTestInstructions from "./pages/CorporateTest/MockTestInstructions";
import MockTestQuestioner from "./pages/CorporateTest/MockTestQuestioner";

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
      
        {/* Controll All Pages Related to Courses and thier Information */}
         {/* Courses Home */}
         <Route path="/courses" element={<Courses/>}/>
         {/* Courses Search Page */}
         <Route path="/courses/search" element={<CoursesSearch/>}/>
         {/* Course About Page Dynamic */}
         <Route path="/courses/about" element={<AboutCourseTab/>}/>
         {/* Course About Page/*/}
         <Route path="/courses/specialization" element={<SpecializationTab/>}/>
         {/* Course About Page/*/}
         <Route path="/courses/eligibility" element={<EligibilityTab/>}/>
         {/* Course About Page/*/}
         <Route path="/courses/after-course" element={<AfterCourseTab/>}/>
         {/* Course About Page/*/}
         <Route path="/courses/after-career" element={<AfterCareerTab/>}/>
         {/* Course About Page/*/}
         <Route path="/courses/exam-book" element={<ExamBookTab/>}/>
         {/* Course About Page/*/}
         <Route path="/courses/average-fee" element={<AverageFeesTab/>}/>
         {/* Course About Page/*/}
         <Route path="/courses/salary-trend" element={<SalaryTrendTab/>}/>
         {/* Course About Page/*/}
         <Route path="/courses/top-recruiter" element={<TopRecruiterTab/>}/>

         {/* Exam Page */}
         <Route path="/exams" element={<Exams/>}/>
         {/* Corporate */}
         <Route path="/corporate" element={<Corporate/>}/>
         {/* Corporate Mock Test List */}
         <Route path="/corporate/mocktest-list" element={<CorporateMockList/>}/>
         {/* Corporate Mock Test Instructions */}
         <Route path="/corporate/mocktest/instructions" element={<MockTestInstructions/>}/>
         <Route path="/corporate/mocktest/question/1" element={<MockTestQuestioner/>}/>



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
       
       {/* Search Pages with sidebar */}
        {/* Profile Search Page */}
         <Route path="/profile-search" element={<ProfileSearch/>}/>
         {/* Hiring Search Page */}
         <Route path="/hiring-search" element={<Hiring/>}/>
         {/* All People Posts */}
         <Route path="/people-posts" element={<PeoplePosts/>}/>
        
       {/* College Inner Page */}
        {/* College About Page */}
        <Route path="/college/about" element={<About/>}/>
        {/* College Courses Page */}
        <Route path="/college/all-courses" element={<AllCourses/>}/>
        {/* College Announcement Page */}
        <Route path="/college/announcements" element={<Announcements/>}/>
        {/* College Admission Page */}
         <Route path="/college/admission" element={<Admission/>}/>
        {/* Review Page */}
        <Route path="/college/reviews" element={<Review/>}/>        
        {/* Placement Page */}
        <Route path="/college/placements" element={<Placement/>}/>        
        {/* Scholership Page */}
        <Route path="/college/scholership" element={<Scholership/>}/>        
        {/* Scholership Page */}
        <Route path="/college/faq" element={<Faq/>}/>                
        {/* Distance Education Page */}
        <Route path="/college/distance-education" element={<DistanceEducation/>}/>
        
     </Routes>
  )
}

export default App
