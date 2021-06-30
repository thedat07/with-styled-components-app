import { Typography, Space } from "antd";
import { helper } from "../../helper/helper";
import { useState } from "react";
const { Text, Title, Paragraph } = Typography;
export default function About({ data = {} }) {
  const [ellipsis, setEllipsis] = useState(true);
  console.log(data.birthday)
  return (
    <div>
      <Title>{data.name}</Title>
      <Space direction="vertical">
        {(data.deathday === null && (
          <>
            <Text>
              <Text strong>Birth day</Text>: {data.birthday}{" "}
              {helper.calculate_age(data.birthday)}
            </Text>
          </>
        )) || (
          <>
            <Text>
              <Text strong>Birth day</Text>: {data.birthday}
            </Text>
            <Text>
              <Text strong>Death day</Text>: {data.deathday}{" "}
              {helper.calculate_age_dead(data.birthday, data.deathday)}
            </Text>
          </>
        )}
         {(data.place_of_birth === null && (
          <>
            <Text>
              <Text strong>Place of birth</Text>: ---{" "}
            </Text>
          </>
        )) || (
          <>
             <>
            <Text>
              <Text strong>Place of birth</Text>: {data.place_of_birth}{" "}
            </Text>
          </>
          </>
        )}
        <Text>
          <Text strong>Gender</Text>: {helper.checkGender(data.gender)}
        </Text>
        <Title level={4}>Biography</Title>
        <Paragraph
          ellipsis={
            ellipsis ? { rows: 5, expandable: true, symbol: "more" } : false
          }
        >
          {(data.biography === "" &&
            "We don't have a biography for " + data.name) ||
            data.biography}
        </Paragraph>
      </Space>
    </div>
  );
}
