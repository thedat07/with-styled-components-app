import Layout from "../../components/layout";
import Movies from '../../components/pages/movies'
export default function Home() {
  return (
    <Layout>
      <div className="block container-fluid" style={{ marginTop: "30px" }}>
        <div className="titleHolder ">
          <h2>Movies</h2>
          <Movies></Movies>
        </div>
      </div>
    </Layout>
  );
  
}
