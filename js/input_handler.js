function getAAngle() {
  return parseFloat($('#angleBallA').val())
}

function getBAngle() {
  return parseFloat($('#angleBallB').val())
}

(function () {

  function disable_inputs() {
    $('#massBallA').prop( "disabled", true );
    $('#velocityBallA').prop( "disabled", true );
    $('#angleBallA').prop( "disabled", true );

    $('#massBallB').prop( "disabled", true );
    $('#velocityBallB').prop( "disabled", true );
    $('#angleBallB').prop( "disabled", true );

    $('#submitButton').prop( "disabled", true );
    $('#resetButton').prop( "disabled", false );
  }

  function enable_inputs() {
    $('#massBallA').prop( "disabled", false );
    $('#velocityBallA').prop( "disabled", false );
    $('#angleBallA').prop( "disabled", false );

    $('#massBallB').prop( "disabled", false );
    $('#velocityBallB').prop( "disabled", false );
    $('#angleBallB').prop( "disabled", false );

    $('#submitButton').prop( "disabled", false );
    $('#resetButton').prop( "disabled", true );
  }

  $(document).ready(function () {
    $('#input_form').submit(function (e) {
      e.preventDefault();
      let data = {
        a: {
          mass: parseFloat($('#massBallA').val()),
          velocity: parseFloat($('#velocityBallA').val()),
          angle: getAAngle(),
        },
        b: {
          mass: parseFloat($('#massBallB').val()),
          velocity: parseFloat($('#velocityBallB').val()),
          angle: getBAngle(),
        },
      };

      disable_inputs();
      start_simulation(data);
    });

    $('#resetButton').click(function () {
      reset_simulation();
      enable_inputs();
    });

    $('#angleBallA').change(function () {
      let l = lines[0];
      if(l !== undefined){
        l.setAngle(getAAngle())
      }
    });

    $('#angleBallB').change(function () {
      let l = lines[1];
      if(l !== undefined){
        l.setAngle(getAAngle())
      }
    });
  });

})();