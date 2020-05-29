let ws = null;

$(function() {
    // Only connect when username is available
    // if (window.username) {
    startChat();
    // }
});

function startChat() {
    ws = adonis.Ws().connect();

    ws.on("open", () => {
        $(".connection-status").addClass("connected");
        subscribeToChannel();
        console.log("connected ws")
    });

    ws.on("error", () => {
        $(".connection-status").removeClass("connected");
    });
}

function subscribeToChannel() {
    const chat = ws.subscribe("alat");

    chat.on("error", () => {
        $(".connection-status").removeClass("connected");
        console.log('not connected')
    });

    chat.on("message", message => {
        //     $(".messages").append(`
        //     <div class="message"><h3> ${message.username} </h3> <p> ${message.body} </p> </div>
        //   `);
        console.log(message);
    });
}

$("#message").keyup(function(e) {
    if (e.which === 13) {
        e.preventDefault();

        const message = $(this).val();
        $(this).val("");

        ws.getSubscription("alat").emit("message", {
            username: window.username,
            body: message
        });
        console.log(ws);
        return;
    }
});