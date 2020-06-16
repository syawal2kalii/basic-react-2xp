import React from 'react';
import './App.css';

function App() {
 
  return (
    <div class="Parentbox">
      <ProdukInfo />
      <FotoProoduk />
    </div>
  );
}

function FotoProduk() {
  return (
    <div className="Foto">
      <img src="bwasneaker.jpg" alt="sepatu"/>
    </div>
  );
}

function ProdukInfo(){
  const category="Running";
  const price=700000;
  return (
      <div className="Deskripsi">
        <p className="Cate">{category}</p>
        <h1 className="Title">Pinky Swag</h1>
        <p className="Price">IDR {price}</p>
        <p className="Info">
        lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
  );
}

export default App;
