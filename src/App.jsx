import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import OrderModal, { ToastNotification } from './components/OrderModal';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProcessPage from './pages/ProcessPage';
import CatalogPage from './pages/CatalogPage';
import B2BPage from './pages/B2BPage';
import LocationPage from './pages/LocationPage';

export default function App() {
  const [activePage, setActivePage] = useState('beranda');
  const [orderModalData, setOrderModalData] = useState(null);
  const [toast, setToast] = useState(null);

  const handleNavigate = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenOrder = (name, priceLabel) => {
    setOrderModalData({ name, priceLabel });
  };

  const handleShowToast = (title, desc) => {
    setToast({ title, desc });
    setTimeout(() => setToast(null), 5000);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar activePage={activePage} onNavigate={handleNavigate} onOpenOrder={handleOpenOrder} />

      <main className="flex-grow">
        {activePage === 'beranda' && <HomePage onNavigate={handleNavigate} />}
        {activePage === 'tentang' && <AboutPage onNavigate={handleNavigate} />}
        {activePage === 'proses' && <ProcessPage onNavigate={handleNavigate} />}
        {activePage === 'koleksi' && <CatalogPage onNavigate={handleNavigate} onOpenOrder={handleOpenOrder} />}
        {activePage === 'b2b' && <B2BPage onNavigate={handleNavigate} onShowToast={handleShowToast} />}
        {activePage === 'lokasi' && <LocationPage onNavigate={handleNavigate} />}
      </main>

      <Footer onNavigate={handleNavigate} />

      <OrderModal
        orderData={orderModalData}
        onClose={() => setOrderModalData(null)}
        onShowToast={handleShowToast}
      />
      <ToastNotification toast={toast} />
    </div>
  );
}