<script>
const DEFAULT_DATA = {
  items: [
    {
      id: 1,
      name: { ko: "소갈비살", en: "Beef Rib Finger", zh: "牛肋条", ja: "牛リブフィンガー" },
      price: 7900,
      soldOut: false
    },
    {
      id: 2,
      name: { ko: "양념소갈비살", en: "Marinated Beef Rib Finger", zh: "腌制牛肋条", ja: "味付け牛リブ" },
      price: 7900,
      soldOut: false
    }
  ]
};

function getMenuData() {
  return JSON.parse(localStorage.getItem("menuData")) || DEFAULT_DATA;
}

function saveMenuData(data) {
  localStorage.setItem("menuData", JSON.stringify(data));
}
</script>
