import { Card, Radio } from "antd";
import { useState, useEffect } from "react";
import { api } from "../../api/api";
import { helper } from "../../helper/helper";
import ListMovies from "./list-movies";
const tabListNoTitle = [
  {
    key: "AiringToday",
    tab: "Airing Today",
  },
  {
    key: "OnTheAir",
    tab: "On The Air",
  },
  {
    key: "Popular",
    tab: "Popular",
  },
  {
    key: "TopRated",
    tab: "Top Rated",
  },
];

export default function TVHome() {
  const [page, setPage] = useState(1);
  const [noTitleKey, setNoTitleKey] = useState("AiringToday");
  const [loading, setLoading] = useState(false);
  const [dataPopularTV, setDataPopularTV] = useState({});
  const [dataAiringTodayTV, setDataAiringTodayTV] = useState({});
  const [dataOnTheAirTV, setDataOnTheAirTV] = useState({});
  const [dataTopRatedTV, setDataTopRatedTV] = useState({});
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const data = await api.getDataPopularTV(page);
      const data1 = await api.getAiringTodayTV(page);
      const data2 = await api.getOnTheAirTV(page);
      const data3 = await api.getTopRatedTV(page);
      if (!helper.isEmptyObject(data)) {
        if (
          data.hasOwnProperty("results") ||
          data1.hasOwnProperty("results") ||
          data2.hasOwnProperty("results") ||
          data3.hasOwnProperty("results")
        ) {
            setDataPopularTV(data);
            setDataAiringTodayTV(data1);
            setDataOnTheAirTV(data2);
            setDataTopRatedTV(data3);
        }
      }
      setLoading(false);
    };
    getData();
  }, [page]);
  const changePage = (page) => {
    setPage(page);
  };

  const contentListNoTitle = {
    AiringToday: (
      <>
        <ListMovies
          isLoading={loading}
          isTotalPage={dataAiringTodayTV.total_pages}
          isData={dataAiringTodayTV.results}
          page={page}
          changePage={changePage}
        ></ListMovies>
      </>
    ),
    OnTheAir: (
      <>
        <ListMovies
          isLoading={loading}
          isTotalPage={dataOnTheAirTV.total_pages}
          isData={dataOnTheAirTV.results}
          page={page}
          changePage={changePage}
        ></ListMovies>
      </>
    ),
    Popular: (
      <>
        <ListMovies
          isLoading={loading}
          isTotalPage={dataPopularTV.total_pages}
          isData={dataPopularTV.results}
          page={page}
          changePage={changePage}
        ></ListMovies>
      </>
    ),
    TopRated: (
      <>
      <ListMovies
        isLoading={loading}
        isTotalPage={dataTopRatedTV.total_pages}
        isData={dataTopRatedTV.results}
        page={page}
        changePage={changePage}
      ></ListMovies>
    </>
    ),
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
