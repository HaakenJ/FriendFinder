$(document).ready(function () {
    $('select').formSelect();
    $('.modal').modal();

    let user = {};

    $("#submit-btn").on("click", () => {
        user.name = $("#name-input").val().trim();
        user.photo = $("#photo-input").val().trim();
        user.gender = $("#user-gender").val().trim();
        user.preference = $("#gender-choice").val().trim();
        // To-do: specify code for user's choice of gender
        let scores = [];
        for (let i = 1; i <= 10; i++) {
            scores.push(parseInt($("#q-" + i).val()));
        }
        user.scores = scores;

        $.post("/api/users", user)
        .then((data) => {
            console.log(data);
            $("#match-name").text(data.name);
            $("#match-img").attr("src", data.photo);
            $('#modal1').modal('open'); 
        });

        console.log(JSON.stringify(user));
    })
});


