import { Card, Radio } from "antd";
import { useState, useEffect } from "react";
import { api } from "../../api/api";
import { helper } from "../../helper/helper";
import ListMovies from "./list-movies";
const tabListNoTitle = [
  {
    key: "Popular",
    tab: "Popular",
  },
  {
    key: "NowPlaying",
    tab: "Now Playing",
  },
  {
    key: "Upcoming",
    tab: "Upcoming",
  },
  {
    key: "TopRated",
    tab: "Top Rated",
  },
];

export default function PopularHome() {
  const [page, setPage] = useState(1);
  const [noTitleKey, setNoTitleKey] = useState("Popular");
  const [loading, setLoading] = useState(false);
  const [dataPopularMovies, setDataPopularMovies] = useState({});
  const [dataUpcomingMovies, setDataUpcomingMovies] = useState({});
  const [dataTopRatedMovies, setDataTopRatedMovies] = useState({});
  const [dataNowPlayingMovies, setDataNowPlayingMovies] = useState({});
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const data = await api.getDataPopularMovies(page);
      const data1 = await api.getDataNowPlayingMovies(page);
      const data2 = await api.getDataTopRatedMovies(page);
      const data3 = await api.getDataUpcomingMovies(page);
      if (!helper.isEmptyObject(data)) {
        if (
          data.hasOwnProperty("results") ||
          data1.hasOwnProperty("results") ||
          data2.hasOwnProperty("results") ||
          data3.hasOwnProperty("results")
        ) {
          setDataPopularMovies(data);
          setDataUpcomingMovies(data3);
          setDataTopRatedMovies(data2);
          setDataNowPlayingMovies(data1);
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
    Popular: (
      <>
        <ListMovies
          isLoading={loading}
          isTotalPage={dataPopularMovies.total_pages}
          isData={dataPopularMovies.results}
          page={page}
          changePage={changePage}
        ></ListMovies>
      </>
    ),
    NowPlaying: (
      <>
        <ListMovies
          isLoading={loading}
          isTotalPage={dataNowPlayingMovies.total_pages}
          isData={dataNowPlayingMovies.results}
          page={page}
          changePage={changePage}
        ></ListMovies>
      </>
    ),
    Upcoming: (
      <>
        <ListMovies
          isLoading={loading}
          isTotalPage={dataUpcomingMovies.total_pages}
          isData={dataUpcomingMovies.results}
          page={page}
          changePage={changePage}
        ></ListMovies>
      </>
    ),
    TopRated: (
      <>
      <ListMovies
        isLoading={loading}
        isTotalPage={dataTopRatedMovies.total_pages}
        isData={dataTopRatedMovies.results}
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
