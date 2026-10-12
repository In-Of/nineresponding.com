// «…через N дней» вместо даты следующего рассказа. Без JS остаётся дата.
document.addEventListener("DOMContentLoaded", function () {
  var el = document.querySelector(".countdown[data-date]");
  if (!el) return;
  var p = el.dataset.date.split("-");
  var target = new Date(+p[0], +p[1] - 1, +p[2]);
  var now = new Date();
  now.setHours(0, 0, 0, 0);
  var days = Math.round((target - now) / 86400000);
  if (days < 0) { el.closest("p").hidden = true; return; }
  var ru = document.documentElement.lang === "ru";
  if (days === 0) el.textContent = ru ? "сегодня" : "today";
  else if (days === 1) el.textContent = ru ? "завтра" : "tomorrow";
  else if (ru) {
    var n10 = days % 10, n100 = days % 100;
    var w = n10 === 1 && n100 !== 11 ? "день" : n10 >= 2 && n10 <= 4 && (n100 < 12 || n100 > 14) ? "дня" : "дней";
    el.textContent = "через " + days + " " + w;
  } else el.textContent = "in " + days + " days";
});
