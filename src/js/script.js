$(document).ready(function () {
  stickyHeader();
  productSlider();
  burgerToggle();
  mobileSubmenu();
  btnComponents();
  promoSlider();
  toggleLinkMore();
  addingGradient();
  filterToggle();
  filterToggleMobile();
  priceSlider();
  $('.about-product-titles-holder').length > 0 && stickyMenuActive();
  personalMenuToggle();
  initInputValue();
  $('.select').styler();
  autocompleteInit('.js-autocomplete');
  clearInput();
  showPassword();
  $(".validate_phone").mask("+38 (099) 999 99 99");
  $(".form_validate").formValidation();
  modalAjaxForm();
  initModal();
  accordionInit();
  hoverDropdownMenu();
  initTabs();
  dropdown();
  // for checkout functions
  toggleComment();
  radioTab();
  $('.blog-slider').length > 0 && blogSlider();
  $('#map').length > 0 && initMap();
  $('.city-list').length > 0 && initCityTabs();
  $('.point-tab-controls').length > 0 && initPointTabs();
  $('.js-goto-map').length > 0 && goToMap();
  $('.product-zoom-elevate').length > 0 &&  initZoomElevate();
  $('.easyzoom').length > 0 &&  initEasyZoom();

  searchToggle();
  $('.kit-slider').length > 0 && productKitSlider();

  openingBlock('.accordion-title', '.accordion-body', '.accordion-item');
  scrollingUp('.back-to-top');

  $(window).on('resize', function () {
    let windowWidth = window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth;

    if (windowWidth > 1024) {
      $('.product-scroll-item').length > 0 && initStickyProduct();
    }
    if (windowWidth < 1280) {
      contentToggleMenu();
    } else if (windowWidth >= 1280) {
      $('.nav-list').removeClass('opened');
    }
  }).trigger('resize');


  let galleryThumbs = new Swiper('.gallery-thumbs', {
    watchOverflow: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true
  });

  let galleryTop = new Swiper('.gallery-top', {
    watchOverflow: true,
    spaceBetween: 0,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: galleryThumbs,
    },
    breakpoints: {
      0: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      }
    }
  });

  // gallery vertical
  let galleryThumbsVertical = new Swiper('.gallery-thumbs-v', {
    watchOverflow: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    direction: "vertical"
  });
  let galleryRight = new Swiper('.gallery-right', {
    watchOverflow: true,
    spaceBetween: 0,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: galleryThumbsVertical,
    },
    breakpoints: {
      0: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      }
    }
  });

  $(document).on("click", ".js-add-promo", function () {
    $(this).hide();
    $(this)
      .parents(".promo-link")
      .siblings(".promo-form-holder")
      .show();
  });

})

function stickyHeader() {
  let didScroll,
    lastScrollTop = 0,
    delta = 5,
    header = $('.header-sticky'),
    navbarHeight = header.outerHeight();

  $(window).scroll(function (event) {
    if ($(this).scrollTop() > navbarHeight) {
      header.removeClass('default').addClass('fixed')
    } else if ($(this).scrollTop() <= navbarHeight) {
      header.addClass('default').removeClass('fixed')
    }
    didScroll = true;
  });

  setInterval(function () {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 250);

  function hasScrolled() {
    let st = $(this).scrollTop();

    if (Math.abs(lastScrollTop - st) <= delta)
      return;

    if (st > lastScrollTop && st > navbarHeight) {
      // Scroll Down
      $('.header-sticky').removeClass('nav-down').addClass('nav-up');
      // $('.phone-dropdown').removeClass('opened');

    } else {
      // Scroll Up
      if (st + $(window).height() < $(document).height()) {
        $('.header-sticky').removeClass('nav-up').addClass('nav-down');
      }
    }

    lastScrollTop = st;
  }
}
isotopeInit()
function isotopeInit() {
  let elementsList = $('.template--section-list'),
    nav = $('.template--navigation-list');

  let $grid = elementsList.isotope({
    itemSelector: '.template--section-item',
    layoutMode: 'fitRows'
  });

  nav.on('click', 'a', function (e) {
    e.preventDefault();

    let filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });
  nav.each(function (i, navList) {
    let $navList = $(navList);
    $navList.on('click', 'a', function () {
      $navList.find('.is-active').removeClass('is-active');
      $(this).addClass('is-active');
    })

  })
}

function productSlider() {
  document.querySelectorAll('.product-slider .swiper-container').forEach(function (slider) {
    let parent = slider.closest('.product-slider');
    return new Swiper(slider, {
      slidesPerView: 1,
      watchOverflow: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 10
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 20,
          navigation: {
            nextEl: parent.getElementsByClassName('product-next'),
            prevEl: parent.getElementsByClassName('product-prev'),
          },
        },
        1700: {
          slidesPerView: 5,
          navigation: {
            nextEl: parent.getElementsByClassName('product-next'),
            prevEl: parent.getElementsByClassName('product-prev'),
          },
        },
      },
    });
  })
}
function burgerToggle() {
  let $body = $('body'),
    $bg = $('.bg');

  $(document).on('click', '.burger-button', function () {
    if ($(this).parents('body').hasClass('opened-burger')) {
      $(this).parents('body').removeClass('opened-burger');
      $bg.removeClass('active');
    } else {
      $(this).parents('body').addClass('opened-burger');
      $bg.addClass('active');
    }

    if ($('body').hasClass('opened-search')) {
      $('body').removeClass('opened-search');
    }
  });
  $(document).on('click', '.bg', function () {
    if ($body.hasClass('opened-burger')) {
      $body.removeClass('opened-burger');
      $(this).removeClass('active');
    }
  });
}
function mobileSubmenu() {
  $(document).on('click', '.mobile-menu .submenu_section a', function () {
    $(this).siblings('.submenu').addClass('active');
  });
  $(document).on('click', '.mobile-menu .back', function () {
    $(this).closest('.submenu').removeClass('active');
  });
}

