(function () {

  $(document).ready(function () {
    $('#input_form').submit(function (e) {
      e.preventDefault();
      let data = {
        a: {
          mass: parseFloat($('#massBallA').val()),
          velocity: parseFloat($('#velocityBallA').val()),
          angle: parseFloat($('#angleBallA').val()),
        },
        b: {
          mass: parseFloat($('#massBallB').val()),
          velocity: parseFloat($('#velocityBallB').val()),
          angle: parseFloat($('#angleBallB').val()),
        },
      };

      start_simulation(data)
    });
  });

})();