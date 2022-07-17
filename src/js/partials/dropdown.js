function dropdown() {
  $(document).on("click", ".dropdown-title", function (e) {
    e.preventDefault();
    let $this = $(this),
      parent = $this.parents(".dropdown-section");

    if (parent.hasClass("opened")) {
      parent.removeClass("opened");
    } else {
      parent.addClass("opened");
    }
  });
}