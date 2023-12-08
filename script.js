let data = [];

function renderTable() {
    const tableBody = document.getElementById('data-body');
    tableBody.innerHTML = '';

    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.nama}</td>
            <td>${item.harga}</td>
            <td>${item.stok}</td>
            <td>
                <button onclick="editData(${item.id})">Edit</button>
                <button onclick="deleteData(${item.id})">Hapus</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

function addData() {
    const nama = document.getElementById('nama').value;
    const harga = document.getElementById('harga').value;
    const stok = document.getElementById('stok').value;

    if (nama && harga && stok) {
        const newItem = {
            id: data.length + 1,
            nama: nama,
            harga: harga,
            stok: stok
        };

        data.push(newItem);
        renderTable();
        document.getElementById('form-data').reset();
    } else {
        alert('Semua kolom harus diisi!');
    }
}

function editData(id) {
    const selectedItem = data.find(item => item.id === id);

    if (selectedItem) {
        const nama = prompt('Edit Nama Barang:', selectedItem.nama);
        const harga = prompt('Edit Harga:', selectedItem.harga);
        const stok = prompt('Edit Stok:', selectedItem.stok);

        if (nama !== null && harga !== null && stok !== null) {
            selectedItem.nama = nama;
            selectedItem.harga = harga;
            selectedItem.stok = stok;

            renderTable();
        }
    }
}

function deleteData(id) {
    const confirmed = confirm('Apakah Anda yakin ingin menghapus data ini?');

    if (confirmed) {
        data = data.filter(item => item.id !== id);
        renderTable();
    }
}

// Inisialisasi tabel saat halaman dimuat
renderTable();
