
function saveAnswer(event, key, nextPage) {
  event.preventDefault();
  const answer = document.querySelector('input[name="answer"]:checked');
  if (answer) {
    sessionStorage.setItem(key, answer.value);
    window.location.href = nextPage;
  }
}
