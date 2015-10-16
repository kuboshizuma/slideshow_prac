$(function () {
  var files = [
  'images/image1.jpg',
  'images/image2.jpg',
  'images/image3.jpg',
  'images/image4.jpg'
  ];
  var img;
  for (var i = 0; i < files.length; i++) {
    img = $('<img>').attr('src', files[i]).addClass('thumbnail');
    $('#thumbnails').append(img);
  };
  $('#main').append(
    $('<img>').attr('src', files[0])
  );

  $('.thumbnail').eq(0).addClass('current');

  //1. previewをクリックしたときの処理

  //2. prev、nextボタンをクリックしたときの処理

  //3. 開始、停止ボタンをクリックしたときの処理

});

