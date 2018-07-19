function handleThumbnailClicks() {
  $('.thumbnail').on('click', function() {
    $('.hero img').attr('src', $(this).find('img').attr('src')).attr('alt',$this.find('img').attr('alt') );
    
  });
}

$(handleThumbnailClicks);
