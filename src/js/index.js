const button = document.querySelector('.button');

const item = {
  uno: 'hi',
  dos: 'hello'
};

function logSomething() {
  const { uno, dos } = item;
  console.log(uno, dos, 'this is a new message');
}

button.addEventListener('click', logSomething);