function btnComponents() {
  $(document).on('click', '.btn-components', function () {
    let $this = $(this);
    if ($this.hasClass('active')) {
      $this.removeClass('active').siblings('.components-dropdown').removeClass('active');
    } else {
      $this.addClass('active').siblings('.components-dropdown').addClass('active');
    }
  })
  $(document).mouseup(function (e) {
    let div = $('.components-dropdown'),
      button = $('.btn-components');

    if (!div.is(e.target) && div.has(e.target).length === 0 && button.has(e.target).length === 0) {
      div.removeClass("active");
      button.removeClass("active");
    }
  })
}

function promoSlider() {
  let promoSwiper = new Swiper('.promo-slider .swiper-container', {
    loop: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction'
    }
  });

  let promoSwiper2 = new Swiper('.promo-slider2 .swiper-container', {
    loop: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      320: {
        navigation: false,
      },
      1280: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    },
  });
}

function toggleLinkMore() {
  $(document).on('click', '.js-more', function (e) {
    e.preventDefault();

    var moreText = $(this).data('less'),
      lessText = $(this).data('more'),
      parent = $(this).parents('.text-container');

    if (parent.hasClass('opened')) {
      parent.removeClass('opened').children('.seo-text').addClass('bg-gradient');
      $(this).text(moreText);
    } else {
      parent.addClass('opened').children('.seo-text').removeClass('bg-gradient');
      $(this).text(lessText);
    }
  });
}
function addingGradient() {
  $(window).on('resize', function () {
    $(document).find('.text-block').each(function () {
      if ($(this).find('.text-block__inner').height() > $(this).height()) {
        $(this).addClass('bg-gradient').siblings('.js-more').css('display', 'inline-block');
      } else {
        $(this).removeClass('bg-gradient').siblings('.js-more').css('display', 'none');
      }
    })
  }).trigger('resize');
}

function personalMenuToggle() {
  $(document).on("click", ".js-toggle-pmenu", function (e) {
    e.preventDefault();
    $("body").toggleClass("opened-pmenu");
  });

  $(document).mouseup(function (e) {
    var div = $(".personal-nav");
    if (!div.is(e.target)
      && div.has(e.target).length === 0) {
      $("body").removeClass("opened-pmenu");
    }
  });
}

function filterToggle() {
  $(document).on('click', '.js-filter-title', function () {
    let $this = $(this),
      $parent = $this.parents('.js-filter-box'),
      $filterActive = $this.parents('.horizontal .filter').find('.filter-active');
    if ($parent.hasClass('filter-active')) {
      $parent.removeClass('filter-active')
    } else {
      $filterActive.removeClass('filter-active');
      $parent.addClass('filter-active');
    }
  });

  $(document).mouseup(function (e) {
    if ($(window).width() > 1279) {
      let div = $('.horizontal .js-filter-box.filter-active');
      if (!div.is(e.target) && div.has(e.target).length === 0) {
        div.removeClass('filter-active');
      }
    }
  });
}
function filterToggleMobile() {
  let $body = $('body'),
    $filterHolder = $('.filter-panel__holder'),
    $bg = $('#bg-layout');

  $(document).on('click', '.js-filter-toggle', function (e) {
    e.preventDefault();
    $filterHolder.addClass('opened');
    $bg.addClass('active');
    $body.addClass('filter-opened');
  });

  $(document).on('click', '#bg-layout', function (e) {
    e.preventDefault();
    $filterHolder.removeClass('opened');
    $bg.removeClass('active');
    $body.removeClass('filter-opened');
    $('.js-filter-box').removeClass('filter-active');
  });
}

