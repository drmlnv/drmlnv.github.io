// ��� JavaScript ��� �����
function playAudio(audioId) {
    var audio = document.getElementById(audioId);
    audio.play();
}
function toggleTranslationColumn() {
    // Находим все ячейки столбца с переводом
    var translationCells = document.querySelectorAll('.russian-text');

    // Переключаем видимость каждой ячейки
    translationCells.forEach(function(cell) {
        if (cell.style.display === 'none') {
            cell.style.display = ''; // Показываем ячейку, если она скрыта
        } else {
            cell.style.display = 'none'; // Скрываем ячейку, если она видима
        }
    });
}
