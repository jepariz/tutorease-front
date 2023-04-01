import { useEffect} from 'react';
import Features from '../../components/LandingPage/Features'
import Footer from '../../components/LandingPage/Footer'
import Header from '../../components/LandingPage/Header/index'
import HowTo from '../../components/LandingPage/HowTo'
import { auth } from "../../configs/firebase";
import { useNavigate } from "react-router-dom";

function LandindPage() {

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigate('/dashboard');
      }
    });
  
    return () => {
      unsubscribe();
    };
  }, []);
  
  return (
    <>
    <Header></Header>
    <Features></Features>
    <HowTo></HowTo>
    <Footer></Footer>
    </>
  )
}

export default LandindPage