function priceSlider() {
  let input_0 = $('.price_0'),
    input_1 = $('.price_1'),
    rangeMinValue = input_0.data('original-value'),
    rangeMaxValue = input_1.data('original-value'),
    slider_track = $('.mse2_number_slider');

  $('.mse2_number_slider').slider({
    range: true,
    min: rangeMinValue,
    max: rangeMaxValue,
    values: [rangeMinValue, rangeMaxValue],
    slide: function (event, ui) {
      input_0.val(ui.values[0]);
      input_1.val(ui.values[1]);
    }
  })

  input_0.change(function () {
    var val1 = input_0.val(),
      val2 = input_1.val();

    if (parseInt(val1) > parseInt(val2)) {
      val1 = val2;
      input_0.val(val1);
    }
    slider_track.slider('values', 0, val1);
  });

  input_1.change(function () {
    var val1 = input_0.val(),
      val2 = input_1.val();

    if (parseInt(val2) > rangeMaxValue) {
      input_1.val(rangeMaxValue);
    }
    if (val1 < 0) {
      input_0.val(val1);
    }
    if (parseInt(val1) > parseInt(val2)) {
      val2 = val1;
      input_1.val(val2);
    }
    slider_track.slider('values', 1, val2);
  })
}

function stickyMenuActive() {
  $('.about-product-titles-holder a').bind('click', function (e) {
    e.preventDefault();

    $(document).off('scroll');
    $(this).addClass('active').siblings('a.about-product-title').removeClass('active');

    var target = $(this).attr('href');
    $('html,body').animate({
      scrollTop: $(target).offset().top - 65
    }, 600);
  });
}
function initStickyProduct() {
  var menuPanel = $('.about-product-titles-1').outerHeight();
  var topPos = $('.about-product-section').offset().top - menuPanel;

  $(window).scroll(function () {
    let $top = $(document).scrollTop(),
      pip = $('.stop-sticky-product').offset().top,
      element = $('.product-scroll-item'),
      height = element.outerHeight();
    var titles = $('.about-product-titles-1');

    if ($top > topPos && $top < pip - height - menuPanel) {
      element.addClass('sticky').removeAttr('style');
    } else if (($top > pip - height - menuPanel) && (height < $('.about-product-section').outerHeight())) {
      element.removeClass('sticky').css({ 'position': 'absolute', 'bottom': '0' });
    } else {
      element.removeClass('sticky');
    }

    if ($top > $('.about-product-section').offset().top && $top < pip - 200) {
      titles.closest('.description-column').addClass('fixed-menu');
    } else {
      titles.closest('.description-column').removeClass('fixed-menu');
    }
  });
}

$(window).scroll(function () {
  var scrollDistance = $(this).scrollTop();

  $('.section-item').each(function () {
    var target = $(this).offset().top;
    var id = $(this).attr('id');
    var menuHeader = $('.about-product-titles-1').outerHeight() + 21;

    if (scrollDistance >= target - menuHeader) {
      $('.about-product-titles-holder a.active').removeClass('active');
      $('.about-product-titles-holder a[href="#' + id + '"]').addClass('active');
    }
  });
});

function initInputValue() {
  $(".input").each(function () {
    $(this).on("blur input", inputHasValue);
  });
  $(".input").each(inputHasValue);
}

function inputHasValue() {
  $(this).val() != "" ? $(this).addClass("has-value") : $(this).removeClass("has-value");
}

