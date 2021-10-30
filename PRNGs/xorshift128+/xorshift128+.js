const prompt = require('prompt');
const {PROMPT_PROPERTIES} = require('./constants');

prompt.start();

prompt.get(PROMPT_PROPERTIES, (error, result) => {
  if (error) {
    return errorHandler(error);
  }
  const {firstNumber, secondNumber} = result;
  console.log(`Generated random number: ${xorShift128Plus(+firstNumber, +secondNumber)}`);
});

function xorShift128Plus(firstNumber, secondNumber) {
  let state0 = firstNumber;
  let state1 = secondNumber;

  let [s0, s1] = [state1, state0];
  state0 = s0;

  s1 ^= s1 << 23;
  s1 ^= s1 >> 17;
  s1 ^= s0;
  s1 ^= s0 >> 26;
  state1 = s1;
  return state0 + state1;
}

function errorHandler(error) {
  console.error(error);
  return 1;
}




