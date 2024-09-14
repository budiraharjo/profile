// Placeholder for future JavaScript functionality if needed
document.addEventListener('DOMContentLoaded', () => {
    const API_KEY = 'YOUR_GOOGLE_API_KEY';
    const SHEET_ID = 'YOUR_SHEET_ID';
    const RANGE = 'Sheet1!A:D'; // Sesuaikan rentang sesuai dengan data di Google Sheets

    const url = `https://docs.google.com/spreadsheets/d/1C0fBCtQ1l7UVwIKGI-ZJAzZTvVKnb8f_orelBaH7lPk/edit?resourcekey=&gid=1985815992#gid=1985815992`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector('#absensiTable tbody');
            const rows = data.values.slice(1); // Mengabaikan header
            rows.forEach((row, index) => {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>${index + 1}</td>
                    <td>${row[0]}</td>
                    <td>${row[1]}</td>
                    <td>${row[2]}</td>
                `;
                tableBody.appendChild(tr);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
