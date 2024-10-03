// src/App.js
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Login from './components/login.js';
import SelectionForm from './components/choice_page.js';
import Timetable from './components/timetable.js';
import Materials from './components/materials.js';
import Community from './components/community.js';
import Home from './components/home.js';
import Navbar from './components/navbar.js'; 
import Tutorials from './components/tutorials.js';
import Reels from './components/shorts.js';
import DailyStreak from './components/daily_questions.js';
import CodingPractice from './components/questions.js';
import Dashboard from './components/dashbord.js';
import CandyCrushPath from './components/roadmap.js';
import UserProfileCard from './components/profile.js';
import Settings from './components/settings.js';
import Chatbot from './components/chatbot.js';
import FloatingBar from './components/floating_bar.js';
import ChatbotButton from './components/chatbotbutton.js';
import Mentors from './components/mentor.js';


function App() {
  return (
    
    <div>
      {/* <CandyCrushPath /> */}
     <Navbar />
      <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/selection-form" element={<SelectionForm />} />
        <Route path="/timetable" element={<Timetable />} />
        <Route path="/materials" element={<Materials />} />
        <Route path="/community" element={<Community />} />
        <Route path="/tutorials" element={<Tutorials />} />
        <Route path="/Reels" element={<Reels />} />
        <Route path="/Mentors" element={<Mentors />} />
        <Route path="/Chatbot" element={<Chatbot />} />
        <Route path="/CodingPractice" element={<CodingPractice />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/CandyCrushPath" element={<CandyCrushPath />} />
        
      </Routes>
      </div>
      <FloatingBar />
      <ChatbotButton />   
  
      
       </div>
     
   
  );
};

export default App;
