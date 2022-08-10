$(document).ready(function(){

    $.ajax({
    url: "https://apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi", success:function (res) {
        $("#positif").html(res[5].kasus + " jiwa");
        $("#sembuh").html(res[5].sembuh + " jiwa");
        $("#meninggal").html(res[5].meninggal + " jiwa");
        $("#provinsi").html(res[5].provinsi);
    }
})
});