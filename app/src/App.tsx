import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ModalProvider } from '@/hooks/useModal';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import UDistrict from '@/pages/UDistrict';
import Merchants from '@/pages/Merchants';
import Students from '@/pages/Students';
import Community from '@/pages/Community';
import SubmitDeal from '@/pages/SubmitDeal';
import Contact from '@/pages/Contact';
import UDistrictStudentDiscountsAve from '@/pages/UDistrictStudentDiscountsAve';
import UniversityDistrictSavingsGuide from '@/pages/UniversityDistrictSavingsGuide';

export default function App() {
  return (
    <ModalProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/u-district" element={<UDistrict />} />
            <Route path="/merchants" element={<Merchants />} />
            <Route path="/students" element={<Students />} />
            <Route path="/community" element={<Community />} />
            <Route path="/submit-deal" element={<SubmitDeal />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/u-district-student-discounts-the-ave" element={<UDistrictStudentDiscountsAve />} />
            <Route path="/university-district-student-savings-guide" element={<UniversityDistrictSavingsGuide />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ModalProvider>
  );
}

