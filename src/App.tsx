import { HashRouter, Routes, Route } from 'react-router-dom';
import { ModalProvider } from '@/hooks/useModal';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import UofW from '@/pages/UofW';
import Merchants from '@/pages/Merchants';
import Students from '@/pages/Students';
import Community from '@/pages/Community';

export default function App() {
  return (
    <ModalProvider>
      <HashRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/uofw" element={<UofW />} />
            <Route path="/merchants" element={<Merchants />} />
            <Route path="/students" element={<Students />} />
            <Route path="/community" element={<Community />} />
          </Route>
        </Routes>
      </HashRouter>
    </ModalProvider>
  );
}
