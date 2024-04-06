let ucenici = [
    {
        ime: "Ana",
        prezime: "Kovačević",
        godina_rodjenja: 2005,
        ocjene: {
            matematika: 4,
            maternji_jezik: 5,
            engleski_jezik: 3,
            biologija: 4,
            likovna_kultura: 5,
        },
    },
    {
        ime: "Marko",
        prezime: "Petrović",
        godina_rodjenja: 2006,
        ocjene: {
            matematika: 5,
            maternji_jezik: 4,
            engleski_jezik: 5,
            biologija: 3,
            likovna_kultura: 4,
        },
    },
    {
        ime: "Elena",
        prezime: "Jovanović",
        godina_rodjenja: 2005,
        ocjene: {
            matematika: 3,
            maternji_jezik: 5,
            engleski_jezik: 4,
            biologija: 4,
            likovna_kultura: 4,
        },
    },
    {
        ime: "Ivan",
        prezime: "Popović",
        godina_rodjenja: 2007,
        ocjene: {
            matematika: 5,
            maternji_jezik: 4,
            engleski_jezik: 5,
            biologija: 5,
            likovna_kultura: 3,
        },
    },
    {
        ime: "Jelena",
        prezime: "Nikolić",
        godina_rodjenja: 2006,
        ocjene: {
            matematika: 4,
            maternji_jezik: 3,
            engleski_jezik: 5,
            biologija: 4,
            likovna_kultura: 4,
        },
    },
    {
        ime: "Stefan",
        prezime: "Stojanović",
        godina_rodjenja: 2007,
        ocjene: {
            matematika: 5,
            maternji_jezik: 4,
            engleski_jezik: 5,
            biologija: 3,
            likovna_kultura: 5,
        },
    },
    {
        ime: "Milica",
        prezime: "Simić",
        godina_rodjenja: 2005,
        ocjene: {
            matematika: 4,
            maternji_jezik: 5,
            engleski_jezik: 4,
            biologija: 3,
            likovna_kultura: 4,
        },
    },
    {
        ime: "Nikola",
        prezime: "Pavlović",
        godina_rodjenja: 2006,
        ocjene: {
            matematika: 3,
            maternji_jezik: 4,
            engleski_jezik: 5,
            biologija: 5,
            likovna_kultura: 4,
        },
    },
    {
        ime: "Sara",
        prezime: "Ilić",
        godina_rodjenja: 2007,
        ocjene: {
            matematika: 5,
            maternji_jezik: 3,
            engleski_jezik: 5,
            biologija: 4,
            likovna_kultura: 3,
        },
    },
    {
        ime: "Luka",
        prezime: "Đorđević",
        godina_rodjenja: 2005,
        ocjene: {
            matematika: 4,
            maternji_jezik: 4,
            engleski_jezik: 4,
            biologija: 5,
            likovna_kultura: 5,
        },
    },
];

const generisiIzracunajProsjek = () => {
    ucenici.forEach((student) => {
        student.izracunajProsjek = function () {
            let sumaOcjeneStudenta = 0;
            let count = 0;
            for (let predmet in this.ocjene) {
                sumaOcjeneStudenta += this.ocjene[predmet];
                count++;
            }
            let prosjekStudenta = sumaOcjeneStudenta / count;
            this.prosjek = prosjekStudenta;
        };
    });

    ucenici.forEach((student) => student.izracunajProsjek());
};

const izracunajUspjeh = () => {
    const uspjehOpcija = ["odličan", "vrlodobar", "dobar", "dovoljan", "nedovoljan"];

    ucenici.forEach((student) => {
        let uspjehStudenta = "";

        if (student.prosjek > 4.5) {
            uspjehStudenta = `${student.ime} ${student.prezime} je ${uspjehOpcija[0]} student.`;
        } else if (student.prosjek > 4) {
            uspjehStudenta = `${student.ime} ${student.prezime} je ${uspjehOpcija[1]} student.`;
        } else if (student.prosjek > 3) {
            uspjehStudenta = `${student.ime} ${student.prezime} je ${uspjehOpcija[2]} student.`;
        } else if (student.prosjek > 2) {
            uspjehStudenta = `${student.ime} ${student.prezime} je ${uspjehOpcija[3]} student.`;
        } else {
            uspjehStudenta = `${student.ime} ${student.prezime} je ${uspjehOpcija[0]} student.`;
        }
        student.uspjeh = uspjehStudenta;
    });
};

