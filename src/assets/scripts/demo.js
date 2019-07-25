// require('webpack-jquery-ui');
// require('webpack-jquery-ui/css');
// import $ from 'jquery';
// require("jquery");
//         require("webpack-jquery-ui");

import '../../views/common/footer-small/footer-small';
import '../../views/common/header/header';
import '../../views/common/main/main';
import '../../views/common/aside/aside';
import '../../views/common/maincontent/maincontent';
import '../../views/common/logo/logo';
import '../../views/common/header-nav/header-nav';
import '../../views/common/footer-nav/footer-nav';
import '../../views/common/btn/btn';
import '../../views/common/header-nav-mobile/header-nav-mobile';
import '../../views/common/pagination/pagination';
import '../../views/common/range-slider/range-slider';
// require ('ionRangeSlider')

// $(".js-range-slider").ionRangeSlider({
//     type: "double",
//     min: 0,
//     max: 1000,
//     from: 200,
//     to: 500,
//     grid: true
// });

// $( ".js-range-slider" ).height(400);
// $( ".js-range-slider" ).slider();
$( ".js-range-slider" ).slider({
    range: true,
    min: 0,
    max: 15000,
    values: [ 5000, 10000 ],
    slide: function( event, ui ) {
      $( ".range__amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
    }
  });

  $( ".range__amount" ).val( $( ".js-range-slider" ).slider( "values", 0 ) +
    "P - " + $( ".js-range-slider" ).slider( "values", 1 ) + "P" );

console.log('demo.js loadedd');