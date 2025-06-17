
function setLanguage(lang) {
  const translations = {
    it: {
      title: "Piccola Taverna",
      hours: "Orario di apertura: 18:00 - 02:00",
      search: "Cerca...",
      new: "Novità",
      discount: "Sconti",
      newText: "Nuovi drink disponibili ogni settimana!",
      discountText: "Happy hour: 18:00 - 20:00",
      menu: "Menu & Contatti"
    },
    zh: {
      title: "小酒馆",
      hours: "营业时间：18:00 - 02:00",
      search: "搜索...",
      new: "新品",
      discount: "折扣",
      newText: "每周推出新饮品！",
      discountText: "欢乐时光：18:00 - 20:00",
      menu: "菜单和联系方式"
    }
  };
  document.getElementById("title").textContent = translations[lang].title;
  document.getElementById("hours").textContent = translations[lang].hours;
  document.getElementById("search").placeholder = translations[lang].search;
  document.querySelector("#new h2").textContent = translations[lang].new;
  document.querySelector("#discount h2").textContent = translations[lang].discount;
  document.querySelector("#new p").textContent = translations[lang].newText;
  document.querySelector("#discount p").textContent = translations[lang].discountText;
  document.querySelector("footer a").textContent = translations[lang].menu;
}
