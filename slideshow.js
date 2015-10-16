function moveImage(mainNum, files) {
  $('#main img').attr('src', files[mainNum]);
  $('.thumbnail').eq(mainNum).addClass('current').siblings().removeClass('current');
}

function autoPlay() {
  $('#next').click();
  timer = setTimeout(function(){
    autoPlay();
  }, 2000);
}

$(function () {
  var files = [
  'images/image1.jpg',
  'images/image2.jpg',
  'images/image3.jpg',
  'images/image4.jpg'
  ];
  var img;
  var mainNum = 0;
  var nowPlaying = false;
  for (var i = 0; i < files.length; i++) {
    img = $('<img>').attr('src', files[i]).addClass('thumbnail');
    $('#thumbnails').append(img);
  };
  $('#main').append(
    $('<img>').attr('src', files[0])
  );

  $('.thumbnail').eq(0).addClass('current');

  $('.thumbnail').on('click', function() {
    mainNum = $(this).index();
    moveImage(mainNum ,files);
  });

  $('#prev').on('click', function() {
    mainNum = (mainNum <= 0) ? files.length - 1 : mainNum - 1;
    moveImage(mainNum ,files);
  });

  $('#next').on('click', function() {
    mainNum = (mainNum >= files.length - 1) ? 0 : mainNum + 1;
    moveImage(mainNum ,files);
  });

  $('#play').on('click', function() {
    if (nowPlaying) { return; }
    nowPlaying = true;
    autoPlay();
  });

  $('#stop').on('click', function() {
    clearTimeout(timer);
    nowPlaying = false;
  });

});

