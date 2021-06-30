import { Timeline, Radio } from "antd";
import { useState } from "react";
import { Typography, Space } from "antd";
import Link from "next/link";
const { Text, Title, Paragraph } = Typography;
export default function TimeLine({ data }) {
  const [mode, setMode] = useState("left");
  let sorted_data = data.sort(
    (a, b) => Date.parse(b.release_date) - Date.parse(a.release_date)
  );
  const onChange = (e) => {
    setMode(e.target.value);
  };
  return (
    <>
      <Radio.Group
        onChange={onChange}
        value={mode}
        style={{
          marginBottom: 20,
        }}
      >
        <Radio value="left">Left</Radio>
        <Radio value="right">Right</Radio>
        <Radio value="alternate">Alternate</Radio>
      </Radio.Group>
      <Timeline mode={mode}>
        {sorted_data.map((item, _) => {
          return (
            <Timeline.Item
              key={item.id}
              label={(item.release_date === "" && "---") || item.release_date}
            >
              <Link href={`/detail/movie/${item.id}`}>
                <a>
                <Text strong>
                  {(item.title === "" && "---") || item.title}{" "}
                </Text>
                </a>
                </Link>
                <Text type="secondary">as</Text>{" "}
                {(item.character === "" && "---") || item.character}
            </Timeline.Item>
          );
        })}
      </Timeline>
    </>
  );
}
