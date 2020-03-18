$(function() {
 
  $('.menu-trigger').on('click', function() {
    $(this).toggleClass('active');
    $('#sp-menu').fadeToggle();
    return false;
  });
 
 });


// $(function(){
//     // メニュートリガータグがクリックされたときの処理
//     $('menu-trigger').on('click',function(){
//         // animateでアニメーション効果を設定する
//         $('body,html').animate({
//             // 最上部に移動する
//             scroll bottom:0
//     // アニメーションの動作時間を0.8秒かけて移動するとしている
//     // 他にも「slow」、「normal」、「fast」で指定することも可能
//         },800);
//         return false;
//     });
// });