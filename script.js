
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

