/**
 * Mageplaza
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Mageplaza.com license that is
 * available through the world-wide-web at this URL:
 * https://www.mageplaza.com/LICENSE.txt
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade this extension to newer
 * version in the future.
 *
 * @category    Mageplaza
 * @package     Mageplaza_Blog
 * @copyright   Copyright (c) Mageplaza (https://www.mageplaza.com/)
 * @license     https://www.mageplaza.com/LICENSE.txt
 */


require([
    'jquery'
], function ($) {
    'use strict';

    $(document).ready(function() {
        $('input[name="rating"]:checked').next('label').css('opacity', '1');

        $('input[name="rating"]').change(function() {
            $(this).next('label').css('opacity', '1').siblings().css('opacity', '');
        });

        $('.selectpicker option').each(function() {
            var optionValue = $(this).val();
            if (localStorage.getItem('submitted-' + optionValue)) {
                $(this).attr('disabled', 'disabled');
            }
        });

        $('#review-button').on('click', function(event) {
            event.preventDefault();
            var $selectPicker = $('.selectpicker');
            var selectedOption = $selectPicker.val();
            var $errorMessage = $('#error-message');
            var $successMessage = $('#success-message');

            if (!selectedOption) {
                $errorMessage.show();
                $selectPicker.addClass('change-color-border');
            } else {
                localStorage.setItem('submitted-' + selectedOption, true);
                $errorMessage.hide();
                $selectPicker.removeClass('change-color-border');
                $successMessage.show();
                setTimeout(function() {
                    location.reload(true);
                }, 1500);
            }
        });
    });
});
