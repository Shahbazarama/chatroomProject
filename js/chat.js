socket(function() {
    var socket = io();
    $("form").submit(function(e) {
        e.preventDefault(); // prevents page reloading
        socket.emit("chat message", $("#messageField").val());
        $("#messageField").val("");
    return  true;
});
})();
