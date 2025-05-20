import React, { useState } from 'react';

function Datadiri() {
    const [Nama] = useState('Rifat arfa');
    const [alamat] = useState('Kudus, Rembang');
    const [hobby] = useState('Valorant');

    return (
        <div>
            <h1>RIFFAT ARFA PRATAMA x ALFIAN FADHIL PRATAMA</h1>
            <p><strong>Nama:</strong> {Nama}</p>
            <p><strong>Alamat:</strong> {alamat}</p>
            <p><strong>Hobby:</strong> {hobby}</p>
        </div>
    );
}

export default Datadiri;