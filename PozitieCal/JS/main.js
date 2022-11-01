const table = document.getElementById('table');

for (let i = 1; i <= 8; i++) {
    table.innerHTML += `<div class='row' row='${i}'></div>`;
}

const rows = document.querySelectorAll('.row');
console.log(rows);

rows.forEach(row => {
    for (let i = 1; i <= 8; i++) {
        row.innerHTML += `<div class='cell' r=${row.getAttribute('row')} c=${i}></div>`
    }
})
const cells = document.querySelectorAll('.cell');
cells.forEach((c, i) => {
    let row = Number(c.getAttribute('r'));
    let col = Number(c.getAttribute('c'));
    if ((row % 2 === 0) && (col % 2 === 0)) c.classList.add('black');
    if ((row % 2 !== 0) && (col % 2 !== 0)) c.classList.add('black');
})

const horseRow = Number(prompt('Indicati pozitia randului calului'));
const horseCol = Number(prompt('Indicati pozitia coloanei calului'));

const horse = {
    r: horseRow,
    c: horseCol
}

cells.forEach(cell => {
    let row = Number(cell.getAttribute('r'));
    let col = Number(cell.getAttribute('c'));
    if (row === horse.r && col === horse.c)
        cell.innerText = 1;
    else
        cell.innerText = 0;
})

const horsePossiblePosition = [
    { r: horse.r + 1, c: horse.c + 2 },
    { r: horse.r + 1, c: horse.c - 2 },
    { r: horse.r - 1, c: horse.c + 2 },
    { r: horse.r - 1, c: horse.c - 2 },
    { r: horse.r + 2, c: horse.c + 1 },
    { r: horse.r + 2, c: horse.c - 1 },
    { r: horse.r - 2, c: horse.c + 1 },
    { r: horse.r - 2, c: horse.c - 1 }
]

const validHorsePosition = horsePossiblePosition.filter(p =>
    ((p.r < 8 && p.r > 0) && (p.c < 8 && p.c > 0))
)

cells.forEach(cell => {
    let row = Number(cell.getAttribute('r'));
    let col = Number(cell.getAttribute('c'));

    validHorsePosition.forEach(vP => {
        if (vP.r === row && vP.c === col)
            cell.classList.add('green');
    })
})