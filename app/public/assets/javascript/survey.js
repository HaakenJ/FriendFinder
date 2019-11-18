$(document).ready(function () {
    $('select').formSelect();
    $('.modal').modal();

    let user = {};

    $("#submit-btn").on("click", () => {
        user.name = $("#name-input").val().trim();
        user.photo = $("#photo-input").val().trim();

        if ($("#gender-choice").val() === null) {
            $("#gender-modal").modal("open");
            return;
        }
        user.preference = $("#gender-choice").val().trim();

        let scores = [];
        for (let i = 1; i <= 10; i++) {
            if (isNaN(parseInt($("#q-" + i).val()))) {
                scores.push(0);
            } else {
                scores.push(parseInt($("#q-" + i).val()));
            }
        }
        user.scores = scores;

        if (user.name === "" || user.photo === "") {
            $("#name-url-modal").modal("open");
            return;
        }

        console.log(user);

        $.post("/api/users", user)
            .then((data) => {
                console.log(data);
                $("#match-name").text(data.name);
                $("#match-img").attr("src", data.photo);
                $('#match-modal').modal("open");
            });

        console.log(JSON.stringify(user));
    })
});