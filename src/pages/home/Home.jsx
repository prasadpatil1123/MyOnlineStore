import { useContext } from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/data/myContext";

function Home() {
  // const context = useContext(myContext);
  // console.log(context);
  // // const {name } = context;
  // // const {role } = context;
  // const { state, comapany } = context;
  // console.log(name);
  return (
    <Layout>
      {/* <div style={{color:'chocolate'}}>
         <h1>My name is {name}</h1>  
           <h1>I'm {role}</h1>    
        <h1>Name: {state.name}</h1>
        <h1>My job profile: {state.role}</h1>
        <h2>Company: {comapany.job}</h2>
        <h2>Experience: {comapany.exp}</h2>
      </div> */}
      Home :
    </Layout>
  );
}

export default Home;