function autocompleteInit(elements) {
  $(elements).each(function (i, element) {
    let input = $(element),
      url = input.data('source');

    $.get(url, function (data) {
      input.autocomplete({
        minLength: 0,
        source: data,
        minLength: 1,
        search: function (event, ui) {
          setTimeout(() => {
            let w = $(this)
              .autocomplete("widget")
              .find("div"),
              re = new RegExp("(" + this.value + ")", "i");
            w.html((i, html) => html.replace(re, "<span class='active-letter'>$1</span>"));
          }, 100);
        },
        select: function (event, ui) {
          console.log(ui.item ? "Selected: " + ui.item.value + " aka " + ui.item.label : "Nothing selected, input was " + this.value);
          if (ui.item) {
            $('#city-apply').parents('.btn-holder').show();
          } else {
            $('#city-apply').parents('.btn-holder').hide();
          }
        },
        open: function (result) {
          if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
            $('.ui-autocomplete').off('menufocus hover mouseover');
          }
        },
        response: function (event, ui) {
          if (!ui.content.length) {
            // let noResult = { value:"",label:"No results found" };
            // ui.content.push(noResult);
            $('.no-result').addClass('show');
            $('#city-apply').parents('.btn-holder').hide();
          } else {
            $('.no-result').removeClass('show');
          }
        },
        change: function (event, ui) {
          if (ui.item) {
            $('#city-apply').parents('.btn-holder').show();
          } else {
            $('#city-apply').parents('.btn-holder').hide();
          }
        }
      });
    })
  })
  // $('.input-city').autocomplete('widget').addClass('city-autocomplete');
}

function clearInput() {
  $(document).on('click', '.js-clear-input', function (e) {
    e.preventDefault();
    $(this).parents('.input-holder').removeClass('correct').find('.input').val('').removeClass('has-value');
  });
}
function showPassword() {
  $(document).on("click", ".js-password", function () {
    if (!$(this).hasClass("password-active")) {
      $(this).siblings(".input").prop("type", "text");
      $(this).addClass("password-active");
    } else {
      $(this).siblings(".input").prop("type", "password");
      $(this).removeClass("password-active");
    }
  });
}

function modalAjaxForm() {
  $(document).on("submit", ".js-send", function (e) {
    e.preventDefault();

    let formData = new FormData(this);
    let $this = $(this);
    let main_modal = $("#modal-main");
    let method = $this.data("method") || $this.attr("method");
    let action = $this.data("action") || $this.attr("action");

    $.ajax({
      url: action,
      type: method,
      dataType: "json",
      data: formData,
      cache: false,
      contentType: false,
      processData: false,
      success: function (res) { },
    });

    if ($this.attr("data-success")) {
      $.ajax({
        url: $this.attr("data-success"),
        type: method,
        dataType: "text",
        //  data: formData,
        cache: false,
        contentType: false,
        processData: false,
        success: function (res) {
          main_modal.html(res);
          main_modal.modal('show');
          $this.find('.input-holder').removeClass('correct').find('input, select, textarea').not(':input[type=button], :input[type=submit]').val('').removeClass('has-value');
          $this.find('.rating input').prop('checked', false);
        }
      })
    }
  })
}

/* init Map */
// function initMap() {
//   var uluru = { lat: 50.4531, lng: 30.5215 },
//     marker = "../img/icons/marker.svg";
//   window.map = new google.maps.Map(
//     document.getElementById('map'), {
//     zoom: 16,
//     center: uluru,
//     disableDefaultUI: true
//   });
//   window.marker = new google.maps.Marker({
//     position: uluru,
//     map: map,
//     icon: marker,
//   });
// }

function initMap() {
  let uluru = { lat: 49.994507, lng: 36.14574 };
  marker = "/img/icons/marker.svg";
  window.GoogleMap = new google.maps.Map(
    document.getElementById('map'), {
    zoom: 10,
    center: uluru,
    disableDefaultUI: true
  });
  // window.marker = new google.maps.Marker({
  //   position: uluru,
  //   map: GoogleMap,
  //   icon: marker,
  // });
}
let markers = [];

let contactsArr = [];
let $arrItems = $('.address__item');
$arrItems.each(function () {
  let $this = $(this),
    item = {
      gmaps_s: $this.data('gmaps-s'),
      gmaps_n: $this.data('gmaps-n'),
      phone: $this.data('phone'),
      schedule: $this.data('schedule'),
      address: $this.data('address'),
      subway: $this.data('subway'),
      place: $this.data('place')
    }
  contactsArr.push(item)
})

