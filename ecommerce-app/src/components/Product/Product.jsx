import football from '../../assets/img/football.jpg';
import { AiTwotoneStar } from 'react-icons/ai';
import Card from '../card/Card';
function Product() {
  return (
    <div className="Products">
      <div className="product-heading font-semibold text-center text-[30px] p-[1rem]">
        Trending Products
      </div>
      <div className="grid grid-cols-4 grid-rows-2 gap-14 m-[2rem]">
        <Card
          title="Ruffle leather ajcket"
          desc="lorem si the sis sowis sjwid djwni"
          price="300"
          img={football}
        />
        <Card
          title="Ruffle leather ajcket"
          desc="lorem si the sis sowis sjwid djwni"
          price="300"
          img={football}
        />
        <Card
          title="Ruffle leather ajcket"
          desc="lorem si the sis sowis sjwid djwni"
          price="300"
          img={football}
        />
        <Card
          title="Ruffle leather ajcket"
          desc="lorem si the sis sowis sjwid djwni"
          price="300"
          img={football}
        />
        <Card
          title="Ruffle leather ajcket"
          desc="lorem si the sis sowis sjwid djwni"
          price="300"
          img={football}
        />
        <Card
          title="Ruffle leather ajcket"
          desc="lorem si the sis sowis sjwid djwni"
          price="300"
          img={football}
        />
      </div>
    </div>
  );
}

export default Product;
