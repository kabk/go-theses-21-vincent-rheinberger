document.addEventListener('DOMContentLoaded', () => {
  const chapterLinks = document.getElementById('mySidenav').querySelectorAll('a');

  chapterLinks.forEach(chapterLink => {
    chapterLink.addEventListener('click', () => {
      closeNav();
    })
  })
})

function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
