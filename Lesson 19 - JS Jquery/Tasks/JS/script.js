//2. динамічно додати 5 нумерованих рядк ів (не через <ol></ol>)

function createListAfterElement(id, length, item) {
    for (var i = 1; i <= length; i++) {
        $("<p><b>" + i + "</b>. " + item + "</p>").appendTo(id);
    }
}
var lines = parseInt(prompt("How many lines would you like to add?"))
createListAfterElement("#list", lines, "list");

//3. Зробити попап(модальне вікно). Показувати його при кліку на кнопку і при зменшенні екрану менше 768рх
$('.popup').click(function () {
    showOrHidePopup(true);
})

$(window).resize(() => {
    showOrHidePopup($(this).width() < 768)
});

function showOrHidePopup(shouldShow) {
    var popup = $('#firstPopup');
    if (shouldShow) {
        popup.addClass('show');
    } else {
        popup.removeClass('show');
    }
}

//4. зробити анімацію завантажуючого прогресбару
function loadProgressBar(seconds){
    $(document).ready(function () {
        $(".progress").animate({ width: "100%" }, {
            duration: seconds * 1000,
            step: function (now, fx) {
                if (fx.prop == 'width') {
                    var progress = Math.round((now / 100) * 100);
                    var str = progress == 100 ? "Loaded" : progress + '%';
                    $(".countup").html(str);
                }
            }
        });
    });
}

var seconds = parseInt(prompt("Input time in seconds", 10));
loadProgressBar(seconds);