import React from 'react';
// import football from '../../assets/img/football.jpg';
import { AiTwotoneStar } from 'react-icons/ai';
function Card({ title, desc, price, img }) {
  return (
    <div className="product-card border border-black w-[280px] h-max p-[1rem] flex flex-col items-center gap-4">
      <img src={img} alt="loaidng" className="h-[200px] w-[100%]" />
      <div className="card-content w-full flex flex-col gap-3">
        <h3>{title}</h3>
        <span className="flex text-red-500">
          <AiTwotoneStar />
          <AiTwotoneStar />
          <AiTwotoneStar />
          <AiTwotoneStar />
        </span>
        <p className="text-[12px] text-gray-400">{desc}</p>
        <span className="text-[20px] font-semibold">$ {price}</span>
      </div>

      <button className="bg-black text-white p-[0.6rem] w-full font-semibold rounded">
        Add to Carts
      </button>
    </div>
  );
}

export default Card;
