import Layout from "../../components/layout";
import { Row, Col, Tabs, Skeleton, Spin } from "antd";
import { useState, useEffect } from "react";
import About from "../../components/person/about";
import TimeLine from "../../components/person/timeline";
import KnownFor from "../../components/person/knownfor";
import SpinLoading from '../../components/layout/spin';
import ImgPerson from '../../components/person/imgPerson'
import { api } from "../../api/api";
import { helper } from "../../helper/helper";
import { useRouter } from "next/router";

const { TabPane } = Tabs;
export default function Home() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [dataTimeline, setDataTimeLine] = useState({});
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    
    if (!router.isReady) return;
    const getData = async () => {
      setLoading(true);
      const data = await api.getDataPeopleDetailsById(id);
      const dataTimeline = await api.getDataPeopleTimeLineById(id);
      if (!helper.isEmptyObject(data) || !helper.isEmptyObject(dataTimeline)) {
        setData(data);
        setDataTimeLine(dataTimeline);
      }
      setLoading(false);
    };
    getData();
  }, [router.isReady, id]);

  if (loading || helper.isEmptyObject(data)) {
    return (
      <SpinLoading></SpinLoading>
    );
  }
  return (
    <Layout>
      <div className="container-fluid block">
        <Row>
          <Col span={20} offset={2} style={{ marginTop: "20px" }}>
            <Row>
              <Col sm={{span: 8}}  xs={{span: 24}}>
              <ImgPerson data={data}></ImgPerson>
              </Col>
              <Col sm={{span: 16}}  xs={{span: 24}}>
                <Tabs defaultActiveKey="1" size="large">
                  <TabPane tab="About" key="1">
                    <About data={data}></About>
                  </TabPane>
                  <TabPane tab="Acting" key="2">
                    <TimeLine data={dataTimeline.cast}></TimeLine>
                  </TabPane>
                  <TabPane tab="Known For" key="3">
                    <KnownFor></KnownFor>
                  </TabPane>
                </Tabs>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
        </Row>
      </div>
    </Layout>
  );
}
