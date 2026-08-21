import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ModalProvider } from '@/hooks/useModal';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import UofW from '@/pages/UofW';
import Merchants from '@/pages/Merchants';
import Students from '@/pages/Students';
import Community from '@/pages/Community';
import UwStudentDiscountsAve from '@/pages/UwStudentDiscountsAve';
import UniversityDistrictSavingsGuide from '@/pages/UniversityDistrictSavingsGuide';

export default function App() {
  return (
    <ModalProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/uofw" element={<UofW />} />
            <Route path="/merchants" element={<Merchants />} />
            <Route path="/students" element={<Students />} />
            <Route path="/community" element={<Community />} />
            <Route path="/uw-student-discounts-the-ave" element={<UwStudentDiscountsAve />} />
            <Route path="/university-district-student-savings-guide" element={<UniversityDistrictSavingsGuide />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ModalProvider>
  );
}
