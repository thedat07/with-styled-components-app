import Layout from "../../components/layout";
import ListPerson from "../../components/pages/list-person";
import { useState, useEffect } from "react";
import { api } from "../../api/api";
import { Card } from "antd";
import { helper } from "../../helper/helper";
export default function Home() {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const data = await api.getDataPerson(page);

      if (!helper.isEmptyObject(data)) {
        if (data.hasOwnProperty("results")) {
          setData(data);
        }
      }
      setLoading(false);
    };
    getData();
  }, [page]);
  const changePage = (page) => {
    setPage(page);
  };
  return (
    <Layout>
      <div className="block container-fluid" style={{ marginTop: "30px" }}>
        <div className="titleHolder ">
          <h2>Person Popular</h2>
          <Card>
            <ListPerson
              isLoading={loading}
              isTotalPage={data.total_pages}
              isData={data.results}
              page={page}
              changePage={changePage}
            ></ListPerson>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
