const navLinks = document.querySelectorAll('.nav ul li a');
const pill = document.querySelector('.nav-pill');
const nav = document.querySelector('.nav');

function movePill(link) {
    const navRect = nav.getBoundingClientRect();
    const linkRect = link.getBoundingClientRect();

    pill.style.left = (linkRect.left - navRect.left) + 'px';
    pill.style.width = linkRect.width + 'px';
}


const activeLink = document.querySelector('.nav ul li a.active');
if (activeLink) movePill(activeLink);


navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
        movePill(this);
    });
});


//-------------------------------------------------------------------
//IMAGEEEEEEEEEEE PROFILE
const img = document.querySelector('.floating_objects');

img.addEventListener('mousemove', (e) => {

  const rect = img.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  const deltaX = x - centerX;
  const deltaY = y - centerY;
  const strength = 15;

  const rotateY = deltaX / strength;
  const rotateX = -deltaY / strength;

  img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

img.addEventListener('mouseleave', () => {
    img.style.transform = `rotateX(0deg) rotateY(0deg)`;

});