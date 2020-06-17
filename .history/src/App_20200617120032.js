import React from 'react';
import './App.css';

function App() {
  
  return (
    <div class="Parentbox">
      <FotoProduk/>
      <ProdukInfo title="Nike" category="Running" />
      <CheckDiscount/>
    </div>
  );
}

function FotoProduk() {
  return (
    <div class="Foto">
      <img src="bwasneaker.jpg" alt="sepatu"/>
    </div>
  );
}

function ProdukInfo(props) {
  const {category,title}=props;
  const price=700000;
  return(
      <div class="Deskripsi">
        <p class="Cate">{category}</p>
        <h1 class="Title">{title}</h1>
        <p class="Price">IDR {price}</p>
        <p class="Info">
        lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <a onClick={(e)=>TambahCart(title,e)} href="#">Add to Cart</a>
      </div>
  );
}

function TambahCart(e) {
  console.log("membeli "+ e);
}

function CheckDiscount(props) {
  const {isDiscount} = props;
  if (isDiscount) {
    return (
    <p>Diskon 50% Off</p>
    );
  }else{
    return (
      <p>Belum ada diskon</p>
    );
  }
}
export default App;
