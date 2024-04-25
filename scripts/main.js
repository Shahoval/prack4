var isDay = true;

function toggleTheme() {
    var body = document.body;
    var description = document.getElementById('description');

    if (isDay) {
        body.style.backgroundColor = 'black';
        description.style.color = 'white'; // Зміна коліру тексту на білий
    } else {
        body.style.backgroundColor = 'white';
        description.style.color = 'black'; // Повернення коліру тексту на чорний
    }

    isDay = !isDay;
}
