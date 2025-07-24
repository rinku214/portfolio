// ハンバーガーメニュー
$("#js-button-drawer").on("click", function () {
  $(this).toggleClass("is-checked");
  $(".header-nav-list").slideToggle();
  $("body").toggleClass("is-fixed");
});

//評価カウンター
$(function () {
  let rated = false;
  let $icon = $(".rating-icon");
  let $count = $(".rating-count");

  $icon.on("click", function () {
    rated = !rated;

    if (rated) {
      $icon.attr("src", "./img/hyouka1.png"); // 評価済画像
      $icon.addClass("active");
      $count.text(Number($count.text()) + 1);
    } else {
      $icon.attr("src", "./img/hyouka2.png"); // 未評価画像
      $icon.removeClass("active");
      $count.text(Number($count.text()) - 1);
    }
  });
});

//skill説明場所
$(".skill").on("click", function () {
  $(this).toggleClass("is-skill");
  $(this).children(".skill-text").stop().slideToggle(350);
});
