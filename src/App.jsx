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
import AboutCourse from './pages/CoursesInnerPage/AboutCourse';
import AfterCareer from './pages/CoursesInnerPage/AfterCareer';
import AfterCourse from './pages/CoursesInnerPage/AfterCourse';
import AverageFees from './pages/CoursesInnerPage/AverageFees';
import CourseEligibility from './pages/CoursesInnerPage/Eligibility';
import ExamBook from './pages/CoursesInnerPage/ExamBook';
import SalaryTrend from './pages/CoursesInnerPage/SalaryTrend';
import Specialization from './pages/CoursesInnerPage/Specialization';

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

import ProfileAll from './pages/SearchPages/ProfileAll';

import ExamFaq from "./pages/ExamsInnerPage/ExamFaq";
import AboutIndex from "./pages/About/AboutIndex";
import CollegeProfileS1 from './pages/CollegeProfile/CollegeProfileS1';
import CollegeProfileS2 from './pages/CollegeProfile/CollegeProfileS2';
import CollegeProfileS3 from './pages/CollegeProfile/CollegeProfileS3';
import CollegeProfileS4 from './pages/CollegeProfile/CollegeProfileS4';
import CollegeProfileS5 from './pages/CollegeProfile/CollegeProfileS5';
import ProfilePeople from "./pages/SearchPages/ProfilePeople";
import ProfileCollege from "./pages/SearchPages/ProfileCollege";
import PeoplePosts from "./pages/PeoplePosts";