const statistikaUspjeha = (listaUcenika) => {
    const statistikaUspjehaStudenta = {
        odlican: 0,
        vrlodobar: 0,
        dobar: 0,
        dovoljan: 0,
        nedovoljan: 0,
    };

    listaUcenika.forEach((student) => {
        if (student.prosjek > 4.5) {
            statistikaUspjehaStudenta.odlican++;
        } else if (student.prosjek > 4) {
            statistikaUspjehaStudenta.vrlodobar++;
        } else if (student.prosjek > 3) {
            statistikaUspjehaStudenta.dobar++;
        } else if (student.prosjek > 2) {
            statistikaUspjehaStudenta.dovoljan++;
        } else {
            statistikaUspjehaStudenta.nedovoljan++;
        }
    });

    return statistikaUspjehaStudenta;
};

const ucenikCardTemplate = (ucenik) => {
    let ocjene = "";
    for (const [key, value] of Object.entries(ucenik.ocjene)) {
        ocjene += `
            <li class="capitalize flex items-center font-semibold border-b border-b-neutral hover:border-b-base-content transition-all duration-200">
                <p>${key.replace("_", " ")}</p>
                <span>${value}</span>
            </li>
        `;
    }
    return `
        <div class="card bg-neutral shadow-xl">
            <div class="card-body">
                <h2 class="card-title text-primary">${ucenik.prezime} ${ucenik.ime}</h2>
                <p>${ucenik.godina_rodjenja}</p>
                <ul class="space-y-0.5">
                    ${ocjene}
                </ul>
                <div class="badge badge-info ml-auto font-bold mt-3 badge-lg">${ucenik.prosjek}</div>
            </div>
        </div>
    `;
};

const ucenikTableTemplate = (ucenik, index) => {
    return `
        <tr>
            <th>${index + 1}</th>
            <td class="whitespace-nowrap">${ucenik.prezime} ${ucenik.ime}</td>
            <td>${ucenik.godina_rodjenja}</td>
            <td>${ucenik.prosjek}</td>
            <td class="whitespace-nowrap">${ucenik.uspjeh}</td>
        </tr>
    `;
};

const ucenikTable = document.querySelector(".ucenici-tabela");
const studentGrid = document.querySelector(".student-grid");
const selectElement = document.querySelector("select");


selectElement.addEventListener("change", (event) => {
    const selectedOption = event.target.value;
    sortirajUcenike(selectedOption);
});

function sortirajUcenike(option) {
    switch (option) {
        case "Prosjek rastuci":
            ucenici.sort((a, b) => a.prosjek - b.prosjek);
            break;
        case "Prosjek padajuci":
            ucenici.sort((a, b) => b.prosjek - a.prosjek);
            break;
        case "Prezime A-Z":
            ucenici.sort((a, b) => a.prezime.localeCompare(b.prezime));
            break;
        case "Prezime Z-A":
            ucenici.sort((a, b) => b.prezime.localeCompare(a.prezime));
            break;
        default:
            break;
    }

    ucenikTable.innerHTML = "";
    studentGrid.innerHTML = "";

    ucenici.forEach((ucenik, index) => {
        ucenikTable.insertAdjacentHTML("beforeend", ucenikTableTemplate(ucenik, index));
        studentGrid.insertAdjacentHTML("beforeend", ucenikCardTemplate(ucenik));
    });

    return ucenici
}

window.addEventListener("DOMContentLoaded", () => {
    generisiIzracunajProsjek();
    izracunajUspjeh();
    statistikaUspjeha(ucenici);

    ucenici.forEach((ucenik, index) => {
        ucenikTable.insertAdjacentHTML("beforeend", ucenikTableTemplate(ucenik, index));
    });

    ucenici.forEach((ucenik) => {
        studentGrid.insertAdjacentHTML("beforeend", ucenikCardTemplate(ucenik));
    });
});

