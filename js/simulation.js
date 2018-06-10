
function start_simulation(input_data) {
  console.log("starting simulation with:", input_data);
  initializeAllBalls(input_data);
  clearAllLines()
}
function reset_simulation() {
  console.log("resetting simulation");
  clearAllBalls()
}