import Posts from './pages/SearchPages/Posts';
import Hiring from "./pages/SearchPages/Hiring";
import AnnouncementsSearch from "./pages/SearchPages/Announcements";
import Questions from "./pages/SearchPages/Questions";
import Services from "./pages/SearchPages/Services";
import Colleges from "./pages/SearchPages/Colleges";
import CoursesSearch2 from "./pages/SearchPages/Courses";
import ExamsSearch from "./pages/SearchPages/Exams";
import CorporateSearchTricks from "./pages/SearchPages/CorporateSearchTricks";
import CorporateSearchWorksheet from "./pages/SearchPages/CorporateSearchWorksheet";
import CorporateSearchMockTest from "./pages/SearchPages/CorporateSearchMockTest";
import CorporateHcceco from "./pages/SearchPages/CorporateHcceco";
import SearchAll from "./pages/SearchPages/SearchAll";
import Definitaion from "./pages/ExamsInnerPage/ExamAbout/Definition";
import ExamHelp from './pages/ExamsInnerPage/ExamAbout/ExamHelp'
import ExamHighlights from './pages/ExamsInnerPage/ExamAbout/ExamHighlights'
import ExamPattern from './pages/ExamsInnerPage/ExamAbout/ExamPattern'
import ExamPrevYearCutoff from './pages/ExamsInnerPage/ExamAbout/ExamPrevYearCutoff'
import ExamSyllabus from './pages/ExamsInnerPage/ExamAbout/ExamSyllabus'
import ImportantDates from './pages/ExamsInnerPage/ExamAbout/ImportantDates'
import PrevYearsPapers from './pages/ExamsInnerPage/ExamAbout/PrevYearsPapers'
import ImportantExamBook from './pages/ExamsInnerPage/ExamAbout/ImportantExamBook'
import Registration from "./pages/ExamsInnerPage/Registration";
import AdmitCard from "./pages/ExamsInnerPage/AdmitCard";
import Reservation from "./pages/ExamsInnerPage/Reservation";
import ExamCenters from "./pages/ExamsInnerPage/ExamCenters";
import Eligibility from "./pages/ExamsInnerPage/Eligibility";
import Syllabus from "./pages/ExamsInnerPage/Syllabus";
import PreparationTips from "./pages/ExamsInnerPage/PreparationTips";
import Counsling from "./pages/ExamsInnerPage/Counsling";
import ParticipatingColleges from "./pages/ExamsInnerPage/ParticipatingColleges";
import TopRecruiter from "./pages/CoursesInnerPage/TopRecruiter";
import HomeLatestHiring from "./pages/HomeLatestHiring";

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
      {/* Edite Profile Person */}
      <Route path="/edite-profile" element={<EditProfile/>}/>
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
         <Route path="/course/about" element={<AboutCourse/>}/>
         {/* Course After Course Page Dynamic */}
         <Route path="/course/after-course" element={<AfterCourse/>}/>
         {/* Course After Carrier Page Dynamic */}
         <Route path="/course/after-carrier" element={<AfterCareer/>}/>
         {/* Course Average Fee Page Dynamic */}
         <Route path="/course/average-fees" element={<AverageFees/>}/>
         {/* Course Eligibility Page Dynamic */}
         <Route path="/course/eligibility" element={<CourseEligibility/>}/>
         {/* Course Exam Book Dynamic */}
         <Route path="/course/exam-book" element={<ExamBook/>}/>
         {/* Course Salary Trends Dynamic */}
         <Route path="/course/salary-trends" element={<SalaryTrend/>}/>
         {/* Course Specialization Dynamic */}
         <Route path="/course/specialization" element={<Specialization/>}/>
         {/* Course Top Recruiters Dynamic */}
         <Route path="/course/top-recruiters" element={<TopRecruiter/>}/>

         

         {/* Exam Main Page */}
         <Route path="/exams" element={<Exams/>}/>
          {/* Exam About and Its Sub Menu Links */}
           {/* Exam About | Definition */}
           <Route path="/exam/about/definition" element={<Definitaion/>}/>
           {/* Exam About | Highlights */}
           <Route path="/exam/about/exam-highlights" element={<ExamHighlights/>}/>
           {/* Exam About | Exam Help */}
           <Route path="/exam/about/exam-help" element={<ExamHelp/>}/>
           {/* Exam About | Exam Pattern */}
           <Route path="/exam/about/exam-pattern" element={<ExamPattern/>}/>
           {/* Exam About | Exam Previous Year Cutoff */}
           <Route path="/exam/about/previous-year-cutoff" element={<ExamPrevYearCutoff/>}/>
           {/* Exam About | Exam syllabus */}
           <Route path="/exam/about/exam-syllabus" element={<ExamSyllabus/>}/>
           {/* Exam About | Exam Imporant Dates */}
           <Route path="/exam/about/important-dates" element={<ImportantDates/>}/>
           {/* Exam About | Exam Important Books */}
           <Route path="/exam/about/important-exam-books" element={<ImportantExamBook/>}/>
           {/* Exam About | Exam Previous Year Papers */}
           <Route path="/exam/about/previous-year-papers" element={<PrevYearsPapers/>}/>
         {/* Exam Registration Page */}
         <Route path="/exam/registration" element={<Registration/>}/>
         {/* Exam Admit Card Page */}
         <Route path="/exam/admit-card" element={<AdmitCard/>}/>
         {/* Exam Important Dates Page */}
         <Route path="/exam/important-dates" element={<ImportantDates/>}/>
         {/* Exam Reservation Page */}
         <Route path="/exam/reservation" element={<Reservation/>}/>
         {/* Exam Exam Center Page */}
         <Route path="/exam/exam-center" element={<ExamCenters/>}/>
         {/* Exam Eligibility Page */}
         <Route path="/exam/eligibility" element={<Eligibility/>}/>
         {/* Exam Patterns Page */}
         <Route path="/exam/exam-pattern" element={<ExamPattern/>}/>
         {/* Exam Syllabus Page */}
         <Route path="/exam/syllabus" element={<Syllabus/>}/>
         {/* Exam Preparation Tips Page */}
         <Route path="/exam/tips" element={<PreparationTips/>}/>
         {/* Exam Preparation Tips Page */}
         <Route path="/exam/counsling" element={<Counsling/>}/>
         {/* Exam FAQ Page */}
         <Route path="/exam/faq" element={<ExamFaq/>}/>
         {/* Exam Participating Colleges Page */}
         <Route path="/exam/participating-colleges" element={<ParticipatingColleges/>}/>
         
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
      {/* Latest Hiring Page */}
      <Route path="/latest-hiring" element={<HomeLatestHiring/>}/>
      
      {/* Link Request Page */}
      <Route path="/link-request" element={<HomeLinkRequest/>}/>
       {/* Write A Review Page */}
       <Route path="/write-review" element={<WriteReview/>}/>
       {/* Desclaimer for login page */}
       <Route path="/desclaimer" element={<Desclaimer/>}/>
       
       {/* Search Pages with sidebar */}

        {/* Profile All Search Page */}
         <Route path="/search/all" element={<SearchAll/>}/>
        {/* Profile All Search Page */}
         <Route path="/search/profiles/all" element={<ProfileAll/>}/>
        {/* Profile People Search Page */}
         <Route path="/search/profiles/people" element={<ProfilePeople/>}/>
        {/* Profile College Search Page */}
         <Route path="/search/profiles/college" element={<ProfileCollege/>}/>
        {/* Posts Search Page */}
        <Route path="/search/posts" element={<Posts/>}/>
        {/* Hiring Search Page */}
        <Route path="/search/hirings" element={<Hiring/>}/>
        {/* Announcement Search Page */}
        <Route path="/search/announcements" element={<AnnouncementsSearch/>}/>
        {/* Question Search Page */}
        <Route path="/search/questions" element={<Questions/>}/>
        {/* Question Search Page */}
        <Route path="/search/services" element={<Services/>}/>
        {/* Colleges Search Page */}
        <Route path="/search/colleges" element={<Colleges/>}/>
        {/* Colleges Search Page */}
        <Route path="/search/courses" element={<CoursesSearch2/>}/>
        {/* Colleges Search Page */}
        <Route path="/search/exams" element={<ExamsSearch/>}/>
        {/* Corporate Short Tricks Search Page */}
        <Route path="/search/corporate/short-tricks" element={<CorporateSearchTricks/>}/>
        {/* Corporate Short Tricks Search Page */}
        <Route path="/search/corporate/worksheets" element={<CorporateSearchWorksheet/>}/>
        {/* Corporate Short Tricks Search Page */}
        <Route path="/search/corporate/mocktests" element={<CorporateSearchMockTest/>}/>
        {/* Corporate Short Tricks Search Page */}
        <Route path="/search/corporate/hcceco-library" element={<CorporateHcceco/>}/>
 

        
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

        {/* Individual People Post */}
        <Route path="/posts/monika" element={<PeoplePosts/>}/>

     </Routes>
  )
}

export default App
