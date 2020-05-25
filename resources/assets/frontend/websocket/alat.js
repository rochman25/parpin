let ws = null;

$(function() {
    // if(window.userId){
    monitorThing();
    // }
});

function monitorThing() {
    ws = adonis.Ws().connect();

    ws.on("open", () => {
        $(".connection-status").addClass("connected");
        subscribeToChannel();
    });

    ws.on("error", () => {
        $(".connection-status").removeClass("connected");
    });
}

function subscribeToChannel() {
    const chat = ws.subscribe("thing");

    chat.on("error", () => {
        $(".connection-status").removeClass("connected");
    });

    chat.on("message", message => {
        $(".messages").append(`
        <div class="message"><h3> ${message.userId} </h3> <p> ${message.body} </p> </div>
      `);
        console.log(message)
    });
}

$("#kirim").on("click", function() {
    const message = "Hai2";
    // $(this).val("");

    ws.getSubscription("alat").emit("message", {
        userId: "zaenur2",
        body: message
    });
    console.log(ws);
    return;
})

function sendMessage() {

}