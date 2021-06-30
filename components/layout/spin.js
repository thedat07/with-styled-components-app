import { Spin, Row, Col } from "antd";
export default function SpinLoading() {
  return (
    <div className="container-fluid block">
      <Row>
        <Col
          span={20}
          offset={2}
          style={{ marginTop: "20px", textAlign: "center" }}
        >
          <Spin size="large" />
        </Col>
      </Row>
    </div>
  );
}
