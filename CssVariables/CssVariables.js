const controls = document.querySelectorAll('.controls input');

function handleInputChange() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix );
  console.log(this.name);
}

controls.forEach(input => input.addEventListener("change", handleInputChange));
controls.forEach(input => input.addEventListener("mousemove", handleInputChange));
