<script>
const DEFAULT_DATA = {
  items: [
      // 🥩 Meat
      {
        id: 1,
        cat: "meat",
        name: { ko: "소갈비살", en: "Beef Rib Finger", zh: "牛肋条", ja: "牛リブフィンガー" },
        desc: {
          ko: "지방이 균일하게 분포되어 부드러우면서도 쫄깃쫄깃하여 씹을수록 육즙이 고소함",
          en: "Evenly marbled, tender yet pleasantly chewy. The more you chew, the richer the juicy and savory flavor.",
          zh: "油花分布均匀，肉质鲜嫩又富有嚼劲，越嚼越能感受到浓郁多汁的肉香。",
          ja: "脂が均一に入り、柔らかさと程よい歯ごたえを兼ね備えています。噛むほどに旨味が広がります。"
        },
        price: 7900,
        min: 3,
        img: "images/meat1.jpg"
      },
      {
        id: 2,
        cat: "meat",
        name: { ko: "양념소갈비살", en: "Marinated Beef Rib Finger", zh: "腌制牛肋条", ja: "味付け牛リブフィンガー" },
        desc: {
          ko: "천연 과일 양념으로 24시간 저온 숙성시켜 육즙이 풍부하고 부드러운 식감",
          en: "Marinated for 24 hours at low temperature with natural fruit sauce, resulting in juicy and tender meat.",
          zh: "使用天然水果酱料低温腌制24小时，肉质鲜嫩多汁。",
          ja: "天然フルーツソースで24時間低温熟成。ジューシーで柔らかな食感です。"
        },
        price: 7900,
        min: 3,
        img: "images/meat2.jpg"
      },
      {
        id: 3,
        cat: "meat",
        name: { ko: "꼬들살", en: "Kkodul Cut", zh: "猪颈背肉", ja: "コドゥルサル（豚首肉）" },
        desc: {
          ko: "뒷목살에서 소량만 나오는 특수부위로 쫄깃하고 고소한 식감",
          en: "A rare cut from the back of the neck, featuring tender lean meat and chewy fat layers.",
          zh: "取自猪颈背的稀有部位，瘦肉嫩滑，脂肪层富有嚼劲。",
          ja: "豚の首元から少量しか取れない希少部位。弾力のある食感と香ばしさが特徴です。"
        },
        price: 7900,
        min: 3,
        img: "images/meat3.jpg"
      },
      {
        id: 4,
        cat: "meat",
        name: { ko: "돼지양념갈비", en: "Marinated Pork Ribs", zh: "腌制猪排骨", ja: "味付け豚カルビ" },
        desc: {
          ko: "천연 양념으로 숙성하여 감칠맛이 뛰어나고 부드러운 맛",
          en: "Naturally marinated to enhance deep flavor, offering a tender texture and rich taste.",
          zh: "采用天然酱料腌制，口感柔嫩，味道浓郁。",
          ja: "天然のタレで熟成し、旨味が深く柔らかな味わいです。"
        },
        price: 7500,
        min: 3,
        img: "images/meat4.jpg"
      },
      {
        id: 5,
        cat: "meat",
        name: { ko: "진갈비살", en: "Prime Rib Finger", zh: "精选牛肋条", ja: "特選牛リブフィンガー" },
        desc: {
          ko: "육즙이 진하고 고소한 감칠맛이 풍부한 부위",
          en: "Rich, juicy, and full of savory umami flavor. Soft and highly flavorful.",
          zh: "肉汁丰富，口感柔嫩，充满浓郁的鲜香风味。",
          ja: "肉汁が豊富で、濃厚な旨味とコクを楽しめる部位です。"
        },
        price: 16000,
        min: 3,
        img: "images/meat5.jpg"
      },
      {
        id: 6,
        cat: "meat",
        name: { ko: "한우육회", en: "Korean Beef Tartare", zh: "韩牛生拌牛肉", ja: "韓牛ユッケ" },
        desc: {
          ko: "신선한 국내산 한우를 사용해 입안에서 사르르 녹는 맛",
          en: "Fresh Korean beef seasoned with premium ingredients. Melts in your mouth.",
          zh: "选用新鲜韩牛，入口即化，口感清爽。",
          ja: "新鮮な韓牛を使用。口の中でとろける食感です。"
        },
        price: 18000,
        min: 1,
        img: "images/meat6.jpg"
      },
      {
        id: 7,
        cat: "meat",
        name: { ko: "돼지껍데기", en: "Pork Skin", zh: "猪皮", ja: "豚皮" },
        desc: {
          ko: "콜라겐과 단백질이 풍부하여 쫀득한 식감",
          en: "Rich in collagen and protein. Popular for skin health.",
          zh: "富含胶原蛋白和蛋白质，口感Q弹。",
          ja: "コラーゲンとタンパク質が豊富で、もちもちした食感が特徴です。"
        },
        price: 4000,
        min: 3,
        img: "images/meat7.jpg"
      },

      // 🍚 Meals
      {
        id: 20,
        cat: "meal",
        name: { ko: "된장라면", en: "Soybean Ramen", zh: "大酱拉面", ja: "味噌ラーメン" },
        desc: { ko: "", en: "", zh: "", ja: "" },
        price: 4500,
        min: 1,
        img: "images/meal1.jpg"
      },
      {
        id: 21,
        cat: "meal",
        name: { ko: "물냉면", en: "Cold Noodles", zh: "冷面", ja: "冷麺" },
        desc: { ko: "", en: "", zh: "", ja: "" },
        price: 4000,
        min: 1
      },
      {
        id: 22,
        cat: "meal",
        name: { ko: "누룽지", en: "Scorched Rice (Nurungji)", zh: "锅巴", ja: "おこげ" },
        desc: { ko: "", en: "", zh: "", ja: "" },
        price: 2000,
        min: 1
      },
      {
        id: 23,
        cat: "meal",
        name: { ko: "된장찌개", en: "Soybean Stew", zh: "大酱汤", ja: "味噌チゲ" },
        desc: { ko: "", en: "", zh: "", ja: "" },
        price: 2000,
        min: 1
      },
      {
        id: 24,
        cat: "meal",
        name: { ko: "공기밥", en: "Rice", zh: "米饭", ja: "ご飯" },
        desc: { ko: "", en: "", zh: "", ja: "" },
        price: 1000,
        min: 1
      },

      // 🍺 Drinks
      {
        id: 30,
        cat: "drink",
        name: { ko: "대선", en: "Daesun Soju", zh: "大鲜烧酒", ja: "大鮮 焼酎" },
        desc: { ko: "", en: "", zh: "", ja: "" },
        price: 4500,
        min: 1,
        img: "images/drink1.jpg"
      },
      {
        id: 31,
        cat: "drink",
        name: { ko: "참이슬", en: "Chamisul Soju", zh: "真露烧酒", ja: "チャミスル" },
        desc: { ko: "", en: "", zh: "", ja: "" },
        price: 4500,
        min: 1,
        img: "images/drink2.jpg"
      },
      {
        id: 32,
        cat: "drink",
        name: { ko: "좋은데이", en: "Good Day Soju", zh: "好日子烧酒", ja: "グッドデイ焼酎" },
        desc: { ko: "", en: "", zh: "", ja: "" },
        price: 4500,
        min: 1,
        img: "images/drink3.jpg"
      },
      {
        id: 33,
        cat: "drink",
        name: { ko: "새로", en: "Saero Soju", zh: "赛洛烧酒", ja: "セロ焼酎" },
        desc: { ko: "", en: "", zh: "", ja: "" },
        price: 4500,
        min: 1,
        img: "images/drink4.jpg"
      },
      {
        id: 34,
        cat: "drink",
        name: { ko: "시원", en: "Siwon Soju", zh: "清爽烧酒", ja: "シウォン焼酎" },
        desc: { ko: "", en: "", zh: "", ja: "" },
        price: 4500,
        min: 1
      },
      {
        id: 35,
        cat: "drink",
        name: { ko: "카스", en: "Cass Beer", zh: "凯狮啤酒", ja: "カスビール" },
        desc: { ko: "", en: "", zh: "", ja: "" },
        price: 5000,
        min: 1,
        img: "images/drink6.jpg"
      },
      {
        id: 36,
        cat: "drink",
        name: { ko: "테라", en: "Terra Beer", zh: "泰拉啤酒", ja: "テラビール" },
        desc: { ko: "", en: "", zh: "", ja: "" },
        price: 5000,
        min: 1,
        img: "images/drink7.jpg"
      },
      {
        id: 37,
        cat: "drink",
        name: { ko: "청하", en: "Cheongha", zh: "清河酒", ja: "チョンハ" },
        desc: { ko: "", en: "", zh: "", ja: "" },
        price: 6000,
        min: 1,
        img: "images/drink8.jpg"
      },
      {
        id: 38,
        cat: "drink",
        name: { ko: "카스제로", en: "Cass 0.0 (Non-Alcoholic)", zh: "凯狮0.0（无酒精）", ja: "カス 0.0（ノンアルコール）" },
        desc: { ko: "", en: "", zh: "", ja: "" },
        price: 4000,
        min: 1
      },
      {
        id: 39,
        cat: "drink",
        name: { ko: "콜라", en: "Coke (Can)", zh: "可乐（罐）", ja: "コーラ（缶）" },
        desc: { ko: "", en: "", zh: "", ja: "" },
        price: 2000,
        min: 1
      },
      {
        id: 40,
        cat: "drink",
        name: { ko: "스프라이트", en: "Sprite (Can)", zh: "雪碧（罐）", ja: "スプライト（缶）" },
        desc: { ko: "", en: "", zh: "", ja: "" },
        price: 2000,
        min: 1
      },
      {
        id: 41,
        cat: "drink",
        name: { ko: "제로콜라", en: "Zero Coke (Can)", zh: "零度可乐（罐）", ja: "ゼロコーラ（缶）" },
        desc: { ko: "", en: "", zh: "", ja: "" },
        price: 2000,
        min: 1
      },
      {
        id: 42,
        cat: "drink",
        name: { ko: "환타", en: "Fanta (Can)", zh: "芬达（罐）", ja: "ファンタ（缶）" },
        desc: { ko: "", en: "", zh: "", ja: "" },
        price: 2000,
        min: 1
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
