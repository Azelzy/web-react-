import React, { useState } from 'react';

function MenuInput({ onAdd }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && price && image) {
      onAdd({ name, price: parseFloat(price), image });
      setName('');
      setPrice('');
      setImage('');
    }
  };

  return (
    <div className="menu-input-container">
      <h2>Tambah Menu Makanan</h2>
      <form className="menu-input-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nama</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Masukkan nama makanan"
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Harga</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Masukkan harga makanan"
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">URL Gambar</label>
          <input
            type="url"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Masukkan URL gambar"
          />
        </div>
        <button type="submit" className="btn-tambah">
          Tambah
        </button>
      </form>
    </div>
  );
}

export default MenuInput;