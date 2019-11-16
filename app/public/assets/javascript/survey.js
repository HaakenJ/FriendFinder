$(document).ready(function () {
    $('select').formSelect();
    $('.modal').modal();
    const modalInstance = M.Modal.getInstance(elem);

    let user = {};

    $("#submit-btn").on("click", () => {
        user.name = $("#name-input").val().trim();
        user.photo = $("#photo-input").val().trim();
        let scores = [];
        for (let i = 1; i <= 10; i++) {
            scores.push(parseInt($("#q-" + i).val()));
        }
        user.scores = scores;

        $.post("/api/users", user)
        .then((data) => {
            console.log(data);
            alert("Request was successful: " + data);

            modalInstance.open();
        });

        console.log(JSON.stringify(user));
    })
});


