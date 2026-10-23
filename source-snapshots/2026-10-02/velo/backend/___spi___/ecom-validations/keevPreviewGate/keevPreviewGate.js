// Keep closed until the separate payment and real-order launch gate.
// This rule stores no visitor information and performs no network calls.
const previewNotice = [
  "商品預覽中，暫未開放付款或正式訂單。購物車不構成訂單或預留庫存。",
  "Preview only. Payments and real orders are closed. Your cart does not place an order or reserve stock.",
  "商品プレビュー中。お支払いと正式注文は受付前です。カートへの追加は注文や在庫確保にはなりません。",
  "ชมสินค้าเท่านั้น ยังไม่เปิดชำระเงินหรือรับคำสั่งซื้อจริง ตะกร้าไม่ถือเป็นคำสั่งซื้อหรือการจองสินค้า",
  "商品预览中，暂未开放付款或正式订单。购物车不构成订单或预留库存。"
].join("\n");
export const getValidationViolations = async () => ({
  violations: [{
    severity: "ERROR",
    target: { other: { name: "OTHER_DEFAULT" } },
    description: previewNotice
  }]
});
