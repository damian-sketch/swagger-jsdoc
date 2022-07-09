const core = require('@actions/core');

function confirmPublish() {
  const myInput = core.getInput('inputName', { required: true });
  console.log(myInput);
}
confirmPublish();
