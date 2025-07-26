import './App.css'; 
import Header from './components/HEADER/Header';
import HeroSection from './components/HERO/HeroSection';
import Services from './components/SERVICES/Services';
import CTASection from './components/CTA/CTASection';
import Footer from './components/FOOTER/Footer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Weather from './pages/WEATHER/Weather';
import CropSuggestions from './pages/CROP-SUGGESTION/CropSuggestions';
import Chatbot from './pages/CHATBOT/Chatbot';
import MandiPrices from './pages/MANDI-PRICES/MandiPrices';
import Login from './pages/LOGIN/Login';
import Register from './pages/REGISTER/Register';
import ImpactSection from './components/ImpactSection/ImpactSection';
import CropSuggestion from './pages/CROP-SUGGESTION/CropSuggestions';
import CropTrends from './pages/CROP TRENDS/CropTrends';
import AboutUS from './components/ABOUT/AboutUs';
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        
        <HeroSection />
        <AboutUS /> 
        <Services />
        <ImpactSection/>
        <CTASection />
        <Footer />
      </div>
    ),
  },
  {
    path: "/weather",
    element: (
      <div>
       
        <Weather />
        
      </div>
    ),
  },
  {
    path: "/crop-suggestions",
    element: (
      <div>
        <Header />
        <CropSuggestions />
       
      </div>
    ),
  },
  {
    path: "/chatbot",
    element: (
      <div>
        <Header />
        <Chatbot />
        
      </div>
    ),
  },
  {
    path: "/CropTrends",
    element: (
      <div>
        <Header />
        <CropTrends/>
      
      </div>
    ),
  },
  {
    path: "/login",
    element: (
      <div>
        <Login />
      </div>
    ),
  },
  {
    path: "/register",
    element: (
      <div>

        <Register />
      
      </div>
    ),
  },
]);

export default function App() {
  return (
    <div className="main-container">
      <RouterProvider router={router} />
    </div>
  );
}