(function ($, Drupal, once) {
    Drupal.behaviors.scratchMenu = {
        attach: function (context, settings) {
            once('scratchMenu', '.scratch-header-menu', context).forEach(function (element) {
                $('.scratch-header-menu-open').click(function() {
                    $('.scratch-header-menu').css('display', 'flex');
                });
                $('.scratch-header-menu-close').click(function() {
                    $('.scratch-header-menu').hide();
                });
            });
        }
    };
})(jQuery, Drupal, once);
