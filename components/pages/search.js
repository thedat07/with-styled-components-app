import { Card, Radio } from "antd";
import { useState, useEffect } from "react";
import { api } from "../../api/api";
import { useRouter } from "next/router";
import { helper } from "../../helper/helper";
import ListMovies from "./list-movies";
import ListPerson from './list-person'
const tabListNoTitle = [
  {
    key: "Movies",
    tab: "Movies",
  },
  {
    key: "Person",
    tab: "Person",
  },
];

export default function PopularHome() {
    const [noTitleKey, setNoTitleKey] = useState("Movies");
    const router = useRouter();
    const { name } = router.query;
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [dataMovie, setDataMovie] = useState({});
    const [dataPeople, setDataPerson] = useState({});
    useEffect(() => {
      
      if (!router.isReady) return;
      const getData = async () => {
        setLoading(true);
        const data = await api.searchDataMovie(name, page);
        const data2 = await api.searchDataPerson(name, page);
        if (!helper.isEmptyObject(data)||!helper.isEmptyObject(data2)) {
          
                setDataMovie(data);
                setDataPerson(data2);
              

        }
        setLoading(false);
      };
      getData();
    }, [router.isReady, page, router.query]);
  const changePage = (page) => {
    setPage(page);
  };

  const contentListNoTitle = {
    Movies: (
      <>
        <ListMovies
          isLoading={loading}
          isTotalPage={dataMovie.total_pages}
          isData={dataMovie.results}
          page={page}
          changePage={changePage}
        ></ListMovies>
      </>
    ),
    Person: (
      <>
        <ListPerson
          isLoading={loading}
          isTotalPage={dataPeople.total_pages}
          isData={dataPeople.results}
          page={page}
          changePage={changePage}
        ></ListPerson>
      </>
    )
  };
  const onTabChange = (key) => {
    setNoTitleKey(key);
    setPage(1);
  };

  return (
    <div className="container-fluid">
      <div className="CardHome">
        <Radio.Group defaultValue={noTitleKey} size="large">
          {tabListNoTitle.map((item, _) => {
            return (
              <Radio.Button
                key={item.key}
                value={item.key}
                onClick={() => {
                  onTabChange(item.key, "noTitleKey");
                }}
              >
                {item.tab}
              </Radio.Button>
            );
          })}
        </Radio.Group>
      </div>
      <Card
        style={{ width: "100%" }}
        activeTabKey={noTitleKey}
        onTabChange={(noTitleKey) => {
          onTabChange(noTitleKey, "noTitleKey");
        }}
      >
        {contentListNoTitle[noTitleKey]}
      </Card>
    </div>
  );
}
