// efek parallax
let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');
let lightbox = document.getElementById('lightbox');
let lightboxImg = document.getElementById('lightbox-img');
let closeLightbox = document.getElementById('close-lightbox');

window.addEventListener('scroll', ()=> {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    leaf.style.top = value * -1 + 'px';
    leaf.style.left = value * 1 + 'px';
    hill5.style.left = value * 1 + 'px';
    hill4.style.top = value * 1 + 'px';
    hill1.style.marginTop = value * 1.5 + 'px';
});

// alert
function showAlert() {
    Swal.fire({
        title: 'Berhasil!',
        text: 'A clean Earth, a sustainable future for generations to come',
        icon: 'success', // success, error, warning, info, question
        confirmButtonText: 'Oke!'
        });
};

document.getElementById('myButton').addEventListener('click', function (event) {
    event.preventDefault(); // Mencegah form mengirimkan data
});

