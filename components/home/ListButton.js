import { Card, Button, Radio } from "antd";
const tabListNoTitle = [
  {
    key: "streaming",
    tab: "Streaming",
  },
  {
    key: "TV",
    tab: "On TV",
  },
  {
    key: "ForRent",
    tab: "For Rent",
  },
  {
    key: "InTheaters",
    tab: "In Theaters",
  },
];
export default function ListButton() {
  return (
    <Radio.Group defaultValue="0">
      {tabListNoTitle.map((item, index) => {
        return (
          <Radio.Button
            value={index}
            onClick={() => {
              onTabChange(item.key, "noTitleKey");
            }}
          >
            {item.tab}
          </Radio.Button>
        );
      })}
    </Radio.Group>
  );
}
