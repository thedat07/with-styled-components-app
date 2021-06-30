import { Card, Radio } from "antd";
import { useState, useEffect } from "react";
import { api } from "../../api/api";
import { helper } from "../../helper/helper";
import PopularStreaming from "./PopularMovie";
const tabListNoTitle = [
  {
    key: "TrendingMovies",
    tab: "Trending Movies",
  },
  {
    key: "InTheaters",
    tab: "In Theaters",
  },
];

export default function PopularHome() {
  const [noTitleKey, setNoTitleKey] = useState("TrendingMovies");
  const [loading, setLoading] = useState(false);
  const [dataPopularMovies, setDataPopularMovies] = useState({});
  const [dataTrendingMovies, setDataTrendingMovies] = useState({});
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const data = await api.getDataPopularMovies(1);
      const data3 = await api.getDataTrendingMovies();
      if (!helper.isEmptyObject(data)) {
        if (
          data.hasOwnProperty("results") ||
          data3.hasOwnProperty("results")
        ) {
          setDataPopularMovies(data.results);
          setDataTrendingMovies(data3.results);
        }
      }
      setLoading(false);
    };
    getData();
  }, []);
  const contentListNoTitle = {
    TrendingMovies: (
      <PopularStreaming
        isLoading={loading}
        isData={dataTrendingMovies}
      ></PopularStreaming>
    ),
    InTheaters: (
      <PopularStreaming
        isLoading={loading}
        isData={dataPopularMovies}
      ></PopularStreaming>
    ),
  };
  const onTabChange = (key) => {
    setNoTitleKey(key);
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
