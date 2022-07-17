
function initCityTabs() {
  $(document).on('click', '[data-city-control]', function (e) {
    e.preventDefault();
    let dataCity = $(this).data('city-control');

    $(this).addClass('active').siblings('[data-city-control]').removeClass('active');
    $(this).parents('.dropdown').removeClass('opened');

    if (dataCity == "all") {
      $('[data-city]').each(function () {
        if ($(this).data('point') ==  $('[data-point-control].active').data('point-control')) {
          $(this).addClass('active');
        } else {
          $(this).removeClass('active');
        }
      })
    } else {
      $('[data-city]').each(function () {
        if ($(this).data('city') == dataCity) {
          $(this).addClass('active');
        } else {
          $(this).removeClass('active');
        }
      })
    }

    $(this).data('has-tab') ?
      $('[data-has-content]').removeClass('hide').siblings('.js-top-info').addClass('hide') :  
      $('[data-has-content]').addClass('hide').siblings('.js-top-info').removeClass('hide');  

    $('[data-city].active').first().find('.js-goto-map').trigger('click');
    $('.js-city-selected').text($(this).text());

  });
}

function initPointTabs() {
  $(document).on('click', '[data-point-control]', function (e) {
    e.preventDefault();
    let dataPoint = $(this).data('point-control'),
        activeCity = $('[data-city-control].active').data('city-control');

    $(this).addClass('active').siblings('[data-point-control]').removeClass('active');
    $(this)
      .parents('.point-tab-holder')
      .find('[data-point-content=' + dataPoint + ']')
      .removeClass('hide')
      .siblings('[data-point-content]')
      .addClass('hide');

    $('[data-point]').each(function () {
      ($(this).data('point') == dataPoint && activeCity == $(this).data('city')) ? 
        ($(this).addClass('active')) : 
        ($(this).data('point') == dataPoint && activeCity == "all")  ? 
        $(this).addClass('active') : 
        $(this).removeClass('active');
        
    });

    $('[data-point].active').first().find('.js-goto-map').trigger('click');
  });
}
