import React from "react";
import { Table } from "antd";

const Table_Tr = ({ data }) => {
  let rowdata = []; // Initialize the array outside the map loop

  data.forEach((item) => {
    rowdata.push({
      key: item.id,
      text: item.text,
      amount: item.amount,
    });
  });

  const columns = [
    {
      title: "Text",
      dataIndex: "text",
      key: "text",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
  ];

  return <Table columns={columns} dataSource={rowdata} />;
};

export default Table_Tr;
