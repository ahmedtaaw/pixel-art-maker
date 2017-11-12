let colorPicker = "#CCC";
let dimensions = [1, 1]
const canvas = document.getElementById('pixel_canvas');

$(document).ready(function () {
    makeGrid()
});

// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
$("form#sizePicker").submit(function (e) {
    e.preventDefault();
    dimensions = [$("#input_height").val(), $("#input_width").val()];
    makeGrid();
    reactivateClick();
});
function reactivateClick(){
     $("td").click(function (e) {
        $(this).css("background-color", colorPicker);
    })
}
$("#colorPicker").change(function (e) {
    colorPicker = $(this).val();
});


function makeGrid() {
    // Your code goes here!
    $(canvas).html("");
    for (let i = 1; i <= dimensions[0]; i++) {
        $(canvas).append($("<tr></tr>"));
    }
    for (let i = 1; i <= dimensions[0]; i++) {
        for (let j = 1; j <= dimensions[1]; j++) {
            $(canvas).find('tr:nth-child(' + i + ')').append($(('<td style="background-color:' + colorPicker + '"></td>')));
        }

    }
}
