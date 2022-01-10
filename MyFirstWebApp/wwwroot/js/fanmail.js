////document.getElementById("btnSend").addEventListener("click", function () {
////    alert("From: " + document.getElementById("txtFrom").value + ", Subject: "
////        + document.getElementById("txtSub").value
////        + ", Message: " + document.getElementById("txtMsg").value)
////})

$("#btnSend").click(function () {
    alert("From " + $("#txtFrom").val() + $("#txtSub").val() + $("#txtMsg").val())


    $("#picganderson").fadeOut("slow")
})