$('[data-letter]').length > 0 && initTabsLetters();
function initTabsLetters() {
  $(document).on('click', '[data-letter]', function (e) {
    e.preventDefault();
    let $this = $(this),
        $contentSection = $('.letters-content');

    if ($this.data('letter') == 'all') {
      $this.addClass('active').siblings('[data-letter]').removeClass('active');
      $contentSection.find('[data-content]').removeClass('hidden');
    } else {
      $this.addClass('active').siblings('[data-letter]').removeClass('active');
      $this
        .parents('.letters-filter')
        .siblings('.letters-content')
        .find('[data-content]')
        .addClass('hidden');
      $this
        .parents('.letters-filter')
        .siblings('.letters-content')    
        .find('[data-content=' + $this.data('letter') + ']')
        .removeClass('hidden');

        if($contentSection.find('[data-content=' + $this.data('letter') + ']').length == 0) {
          $contentSection.find('[data-content]').addClass('hidden');
        }
    }
  });
}