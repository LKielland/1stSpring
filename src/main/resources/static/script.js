function hallo() {
    const url = "/?navn=" + $("#navn").val();

    $.get(url, function(data) {
        $("#hallo").html(data);
    })
}