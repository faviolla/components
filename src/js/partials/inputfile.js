/* input file */
function handleFileSelect(evt) {
  var files = evt.target.files; // FileList object

  // Loop through the FileList and render image files as thumbnails.
  for (var i = 0, f; f = files[i]; i++) {

      // Only process image files.
      if (!f.type.match('image.*')) {
          continue;
      }

      var reader = new FileReader();

      // Closure to capture the file information.
      reader.onload = (function(theFile) {
          $('#list').parents('form').find('.notice-row').addClass('added');
          return function(e) {
              // Render thumbnail.
              var span = document.createElement('span');
              span.className = 'input-photo-item';
              span.innerHTML = ['<span class="photo-box"><img class="thumb" src="', e.target.result,
                  '" title="', escape(theFile.name), '"/></span>' + '<span class="input-photo-remove">Удалить</span>'].join('');
              document.getElementById('list').insertBefore(span, null);
          };
      })(f);

      // Read in the image file as a data URL.
      reader.readAsDataURL(f);
  }
}

function removeImg(){
  $(document).on("click" , ".input-photo-remove" , function(){
      $(this).parents('form').find('.notice-row').removeClass('added');
      $(this).parents(".input-photo-item").remove();
  });
}
removeImg();

if (document.getElementById('files') !== null) {
    document.getElementById('files').addEventListener('change', handleFileSelect, false);
}

$(".upload-btn-wrapper input[type=file]").change(function(){
var filename = $(this).val().replace(/.*\\/, "");
$("#file-name").html(filename);
});