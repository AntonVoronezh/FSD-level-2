$( ".js-range-slider" ).slider({
    range: true,
    min: 0,
    max: 15000,
    values: [ 5000, 10000 ],
    slide: function( event, ui ) {
      $( ".range__amount" ).val(ui.values[ 0 ] + "P - " + ui.values[ 1 ]  + "P");
    }
  });

  $( ".range__amount" ).val( $( ".js-range-slider" ).slider( "values", 0 ) +
    "P - " + $( ".js-range-slider" ).slider( "values", 1 ) + "P" );

    $(function() {
        $("#slider").slider();
      });

console.log('slider-------');

