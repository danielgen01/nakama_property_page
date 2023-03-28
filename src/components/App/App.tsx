import './App.css'
import Navbar from '../Navbar/Navbar'
import MainBanner from '../MainBanner/MainBanner'
import BenefitsBanner from '../BenefitsBanner/BenefitsBanner'
import TypeBanner from '../TypeBanner/TypeBanner'
import PropertyBanner from '../PropertyBanner/PropertyBanner'
import ContactBanner from '../ContactBanner/ContactBanner'

function App() {

  return (
    <>
   <div className='App'>
   <Navbar />
   <MainBanner />
   <BenefitsBanner />
   <TypeBanner />
   <PropertyBanner />
   <ContactBanner />
   </div>
   
   </>)
}

export default App
