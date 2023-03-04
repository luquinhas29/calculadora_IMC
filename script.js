$(function(){
    $("button").bind("click", function(){
        var peso = $("#peso").val();
        var altura = $("#altura").val();

        peso = peso.replace(",",".");
        altura = altura.replace(",",".");
        var res
        var imc = peso/(altura * altura);

        if(imc < 18.5){
            res = "peso baixo";
        }else if (imc >= 18.5 && imc < 24.9){
            res = "peso normal";
        }else if (imc >= 25.0 && imc < 29.9 ){
            res = "sobre peso";
        }else if (imc >= 30.0 && imc < 34.9){
            res = "Obesidade grau I";
        }else if(imc >=35.0 && imc < 39.0){
            res = "Obesidade grau II";
        }else{
            res = "Obesidade grau III";

        }

        $("#resultado").html("resultado<br/>"+imc.toFixed(2)+"<br/><h1>"+res+"</h1>");

    });
});