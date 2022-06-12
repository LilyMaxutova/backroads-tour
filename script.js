// nav toggle
const btn = document.querySelector('#nav-toggle');
const links = document.querySelector('#nav-links');

btn.addEventListener('click', function() {
  links.classList.toggle('show-links');
});

// scroll link
const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    links.classList.remove('show-links');

    const id = e.target.getAttribute('href').slice(1);
    const elem = document.getElementById(id);

    let position = elem.offsetTop - 62;

    window.scrollTo({
      left: 0,
      top: position,
      behavior: 'smooth'
    });
  });
})