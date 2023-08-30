const typewriterElement = document.querySelector('.typewriter');
const text = typewriterElement.textContent;

typewriterElement.textContent = '';

function typeEffect() {
  let i = 0;
  const typingInterval = setInterval(function () {
	if (i < text.length) {
	  typewriterElement.textContent += text.charAt(i);
	  i++;
	} else {
	  clearInterval(typingInterval);
	}
  }, 100); //tiempo ms
}

typeEffect();