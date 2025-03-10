import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import UserProfile from './components/UserProfile'
import ProfilePage from './ProfilePage';
import UserContext from './components/UserContext'
import UserDetails from './components/UserDetails'

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
      <WelcomeMessage />
        <Header />
        <MainContent />
        <Footer />
        <UserProfile />
        <UserDetails />
    </UserContext.Provider>
  
  )
}

export default App
