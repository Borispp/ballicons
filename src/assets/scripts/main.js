// ==============================================
// Init common plugins
// ==============================================
function formatState (state) {
  if (!state.id) { return state.text; }
  var $state = $(
    '<span><img src="./assets/images/content/' + state.element.value.toLowerCase() + '.jpg" class="img-flag" /> ' + state.text + '</span>'
  );
  return $state;
};


// Select2
$('.select2-lang').select2({
	minimumResultsForSearch: -1,
	templateResult: formatState,
  templateSelection: formatState
});

// ==============================================
// ScrollToPage
// ==============================================

var scrollToPage = (target) => {
	var y = 0;
	if (target && $(target).length) {
		y = $(target).offset().top;
	}
	$elements.page.animate({ scrollTop: y-110 }, 300)
	return
}

$('.scrollto').on('click', function (e) {
	e.preventDefault()
	scrollToPage($(this).attr('href'));
});

// ==============================================
// Elements
// ==============================================
var $elements = {
	page: $('html, body'),
	body: $('body'),
	overlay: $('#overlay')
}
