import Layout from "../../../components/layout";
import { useRouter } from "next/router";
import { Skeleton } from "antd";
import { useState, useEffect } from "react";
import { api } from "../../../api/api";
import { helper } from "../../../helper/helper";
import ListPerson from "../../../components/detail/listPerson";
import ListMovie from "../../../components/detail/listMovie";
import Banner from "../../../components/detail/banner";
import FaceInUp from '../../../components/motion/faceInUp'
export default function Home() {
  const [loading, setLoading] = useState(false);
  const [dataMovie, setDataMovie] = useState({});
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    
    if (!router.isReady) return;
    const getData = async () => {
      setLoading(true);
      const data = await api.getDataDetailMovie(id);

      if (!helper.isEmptyObject(data)) {
        setDataMovie(data);
      }
      setLoading(false);
    };
    getData();
  }, [router.isReady, id]);
  if (loading || helper.isEmptyObject(dataMovie)) {
    return (
      <Layout>
        <div className="block container-fluid">
          {" "}
          <Skeleton active />
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <FaceInUp>
      <div className=" container-fluid">
        <Banner dataMovie={dataMovie}></Banner>
        <div className="block titleHolder ">
          <h2 style={{ marginTop: "20px" }}>Top Billed Cast</h2>
          <ListPerson></ListPerson>
        </div>
        <div className="block titleHolder ">
          <h2 style={{ marginTop: "20px" }}>Recommendations</h2>
          <ListMovie></ListMovie>
        </div>
      </div>
      </FaceInUp>
    </Layout>
  );
}
