const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

let orders = [];
let orderCount = 1;

/* 주문 받기 (모바일에서 호출) */
app.post("/order", (req, res) => {
  const order = {
    id: orderCount++,
    table: req.body.table,
    items: req.body.items,
    request: req.body.request || "",
    time: new Date().toLocaleTimeString(),
    status: "NEW"
  };

  orders.unshift(order);
  res.json({ success: true });
});

/* 관리자 페이지에서 주문 불러오기 */
app.get("/orders", (req, res) => {
  res.json(orders);
});

/* 주문 처리 완료 */
app.post("/order/done/:id", (req, res) => {
  const order = orders.find(o => o.id == req.params.id);
  if (order) order.status = "DONE";
  res.json({ success: true });
});

app.listen(3000, () => {
  console.log("✅ Server running on http://localhost:3000");
});
