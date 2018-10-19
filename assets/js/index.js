$(function(){
  $("#valid").click(function(){
    //on déclare les variables avec la valeur des notes
    math = $('#math').val();
    francais = $('#francais').val();
    geo = $('#geo').val();
    svt = $('#svt').val();
    eps = $('#esp').val();
    if(isNaN(math) == false && isNaN(francais) == false && isNaN(geo) == false && isNaN(svt) == false && isNaN(esp) == false){
      //on fait la moyenne de ces notes
      result = (parseFloat(math) + parseFloat(francais) + parseFloat(geo) + parseFloat(svt) + parseFloat(eps)) / 5;
      if(result == 20){
        message = "exellent";
      }else if(result >= 0 && result < 10){
        message = "En dessous de la moyenne!";
      }else if(result >= 10 && result < 13){
        message = "Moyen!";
      }else if(result >= 13 && result < 16){
        message = "Bien!";
      }else if(result >= 16 && result < 20){
        message = "Tres Bien!";
      }
      alert('Votre moyenne est de ' + result + 'elle est ' + message);
    }else{
      alert('Veuilliez entrer des nombres compris entre 0 et 20');
    }
  });
});
