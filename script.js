$(function() {
  const sidebar = $('.sidebar');
  const toggle = $('.toggle-btn');

  function adjustSidebar() {
    const w = $(window).width();
    if (w < 700) {
      sidebar.removeClass('collapsed').addClass('hidden-mobile');
    } else {
      sidebar.show().removeClass('hidden-mobile');
    }
  }

  toggle.on('click', function() {
    const w = $(window).width();
    if (w < 700) {
      sidebar.toggleClass('hidden-mobile');
    } else {
      sidebar.toggleClass('collapsed');
    }
  });

  $(window).on('resize', adjustSidebar);
  adjustSidebar();
});
