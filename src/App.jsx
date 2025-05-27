import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import CSS untuk toast
import Loader from './component/Loader';
import Menu from './component/Menu';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulasikan waktu loading selama 2 detik
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    const checkbox = document.querySelector('.theme-switch__checkbox');
    if (!checkbox) return;
    const handleTheme = () => {
      if (checkbox.checked) {
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
      } else {
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');
      }
    };
    checkbox.addEventListener('change', handleTheme);
    handleTheme();

    // Bersihkan timer dan event listener saat komponen unmount
    return () => {
      clearTimeout(timer);
      checkbox.removeEventListener('change', handleTheme);
    };
  }, []);

  return (
    <div>
      <ToastContainer /> {/* Tambahkan ToastContainer di sini */}
      {isLoading ? <Loader /> : <Menu />}
    </div>
  );
}

export default App;