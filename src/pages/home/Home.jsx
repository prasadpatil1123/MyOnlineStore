//  import React,{ useContext } from "react";
import Layout from "../../components/layout/Layout";
// import myContext from "../../context/data/myContext";
import HeroSection from "../../components/heroSection/HeroSection";
import Filter from "../../components/filter/Filter";
import ProductCard from "../../components/productCard/ProductCard";
import Track from "../../components/track/Track";
import Testimonial from "../../components/testimonial/Testimonial";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <Filter />
      <ProductCard/>
      <Track/>
      <Testimonial/>
    </Layout>
  );
}

// export default Home;

// function Home() {
//   // const context = useContext(myContext);
//   // console.log(context);
//   // // const {name } = context;
//   // // const {role } = context;
//   // const { state, comapany } = context;
//   // console.log(name);
//   return (
//     <Layout>
//       {/* <div style={{color:'chocolate'}}>
//          <h1>My name is {name}</h1>
//            <h1>I'm {role}</h1>
//         <h1>Name: {state.name}</h1>
//         <h1>My job profile: {state.role}</h1>
//         <h2>Company: {comapany.job}</h2>
//         <h2>Experience: {comapany.exp}</h2>
//       </div> */}
//       <HeroSection/>
//     </Layout>
//   );
// }

// export default Home;
