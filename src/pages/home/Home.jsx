import Layout from "../../components/layout/Layout";
import HeroSection from "../../components/heroSection/HeroSection";
import Filter from "../../components/filter/Filter";
import ProductCard from "../../components/productCard/ProductCard";
import Track from "../../components/track/Track";
import Testimonial from "../../components/testimonial/Testimonial";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";

export default function Home() {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart);

  const addCart = () => {
    dispatch(addToCart("shirt"));
  };
  const deleteCart = () => {
    dispatch(deleteFromCart("shirt"));
  };
  console.log(cartItem);

  return (
    <Layout>
      <HeroSection />
      <Filter />
      <ProductCard />
      <Track />
      <Testimonial />
    </Layout>
  );
}
