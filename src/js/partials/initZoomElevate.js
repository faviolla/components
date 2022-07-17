function initZoomElevate() {
  $("#zoom-01").ezPlus({
    gallery: 'gallery-elevate',
    cursor: 'pointer',
    galleryActiveClass: "active",
    imageCrossfade: true,
    loadingIcon: "/img/spinner.gif"
  });

  $("#zoom-01").bind("click", function (e) {
    var ez = $('#zoom-01').data('ezPlus');
    ez.closeAll(); //NEW: This function force hides the lens, tint and window
    $.fancybox(ez.getGalleryList());
    return false;
});
}