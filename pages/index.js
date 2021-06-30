import Layout from "../components/layout";
import Popular from "../components/home/Popular";
import Carousel from "../components/home/carousel";
import PopularPerson from "../components/home/PopularPerson";


export default function Home() {
  return (
    
      <Layout>
        <div className="block container-fluid" style={{ marginTop: "30px" }}>
          <Carousel></Carousel>
          <div className="titleHolder ">
            <h2>What's Popular</h2>
            <Popular></Popular>
          </div>
          <div className="titleHolder ">
            <h2>Trending Person</h2>
            <PopularPerson></PopularPerson>
          </div>
        </div>
      </Layout>
    
  );
}
