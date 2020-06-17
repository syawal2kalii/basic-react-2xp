import React from 'react';
import './App.css';

function App() {

  return (
    <div class="Parentbox">
      <FotoProduk />
      <ProdukInfo isDiscount="yes" title="Nike" category="Running" />
      <ReviewItems/>
    </div>
  );
}

function FotoProduk() {
  return (
    <div class="Foto">
      <img src="bwasneaker.jpg" alt="sepatu" />
    </div>
  );
}

function ProdukInfo(props) {
  const { category, title, isDiscount } = props;
  const price = 700000;
  const benefit = ["Tidak kusut terkena air", "Bahan lebih halus", "Tidak Gerah"];
  const listBenefits = benefit.map((itembenefit) =>
    <li>{itembenefit}</li>
  );
  return (
    <div class="Deskripsi">
      <p class="Cate">{category}</p>
      <h1 class="Title">{title}</h1>
      <p class="Price">IDR {price}</p>
      <CheckDiscount isDiscount={isDiscount} />
      <p class="Info">
        lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      <ul>
        <li>{listBenefits}</li>
      </ul>
      <a onClick={(e) => TambahCart(title, e)} href="#">Add to Cart</a>
    </div>
  );
}

function TambahCart(e) {
  console.log("membeli " + e);
}

function CheckDiscount(props) {
  const { isDiscount } = props;
  if (isDiscount === "yes") {
    return (
      <p>Diskon 50% Off</p>
    );
  }
  else if (isDiscount === "no") {
    return (
      <p>Belum ada diskon</p>
    );
  }
  else if (isDiscount === "coming") {
    return (
      <p>Akan ada diskon</p>
    );
  }
}

function ReviewItems() {
  const users = [
    {
      "id": 1,
      "name": "Masayoshi",
      "review": "Harganya murah tapi kualitas bukan kaleng-kaleng nih. Keren.",
      "photo": "https://images.pexels.com/photos/2232981/pexels-photo-2232981.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    },
    {
      "id": 2,
      "name": "Shayna",
      "review": "Barang Bagus",
      "photo": "https://images.pexels.com/photos/764529/pexels-photo-764529.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    },
    {
      "id": 3,
      "name": "Alqowy",
      "review": "Harganya murah tapi kualitas bukan kaleng-kaleng nih. Keren.",
      "photo": "https://images.pexels.com/photos/2100063/pexels-photo-2100063.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    }
  ];
  const listReview = users.map((itemReview) =>
    <div className="Item">
      <img src={itemReview.photo} />
      <div className="User">
        <h3>{itemReview.name}</h3>
        <p>{itemReview.review}</p>
      </div>
    </div>
  );
  return(
    <div className="Review-box">
      <h2>Reviews</h2>
      {listReview}
    </div>
  )
}
export default App;