setTimeout(function () {
  window.SetMarker = function (s, n, address, schedule, phone, subway, place) {
    if (s == 0 || n == 0) return;
    let marker = new google.maps.Marker({
      map: GoogleMap,
      position: { lat: +s, lng: +n },
      icon: '../img/icons/marker.svg'
    }),
      infowindow = new google.maps.InfoWindow(),
      cont = "<div class='infoblock'>";

    cont += "<div class='contact-address'>" + address + "</div>";
    if (subway) {
      cont += "<div class='subway'><i class='icon-subway'></i><span>" + subway + "</span></div>";
    }
    if (place) {
      cont += "<div class='address__descr'>" + place + "</div>";
    }
    cont += "<div class='address__contact'><div class='address__phone'><i class='icon-address-phone'></i><a href='tel:" + phone + "'>" + phone + "</a></div>";

    cont += "<div class='address__time'><i class='icon-address-time'></i><span>" + schedule + "</span></div></div>";
    cont += "</div>";
    google.maps.event.addListener(marker, 'click', (function (marker, content, infowindow) {
      return function () {
        infowindow.setContent(content);
        infowindow.open(GoogleMap, marker);
      };
    })(marker, cont, infowindow));
    markers.push(marker);
  }
  // for (var i = 0; i < gmArr.length; i++) {
  //   SetMarker(gmArr[i]['GPS_N'], gmArr[i]['GPS_S'], gmArr[i]['ADDRESS'], gmArr[i]['SCHEDULE'], gmArr[i]['UF_MOBILE'])
  // }
  for (var i = 0; i < contactsArr.length; i++) {
    SetMarker(contactsArr[i]['gmaps_s'], contactsArr[i]['gmaps_n'], contactsArr[i]['address'], contactsArr[i]['schedule'], contactsArr[i]['phone'], contactsArr[i]['subway'], contactsArr[i]['place'])
  }
}, 1000);

function clearMarkers() {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
}

function goToGmaps(e) {
  let parent = $(e).parents('.address__item');
  GoogleMap.setCenter({ lat: +parent.data('gmaps-s'), lng: +parent.data('gmaps-n') });
  GoogleMap.setZoom(18);
  $('body').scrollTop(320);

  $(window).on('resize', function () {
    let windowWidth =
      window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (windowWidth < 768) {
      let contentParent = $('.shops-section');

      contentParent
        .find('[data-content="data-map"]')
        .addClass('active')
        .siblings('[data-content]')
        .removeClass('active');
      contentParent
        .find('[data-tab="data-map"]')
        .addClass('active')
        .siblings('[data-tab]')
        .removeClass('active');
    }
  }).trigger('resize');

  return false;
}


/* modals */
function initModal() {
  var main_modal = $("#modal-main");

  // modal closing
  main_modal.on("hidden.bs.modal", function () { });

  // modal showing
  main_modal.on("show.bs.modal", function () {
    centerModal(main_modal);
    initInputValue();
    $(".validate_phone").mask("+38 (099) 999 99 99");
    $(".form_validate").formValidation();
    modalAjaxForm();
    $('.select').styler();
  });

  // bg clicking
  $(document).on("click", ".modal-backdrop", function () { });

  $(document).on("click", "[data-openmodal]", function (e) {
    e.preventDefault();
    var link = $(this).data("openmodal");
    let thisLink = $(this),
      mapLat = thisLink.data("gmaps_s"),
      mapLng = thisLink.data("gmaps_n");
    main_modal.load(link, function () {
      main_modal.modal("show");
      if (thisLink.hasClass("js-toggle-map")) {
        initMap();
        GoogleMap.setCenter({ lat: +mapLat, lng: +mapLng })
        marker.setPosition({ lat: +mapLat, lng: +mapLng })
      }
    });
  });
}

function centerModal(modalBox) {
  if (modalBox === undefined) {
    modalBox = $("#modal-main");
  }

  var wrapper = $("body"),
    modalDialog = modalBox.find(".modal-dialog"),
    widthMain = wrapper.outerWidth(),
    widthModal = modalDialog.find(".modal-content").outerWidth(),
    centerDistance = (widthMain - widthModal) / 2,
    centerVertical = ($(window).outerHeight() - modalDialog.outerHeight()) / 2;

  modalDialog.css("margin-left", centerDistance + "px");

  if (centerVertical > 0) {
    modalDialog.css("margin-top", centerVertical + "px");
  } else {
    modalDialog.css("margin-top", "0");
  }

  $(window).resize(function () {
    var modalDialog = modalBox.find(".modal-dialog"),
      widthMain = wrapper.outerWidth(),
      widthModal = modalDialog.find(".modal-content").outerWidth(),
      centerDistance = (widthMain - widthModal) / 2;

    modalDialog.css("margin-left", centerDistance + "px");
  });
}
function accordionInit() {
  $(document).on("click", ".accordion-header", function () {
    let $this = $(this),
      $parent = $this.parents(".accordion-item");
    if ($parent.hasClass("active")) {
      $parent.removeClass("active");
      $this.siblings().slideUp();
    } else {
      $parent.addClass("active");
      $this.siblings().slideDown();
    }
  });
};
function hoverDropdownMenu() {
  $(".header-nav > li").hover(
    function () {
      if ($(this).children(".menu-dropdown").length) {
        $(this).stop().addClass("hover");
        $(".bg").stop().addClass("active");
        $("body").stop().addClass("opened-dropdown");
      }
    },
    function () {
      $(this).stop().removeClass("hover");
      $(".bg").stop().removeClass("active");
      $("body").stop().removeClass("opened-dropdown");
    }
  );
}

