/*
差し替え仕組みづくり（試行錯誤1）
let city = document.querySelectorAll(".imageButton");
for (each of city){
  each.addEventListener("click", function(){
  let result = document.querySelector(".sashikawari");

switch(this."")  

  })
}
*/

/*Takashi試行錯誤ver.
①押したボタンテキストを取得 
let city = document.querySelectorAll("imageButton");
for (each of city) {
  each.addEventListener("click", function() {
    let osusume =content.textContent
②activeのものを探し、activeを消す。
    let before = document.getElementsByClassName(active);
    before.remove(active);
③①を元にactiveをつける。
    let after = document.getElementById(osusume);
    content.addClass(active);
  })
}
*/

function showContent(city) {
  // すべてのコンテンツを非表示
  var contents = document.querySelectorAll(".content");
  contents.forEach(function (content){
    content.classList.remove("content--active");
  });

    //選択されたコンテンツを表示
    var selectedContent = document.getElementById(city);
    if (selectedContent) {
      selectedContent.classList.add("content--active");
    }
    // URLのハッシュを更新
    window.location.hash = city;

    bokashi0(city+"-bokashi");
}

// ページ読み込み時にハッシュをチェックして表示
window.addEventListener("load", function () {
  console.log("load");
var hash = window.location.hash.substring(1);
  if (hash) {
    showContent(hash);
　}
});

// ハッシュの変更を監視して表示
window.addEventListener("hashchange", function () {
  var hash =window.location.hash.substring(1);
  if (hash) {
    showContent(hash);
  }
});

 
function bokashi0(machi) {
  var bokashi = document.querySelectorAll(".circle-buttons__image");
  bokashi.forEach(function (bokashi){
    bokashi.classList.remove("circle-buttons__image--active");
  });

  var selectedBokashi = document.getElementById(machi);
  if(selectedBokashi) {
    selectedBokashi.classList.add("circle-buttons__image--active");
  };
}

window.addEventListener("DOMContentLoaded", function () {
  console.log("DOMContentLoadedしました");
  function profileShuta() {
    const profileX = document.getElementById("introduction");
    const buttonX = document.querySelector(".button");
    buttonX.addEventListener("click", function () {
      console.log("softbank");
      if (!profileX.classList.contains("active")) {
        profileX.classList.add("active");
      } else {
        profileX.classList.remove("active");
      }
    });
  }

  // 関数を呼び出してイベントリスナーを設定
  profileShuta();
});

$(document).ready(function() {
var pagetop = $('.pagetop');
$(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
          pagetop.fadeIn();
      } else {
          pagetop.fadeOut();
      }
      });
      pagetop.click(function () {
          $('body, html').animate({ scrollTop: 0 }, 500);
            return false;
    });
});
      






