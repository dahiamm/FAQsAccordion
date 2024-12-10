document.addEventListener("DOMContentLoaded", () => {
  const blocks = document.querySelectorAll('.block')

  blocks.forEach(block => {
    block.addEventListener('click', () => {
      const content = block.querySelector('.content')
      const icon = block.querySelector('.icon-plus')

      block.classList.toggle('active')

      if (block.classList.contains('active')) {
        content.style.maxHeight = `${content.scrollHeight}px`

        icon.src = '/assets/images/icon-minus.svg'
        icon.alt = 'Cerrar acordeón'
      } else {
        content.style.maxHeight = '0'

        icon.src = '/assets/images/icon-plus.svg'
        icon.alt = 'Abrir acordeón'
      }
    })
  })
})



