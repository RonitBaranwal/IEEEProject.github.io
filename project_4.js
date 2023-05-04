const yesEle = document.getElementById('yes');
const noEle = document.getElementById('no');
const showForm = () => {
  const formEle = document.getElementById('form-id');
  formEle.classList.toggle('disp');
}
const showFeedback = () => {
  const feedbackEle = document.getElementById('if-no');
  feedbackEle.classList.toggle('opt-no');
}
yesEle.addEventListener('click', showForm);
noEle.addEventListener('click', showFeedback);