import { Routes,Route } from "react-router-dom";
import Login from "./pages/Login";
import EditProfile from "./pages/EditProfile";

import Home from './pages/Home';
import HomeLatestAnnouncements from "./pages/HomeLatestAnnouncements";
import HomeLinkRequest from "./pages/HomeLinkRequest";
import HomeMessages from "./pages/HomeMessages";
import CollegesHome from "./pages/CollegesHome";

import WriteReview from "./pages/WriteReview";

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
import CoursesAbout from "./pages/CoursesInnerPage/CoursesAbout";

// Exam Page
import Exams from './pages/Exams';

// Corporate Pages
import CorporateShortTricks from "./pages/Corporate/CorporateShortTricks";
import CorporateWorkSheet from "./pages/Corporate/CorporatWorkSheet";
import CorporateMockTest from "./pages/Corporate/CorporateMockTest";
import CorporateLibrary from "./pages/Corporate/CorporateLibrary";

// Corporate Test
import MockTestInstructions from "./pages/CorporateTest/MockTestInstructions";
import MockTestQuestioner from "./pages/CorporateTest/MockTestQuestioner";

import LoginPopup from "./pages/Corporate/LoginPopup";
import SignupS1 from "./pages/SignupS1";
import SignupS2 from "./pages/SignupS2";
import SignupCollege from "./pages/SignupCollege";
import MockTestResult from "./pages/CorporateTest/MockTestResult";

import ProfileSearch from './pages/SearchPages/Profile';
import PostsSearch from './pages/SearchPages/Posts';
import HiringSearch from './pages/SearchPages/Hiring';
import AnnouncementsSearch from './pages/SearchPages/Announcements';
import QuestionsSearch from './pages/SearchPages/Questions';
import ServicesSearch from './pages/SearchPages/Services';
import CollegesSearch from './pages/SearchPages/Colleges';
import CoursesSearch2 from './pages/SearchPages/Courses';
import ExamsSearch from './pages/SearchPages/Exams';
import CorporateSearch from './pages/SearchPages/Corporate';
import ExamAboutIndex from "./pages/ExamsInnerPage/ExamAbout/ExamAboutIndex";
import ExamFaq from "./pages/ExamsInnerPage/ExamFaq";
import AboutIndex from "./pages/About/AboutIndex";
import CollegeProfileS1 from './pages/CollegeProfile/CollegeProfileS1';
import CollegeProfileS2 from './pages/CollegeProfile/CollegeProfileS2';
import CollegeProfileS3 from './pages/CollegeProfile/CollegeProfileS3';
import CollegeProfileS4 from './pages/CollegeProfile/CollegeProfileS4';
import CollegeProfileS5 from './pages/CollegeProfile/CollegeProfileS5';

function App() {
  return (  
    <Routes>
      {/* Home Page */}
      <Route index element={<Home/>}/>
      {/* About Page Website */}
      <Route path="/about" element={<AboutIndex/>}/>

      {/* Login Page */}
      <Route path="/login" element={<Login/>}/>
      {/* Signup Details Page */}
      <Route path="/signup/step1" element={<SignupS1/>}/>
      {/* Signup OTP Page */}
      <Route path="/signup/step2" element={<SignupS2/>}/>
      {/* Signup College Page */}
      <Route path="/signup/college/step1" element={<SignupCollege/>}/>
      {/* Signup Collge OTP Page */}
      <Route path="/signup/college/step2" element={<SignupS2/>}/>
      {/* Edite Profile Page */}
      <Route path="/college/edit-profile/s1" element={<CollegeProfileS1/>}/>
      {/* Colleges Edite Profile Page */}
      <Route path="/college/edit-profile/s2" element={<CollegeProfileS2/>}/>
      {/* Colleges Edite Profile Page */}
      <Route path="/college/edit-profile/s3" element={<CollegeProfileS3/>}/>
      {/* Colleges Edite Profile Page */}
      <Route path="/college/edit-profile/s4" element={<CollegeProfileS4/>}/>
      {/* Colleges Edite Profile Page */}
      <Route path="/college/edit-profile/s5" element={<CollegeProfileS5/>}/>



      {/* Login Mobile PopUp */}
      <Route path="/login-popup" element={<LoginPopup/>}/>
      
      {/* College Home */}
      <Route path="/colleges" element={<CollegesHome/>}/>
      
        {/* Controll All Pages Related to Courses and thier Information */}
         {/* Courses Home */}
         <Route path="/courses" element={<Courses/>}/>
         {/* Courses Search Page */}
         <Route path="/courses/search" element={<CoursesSearch/>}/>
         {/* Course About Page Dynamic */}
         <Route path="/courses/about" element={<CoursesAbout/>}/>




         {/* Exam Page */}
         <Route path="/exams" element={<Exams/>}/>
         {/* Exam About Page */}
         <Route path="/exam/about" element={<ExamAboutIndex/>}/>
         {/* Exam About Page */}
         <Route path="/exam/faq" element={<ExamFaq/>}/>
         
         
         
         
         {/* Corporate Short Tricks */}
         <Route path="/corporate/short-tricks" element={<CorporateShortTricks/>}/>
         {/* Corporate WorkSheets */}
         <Route path="/corporate/worksheets" element={<CorporateWorkSheet/>}/>
         {/* Corporate Mock Test */}
         <Route path="/corporate/mocktest" element={<CorporateMockTest/>}/>
         {/* Corporate Library */}
         <Route path="/corporate/library" element={<CorporateLibrary/>}/>
         
         {/* Corporate Mock Test Instructions */}
         <Route path="/corporate/mocktest/instructions" element={<MockTestInstructions/>}/>
         {/* Corporate Mock Test Question */}
         <Route path="/corporate/mocktest/question/1" element={<MockTestQuestioner/>}/>
         {/* Corporate Mock Test Result */}
         <Route path="/corporate/mocktest/result" element={<MockTestResult/>}/>

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
         <Route path="/search/profile" element={<ProfileSearch/>}/>
         {/* Posts Search Page */}
         <Route path="/search/posts" element={<PostsSearch/>}/>
         {/* Hiring Search Page */}
         <Route path="/search/hiring" element={<HiringSearch/>}/>
         {/* Announcements Search Page */}
         <Route path="/search/announcements" element={<AnnouncementsSearch/>}/>
         {/* Questions Search Page */}
         <Route path="/search/questions" element={<QuestionsSearch/>}/>
         {/* Services Search Page */}
         <Route path="/search/services" element={<ServicesSearch/>}/>
         {/* Colleges Search Page */}
         <Route path="/search/colleges" element={<CollegesSearch/>}/>
         {/* Courses Search Page */}
         <Route path="/search/courses" element={<CoursesSearch2/>}/>
         {/* Exams Search Page */}
         <Route path="/search/exams" element={<ExamsSearch/>}/>
         {/* Corporate Search Page */}
         <Route path="/search/corporate" element={<CorporateSearch/>}/>

        
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
