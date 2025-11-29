async function loadCSV() {
    const response = await fetch("65HTTT_Danh_sach_diem_danh.csv");
    const csv = await response.text();

    const rows = csv.trim().split("\n").map(row => row.split(","));

    let html = "<tr>";

    // Header
    rows[0].forEach(col => {
        html += `<th>${col}</th>`;
    });

    html += "</tr>";

    // Data
    for (let i = 1; i < rows.length; i++) {
        html += "<tr>";
        rows[i].forEach(col => {
            html += `<td>${col}</td>`;
        });
        html += "</tr>";
    }

    document.getElementById("csvTable").innerHTML = html;
}

loadCSV();
