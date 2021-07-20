const inputs = document.querySelectorAll('.controls input')

function handleUpdate() {
    const suffix = this.dataset.sizing || '' //blank value is for color as they don't hold px value
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix) 
}

inputs.forEach(input => input.addEventListener('change', handleUpdate)) 
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate)) 

