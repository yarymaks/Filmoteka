window.addEventListener('scroll', event => {
  const elem = document.getElementById('gototop');
  const y = scrollY;
  if (y > 200) {
    elem.style.display = 'block';
  } else {
    elem.style.display = 'none';
  }
});
$(document).ready(function () {
  $('.pulse').on('click', function (event) {
    if (this.hash !== '') {
      event.preventDefault();
      const hash = this.hash;
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top,
        },
        1500,
        function () {
          window.location.hash = hash;
        },
      );
    }
  });
});
