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
    hill4.style.right = value * 1 + 'px';
    hill1.style.marginTop = value * 1.5 + 'px';
});

// Lightbox functionality
document.querySelectorAll('.lightbox-trigger').forEach(item => {
    item.addEventListener('click', function() {
        lightbox.style.display = 'flex';
        lightboxImg.src = this.src;
    });
});

closeLightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Data untuk grafik


const createStaffStatusChart = () => {
    const ctx = document.getElementById('staffStatus').getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Kayu', 'Karet', 'Kertas/Kardus', 'Plastik'],
            datasets: [{
                data: [15.3, 3.8, 16.9, 64.0],
                backgroundColor: ['#FFD700', '#FF8C00', '#90EE90', '#4169E1']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Status Sampah Di Kota Batam'
                }
            }
        }
    });
};

const createBudgetChart = () => {
    const ctx = document.getElementById('budget').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
            datasets: [{
                label: 'Anggaran (Miliar Rupiah)',
                data: [76, 65, 66, 67, 88, 87, 96],
                backgroundColor: '#C71585'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Jumlah Anggaran DLH Kota Batam'
                }
            }
        }
    });
};

// Tambahkan fungsi untuk grafik lainnya
const createStaffDistributionChart = () => {
    const ctx = document.getElementById('staffDistribution').getContext('2d');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Bidang A', 'Bidang B', 'Bidang C', 'Bidang D'],
            datasets: [{
                data: [25, 30, 20, 25],
                backgroundColor: ['#4CAF50', '#FFC107', '#00BCD4', '#E91E63']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Distribusi Staff DLH Kota Batam'
                }
            }
        }
    });
};

const createWasteTransportChart = () => {
    const ctx = document.getElementById('wasteTransport').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli'],
            datasets: [{
                label: 'Transportasi Sampah (Ton)',
                data: [120, 130, 110, 115, 150, 145, 160],
                backgroundColor: '#8B0000',
                borderColor: '#8B0000',
                fill: false
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Transportasi Sampah per Bulan'
                }
            }
        }
    });
};

// Panggil semua fungsi untuk membuat grafik
document.addEventListener('DOMContentLoaded', () => {
    createStaffStatusChart();
    createBudgetChart();
    createStaffDistributionChart();  // Fungsi baru
    createWasteTransportChart();     // Fungsi baru
});