// untuk pindah ke pengumpulan atau penukaran
// dan peringatan jika tidak memilih salah satu layanan
function showAlert() {
    Swal.fire({
        title: 'Berhasil!',
        text: 'A clean Earth, a sustainable future for generations to come',
        icon: 'success', // success, error, warning, info, question
        confirmButtonText: 'Oke!'
    });
}
function showAlert1(redirectUrl) {
    Swal.fire({
        title: 'Berhasil!',
        text: 'A clean Earth, a sustainable future for generations to come',
        icon: 'success', // success, error, warning, info, question
        confirmButtonText: 'Oke!'
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = redirectUrl;
        }
    });
}
function redirectUser(){
    var serviceOption = document.getElementById("service").value;

    let  redirectUrl;

    if(serviceOption === 'layanan1'){
        redirectUrl = "pengumpulan/pengumpulan.html";
    }else if(serviceOption === "layanan2") {
        redirectUrl = "tukar point/point.html";
    }

    if(!serviceOption){
        Swal.fire({
            title: 'Warning!',
            text: 'Silakan pilih layanan terlebih dahulu.',
            icon: 'warning',
            confirmButtonText: 'Oke!'
        });
        return;
    }else{
        showAlert1(redirectUrl);
    }
}

// peryakinan ketika tukar point ke hadiah
//dan peringatan point tidak cukup untuk tukar hadiah
function kamuYakin(){
    swal.fire({
        title: 'Kamu yakin?',
        text: 'Kamu Akan Menukarkan Hadiah Dengan Point yang kamu punya',
        icon: 'succes',
        confirmButtonText: 'Tukarkan',
        showCancelButton: true, // Menampilkan tombol Cancel
        cancelButtonText: 'Batal', // Teks untuk tombol Cancel
    }).then((result) => {
        if (result.isConfirmed){
            const totalP = document.querySelector('.point-anda p');

            if(!totalP || totalP.textContent.trim() === ''){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Tidak bisa ditukar karena point tidak cukup!',
                });
            }else{
                tukarPoint();
            }
        }
    })
}

function tukarPoint() {
    Swal.fire({
        title: 'Berhasil!',
        text: 'A clean Earth, a sustainable future for generations to come',
        icon: 'success', // success, error, warning, info, question
        confirmButtonText: 'Oke!'
    }).then((result) => {
        if (result.isConfirmed) {
                const totalP = document.querySelector('.point-anda p');
                const ketP = document.querySelector('.ket-point span');
                const itemP = document.querySelector('.item-point span');
            totalP.textContent = '';
            ketP.textContent = '';
            itemP.textContent = '';
        }
    });
}


// menghilangkan aksi default form yg ngirim
document.getElementById('myButton').addEventListener('click', function (event) {
    event.preventDefault(); // Mencegah form mengirimkan data
});
document.querySelector('myButton-contact').addEventListener('click', function (event) {
    event.preventDefault(); // Mencegah form mengirimkan data
});


document.querySelector('select').addEventListener('change', function () {
    if (this.value === "") {
        alert("Harap Pilih Hadiah!!");
    }
});



// pengumpulan klaim

    // Fungsi untuk menampilkan alert dan pindah ke penukaran
    function klaimPengumpulan(){
        Swal.fire({
            title: 'Berhasil!',
            text: 'A clean Earth, a sustainable future for generations to come',
            icon: 'success', // success, error, warning, info, question
            confirmButtonText: 'Oke!'
        }).then((result) => {
            if (result.isConfirmed) {
                klaimhadiah(); // Panggil fungsi redirect jika OK diklik
            }
        });
    }

    // Fungsi redirect ke URL
    function klaimhadiah() {
        window.location.href = "../tukar point/point.html"; // Ganti dengan link tujuan Anda
    }     

    
    //peringatan point sampah tidak cukup dan konversi ke point  
function tukarkansampah(){
        const totalS = document.querySelector('.total-sampah p');
        const totalP = document.querySelector('.point-anda p');
        const ketP = document.querySelector('.ket-point span');
        if(totalS.textContent === ''){
            pointTidakCukup();
        }else{
            konversiKePoint(); 
    };
}
    function konversiKePoint(){
        swal.fire({
            title: 'Kamu yakin?',
            text: 'Kamu Yakin Ingin Menukar Sampah Ke Point',
            icon: 'succes',
            confirmButtonText: 'Tukarkan',
            showCancelButton: true, // Menampilkan tombol Cancel
            cancelButtonText: 'Batal', // Teks untuk tombol Cancel
        }).then((result) => {
            if (result.isConfirmed){
                const totalS = document.querySelector('.total-sampah p');
                const totalP = document.querySelector('.point-anda p');
                const ketP = document.querySelector('.ket-point span');
                const itemS = document.querySelector('.item-sampah span');
                const itemP = document.querySelector('.item-point span');
                totalP.textContent = totalS.textContent;
                ketP.textContent = totalS.textContent;
                itemP.textContent = totalS.textContent;
                totalS.textContent = '';
                itemS.textContent = '';
            }
            
        })
    }

    function pointTidakCukup(){
        Swal.fire({
            text: 'Tidak Ada Sampah Untuk Di konversi',
            confirmButtonText: 'Oke!'
        })   
    }
