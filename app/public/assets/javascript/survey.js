$(document).ready(function () {
    // Initialize Materialize forms and modals.
    $('select').formSelect();
    $('.modal').modal();
    $('.sidenav').sidenav();

    let user = {};

    $("#submit-btn").on("click", () => {
        $("#match-img").removeAttr("src");
        $("#match-name").text("");
        user.name = $("#name-input").val().trim().replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '').replace(/\s+/g, "");
        user.photo = $("#photo-input").val().trim();
        user.gender = $("#user-gender").val();

        // Let user know that they must enter a gender and preference.
        if ($("#gender-choice").val() === null ||
            $("#user-gender").val() === null) {
            $("#gender-modal").modal("open");
            return;
        }
        user.preference = $("#gender-choice").val().trim();

        // Create scores array.
        let scores = [];
        for (let i = 1; i <= 10; i++) {
            if (isNaN(parseInt($("#q-" + i).val()))) {
                scores.push(0);
            } else {
                scores.push(parseInt($("#q-" + i).val()));
            }
        }
        user.scores = scores;

        // Let user know they must enter a name and photo url.
        if (user.name === "" || user.photo === "") {
            $("#name-url-modal").modal("open");
            return;
        }

        console.log(user);

        // Add the user's info to the DB.
        addUserToDB(user.name, user.photo, user.gender, 
            user.preference, user.scores);

        // Send user data and receive the user's match
        $.post("/api/users", user)
            .then((match) => {
                console.log(match);
                $("#match-name").text(match.name);
                $("#match-img").attr("src", match.photo);
                $('#match-modal').modal("open");
            });

        console.log(JSON.stringify(user));
    })
});