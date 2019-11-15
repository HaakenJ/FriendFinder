$(document).ready(function () {
    $('select').formSelect();

    let user = {};

    $("#submit-btn").on("click", () => {
        user.name = $("#name-input").val();
        user.photo = $("#photo-input").val();
        let scores = [];
        for (let i = 1; i <= 10; i++) {
            scores.push(parseInt($("#q-" + i).val()));
        }
        user.scores = scores;

        console.log(JSON.stringify(user));
    })
});


