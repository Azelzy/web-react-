import React, { useEffect } from 'react';
import Menu from './component/Menu';

function App() {
  useEffect(() => {
    const checkbox = document.querySelector('.theme-switch__checkbox');
    if (!checkbox) return;
    const handleTheme = () => {
      // Toggle kedua class agar hanya satu yang aktif
      if (checkbox.checked) {
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
      } else {
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');
      }
    };
    checkbox.addEventListener('change', handleTheme);
    // Set tema awal
    handleTheme();
    // Bersihkan event listener saat komponen unmount
    return () => checkbox.removeEventListener('change', handleTheme);
  }, []);

  return (
    <div>
      <Menu />
    </div>
  );
}

export default App;