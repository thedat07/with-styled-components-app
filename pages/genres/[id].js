import Layout from "../../components/layout";
import { useRouter } from "next/router";
import { api } from "../../api/api";
import { useState, useEffect } from "react";
import ListMovies from '../../components/pages/list-movies'
import {helper} from '../../helper/helper'
export default function Home() {
  const router = useRouter();
  const { id } = router.query;
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [dataMovie, setDataMovie] = useState({});
  useEffect(() => {
    
    if (!router.isReady) return;
    const getData = async () => {
      setLoading(true);
      const data = await api.getDataGenresMovie(id, page);

      if (!helper.isEmptyObject(data)) {
        setDataMovie(data);
      }
      setLoading(false);
    };
    getData();
  }, [router.isReady, page, router.query]);
  const changePage = (page) => {
    setPage(page);
  };
  return (
    <Layout>
      <div className="block container-fluid" style={{ marginTop: "30px" }}>
        <div className="titleHolder ">
          <h2>Movies</h2>
          <ListMovies
          isLoading={loading}
          isTotalPage={dataMovie.total_pages}
          isData={dataMovie.results}
          page={page}
          changePage={changePage}
        ></ListMovies>
        </div>
      </div>
    </Layout>
  );
}
