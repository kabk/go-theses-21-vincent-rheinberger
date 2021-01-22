document.addEventListener('DOMContentLoaded', () => {
  const chapterLinks = document.getElementById('mySidenav').querySelectorAll('a');

  chapterLinks.forEach(chapterLink => {
    chapterLink.addEventListener('click', () => {
      closeNav();
    })
  })
})

function openNav() {
  document.getElementById("mySidenav").style.left = "0%";
}

function closeNav() {
  document.getElementById("mySidenav").style.left = "-100%";
}
