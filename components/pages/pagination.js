import { Row, Col, Pagination } from "antd";

export default function PaginationPage({ isCurrentPage = 1, changePage, isTotalPage}) {
  return (
    <Row style={{ margin: "30px 0px" }}>
      <Col span={24} style={{ textAlign: "center" }}>
        <Pagination
        total={isTotalPage}
          current={isCurrentPage}
          onChange={(p) => changePage(p)}
          
        />
      </Col>
    </Row>
  );
}
