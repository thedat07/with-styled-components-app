import { Card, Row, Col, Skeleton, Grid } from "antd";
import { helper } from "../../helper/helper";
const { Meta } = Card;
import Link from "next/link";
import PaginationPage from "./pagination";
import Image from "next/image";
import { motion } from "framer-motion";
import Stagger from "../motion/stagger";
import FaceInUp from "../motion/faceInUp";
export default function ListMovies({
  isLoading,
  isData = {},
  page = 1,
  changePage,
  isTotalPage,
}) {
  if (isLoading || helper.isEmptyObject(isData)) {
    return <Skeleton active />;
  }
  if (isData.length === 0) {
    return <p>Not found Data</p>;
  }
  return (
    <Stagger>
      <Row gutter={[24, 24]}>
        {isData.map((item, index) => {
          return (
            <Col
              lg={{ span: 6 }}
              sm={{ span: 8 }}
              xs={{ span: 12 }}
              key={item.id}
            >
              <FaceInUp>
                <Link href={`/detail/movie/${item.id}`}>
                  <a>
                    <Card
                      hoverable
                      cover={
                        (item.poster_path === null && (
                          <Image
                            src="/error-image-generic.png"
                            alt="me"
                            width="300"
                            height="450"
                          />
                        )) || (
                          <img
                            alt={item.poster_path}
                            src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                          />
                        )
                      }
                    >
                      <Meta
                        title={item.title || item.original_name}
                        description={item.release_date || item.first_air_date}
                      />
                    </Card>
                  </a>
                </Link>
              </FaceInUp>
            </Col>
          );
        })}
      </Row>
      <PaginationPage
        isTotalPage={isTotalPage}
        isCurrentPage={page}
        changePage={changePage}
      ></PaginationPage>
    </Stagger>
  );
}
