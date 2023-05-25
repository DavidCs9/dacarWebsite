const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log('Soy el script')
    if (entry.isIntersecting) {
      entry.target.classList.add('show')
    } else {
      entry.target.classList.remove('show')
    }
  })
})

const container = document.querySelectorAll('.hidden')
container.forEach((el) => observer.observe(el))