function initTabs() {
  $(document).on("click", "[data-tab]", function (e) {
    e.preventDefault();
    $(this).addClass("active").siblings("[data-tab]").removeClass("active");
    $(this)
      .parents(".tab-holder")
      .find("[data-content=" + $(this).data("tab") + "]")
      .addClass("active")
      .siblings("[data-content]")
      .removeClass("active");
  });
}

function toggleComment() {
  $(document).on("click", ".js-toggle-comment", function (e) {
    e.preventDefault();
    $(this)
      .toggleClass("opened")
      .siblings(".js-toggle-block")
      .slideToggle();
  });
}



function radioTab() {
  $(document).on("change", ".js-radio", function (e) {
    var activeConteiner = $(this).closest(".tab-link");
    var activeData = activeConteiner
      .parents(".tab-holder")
      .find("[data-section=" + activeConteiner.data("radio") + "]");

    activeConteiner
      .addClass("active")
      .siblings()
      .removeClass("active");
    activeData
      .addClass("active")
      .siblings("[data-section]")
      .removeClass("active");
  });
}

function searchToggle() {
  let $body = $("body"),
    searchInput = $(".search-dropdown .input");
  $(document).on("click", ".search-link", function () {
    if ($body.hasClass("opened-search")) {
      $body.removeClass("opened-search");
      $(".bg").removeClass("active");
      searchInput.val("");
    } else {
      $body.addClass("opened-search");
      $(".bg").addClass("active");
    }
  });
  $(document).on("click", ".opened-search .bg.active", function () {
    $body.removeClass("opened-search");
    $(".bg").removeClass("active");
    searchInput.val("");
  });
}

function showPreloader() {
  $(".js-preloader").show();
}
function hidePreloader() {
  $(".js-preloader").hide();
}

function blogSlider() {
  document.querySelectorAll('.blog-slider .swiper-container').forEach(function (slider) {
    let parent = slider.closest('.blog-slider');
    return new Swiper(slider, {
      slidesPerView: 1,
      watchOverflow: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 20,
          navigation: {
            nextEl: parent.getElementsByClassName('blog-next'),
            prevEl: parent.getElementsByClassName('blog-prev'),
          }
        }
      }
    });
  })
}
function contentToggleMenu() {
  $(document).on('click', '.content-nav .active', function () {
    let $this = $(this);
    list = $this.closest('.nav-list'),
      body = $('body'),
      $bgItem = body.find('.bg-content-layout'),
      bgItem = $('<div class="bg-content-layout"></div>');

    if (list.hasClass('opened')) {
      list.removeClass('opened');
      $bgItem.fadeOut(500, function () {
        $(this).remove()
      });
    } else {
      list.addClass('opened');
      body.append(bgItem);
    }
  })

  $(document).mouseup(function (e) {
    let div = $('.content-nav .nav-list'),
      bg = $('.bg-content-layout');
    if (!div.is(e.target)
      && div.has(e.target).length === 0) {
      div.removeClass('opened');
      bg.fadeOut(500, function () {
        $(this).remove()
      });
    }
  });
}

function goToMap() {
  $(document).on('click', '.js-goto-map', function () {
    let map = $('#map'),
      gmaps_s = $(this).data('gmaps-s'),
      gmaps_n = $(this).data('gmaps-n')
    zoom = $(this).data('zoom');
    $('.point-item.point-active').removeClass('point-active');
    $(this).parents('.point-item').addClass('point-active');
    map.data('gmaps-s', gmaps_s).data('gmaps-n', gmaps_n);
    initMap();
  })
}
