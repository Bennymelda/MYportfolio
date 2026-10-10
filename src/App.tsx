import './index.css'
import { useEffect, useState } from 'react'
import { Routes, Route } from "react-router-dom";
import { ProjectDetailPage } from './component/section/ProjectDetailsView';
import HeroSection from './component/section/Hero'
import ServicesSection from './component/section/Featured'
import StackAndNumbers from './component/section/StackNumber'
import ContactSection from './component/section/LetsWork'
import FooterSection from './component/section/Footer'
import ApproachSection from './component/section/About'
import Navbar from './component/section/Navbar'
import SelectedProjectsHeader from './component/section/project'
import ContactSections from './component/section/ContactSection'
import AboutSection from './component/section/MainAbout'
import ScrollToTop from './component/section/scrollTop'
import Welcome from './component/section/WelcomePage'
//import ComputerCanvas from './component/section/iphoneDisplay';
import SelectedWorkSection from './component/section/MainProject';

function App() {

  const [showWelcome, setShowWelcome] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            showWelcome ? null : (
              <>

                <HeroSection />
               {/*
                <div className='w-full relative h-[450px] sm:h-[550px] md:h-[650px] lg:h-[750px] bg-[#F8F8F6] dark:bg-[#0d0d0d] relative overflow-hidden flex items-center justify-center'>
                  <ComputerCanvas />
                </div>
                */}

                <ApproachSection />
                <SelectedWorkSection />
                <ServicesSection />
                <StackAndNumbers />
                <ContactSection />
                <FooterSection />

              </>
            )
          }
        />

        <Route
          path="/about"
          element={<AboutSection />}
        />

        <Route
          path="/contact"
          element={<ContactSections />}
        />

        <Route
          path="/work"
          element={<SelectedProjectsHeader />}
        />
        <Route
          path="/work/:projectId"
          element={<ProjectDetailPage />}
        />
      </Routes>

      {showWelcome && <Welcome />}

    </>
  )
}

export default App