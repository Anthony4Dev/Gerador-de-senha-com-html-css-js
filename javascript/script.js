(function(){
    'use strict'
    var gerarsenha = document.querySelector('.button');
    var bolinha = document.querySelector('.bolinha');
    var senhagerada = document.querySelector('textarea');
    var divsenhagerada = document.querySelector('.senha-gerada');
    var q_caracteres_paragrafo = document.querySelector('.tamanho-lenght');
    gerarsenha.addEventListener('click',gerarnovasenha);
    divsenhagerada.style.visibility = 'hidden';
    q_caracteres_paragrafo.textContent = 'Tamanho 0 caracteres';

    function gerarnovasenha(){
        var qdcs = novasenhagerada();
        var lista = listagerada(qdcs);
        var listaformatada = senhafortamatada(lista);
        senhagerada.textContent = listaformatada;
        var q_caracteres = senhagerada.textContent.length;
        if(senhagerada.textContent == ''){
            q_caracteres_paragrafo.style.visibility = 'hidden';
        }
        else{
            var bolinhamovinta = q_caracteres * 183.333333333;
            q_caracteres_paragrafo.textContent = 'Tamanho ' + q_caracteres + ' caracteres';
            bolinha.style.transform = 'translateX('+bolinhamovinta+'%)';
            bolinha.style.transition = '.3s'
        }
        

        if(senhagerada.textContent != ''){
            divsenhagerada.style.visibility = 'visible'
        }
    function listagerada(qdcs){
        var listanova = [];
        for(var z=0;z<qdcs;z++){
            var letraounumero = sortearletraounumero();
            listanova.push(letraounumero);
        }
        return listanova;
        
    }
    function senhafortamatada(listasenha){
        if(listasenha.length > 15){
            listasenha =  listasenha.slice(0,15);
        }
        return listasenha.join('');
        

    }
    function novasenhagerada(){
        var senha = Math.floor(Math.random() * 16);
        if(senha < 8){
            senha = 8;
            return senha;
        }
        if(senha > 15){
            return Math.floor(senha - 1);
        }
        else{
            return Math.floor(senha);
        }
    }

    function sortearletraounumero(){
        var sorteio = Math.floor(Math.random() * 41);
        
        if(sorteio == 0){
            return '0';
        }
        if(sorteio == 1){
            return '1';
        }
        if(sorteio == 2){
            return '2';
        }
        if(sorteio == 3){
            return '3';
        }
        if(sorteio == 4){
            return '4';
        }
        if(sorteio == 5){
            return '5';
        }
        if(sorteio == 6){
            return '6';
        }
        if(sorteio == 7){
            return '7';
        }
        if(sorteio == 8){
            return '8';
        }
        if(sorteio == 9){
            return '9';
        }
        if(sorteio == 10){
            var sorteioletra = Math.floor(Math.random() * 1.8);
            if(sorteioletra == 0){
                return 'q';
            }
            else{
                return 'Q';
            }
        }
        if(sorteio == 11){
            var sorteioletra = Math.floor(Math.random() * 1.8);
            if(sorteioletra == 0){
                return 'w';
            }
            else{
                return 'W';
            }
        }
        if(sorteio == 12){
            var sorteioletra = Math.floor(Math.random() * 1.8);
            if(sorteioletra == 0){
                return 'e';
            }
            else{
                return 'E';
            }
        }
        if(sorteio == 13){
            var sorteioletra = Math.floor(Math.random() * 1.8);
            if(sorteioletra == 0){
                return 'r';
            }
            else{
                return 'R';
            }
        }
        if(sorteio == 14){
            var sorteioletra = Math.floor(Math.random() * 1.8);
            if(sorteioletra == 0){
                return 't';
            }
            else{
                return 'T';
            }
        }
        if(sorteio == 15){
            var sorteioletra = Math.floor(Math.random() * 1.8);
            if(sorteioletra == 0){
                return 'y';
            }
            else{
                return 'Y';
            }
        }
        if(sorteio == 16){
            var sorteioletra = Math.floor(Math.random() * 1.8);
            if(sorteioletra == 0){
                return 'u';
            }
            else{
                return 'U';
            }
        }
        if(sorteio == 17){
            var sorteioletra = Math.floor(Math.random() * 1.8);
            if(sorteioletra == 0){
                return 'i';
            }
            else{
                return 'I';
            }
        }
        if(sorteio == 18){
            var sorteioletra = Math.floor(Math.random() * 1.8);
            if(sorteioletra == 0){
                return 'o';
            }
            else{
                return 'O';
            }
        }
        if(sorteio == 19){
            var sorteioletra = Math.floor(Math.random() * 1.8);
            if(sorteioletra == 0){
                return 'p';
            }
            else{
                return 'P';
            }
        }
        if(sorteio == 20){
            var sorteioletra = Math.floor(Math.random() * 1.8);
            if(sorteioletra == 0){
                return 'a';
            }
            else{
                return 'A';
            }
        }
        if(sorteio == 21){
            var sorteioletra = Math.floor(Math.random() * 1.8);
            if(sorteioletra == 0){
                return 's';
            }
            else{
                return 'S';
            }
        }
        if(sorteio == 22){
            var sorteioletra = Math.floor(Math.random() * 1.8);
            if(sorteioletra == 0){
                return 'd';
            }
            else{
                return 'D';
            }
        }
        if(sorteio == 23){
            var sorteioletra = Math.floor(Math.random() * 1.8);
            if(sorteioletra == 0){
                return 'f';
            }
            else{
                return 'F';
            }
        }
        if(sorteio == 24){
            var sorteioletra = Math.floor(Math.random() * 1.8);
            if(sorteioletra == 0){
                return 'g';
            }
            else{
                return 'G';
            }
        }
        if(sorteio == 25){
            var sorteioletra = Math.floor(Math.random() * 1.8);
            if(sorteioletra == 0){
                return 'h';
            }
            else{
                return 'H';
            }
        }
        if(sorteio == 26){
            var sorteioletra = Math.floor(Math.random() * 1.8);
            if(sorteioletra == 0){
                return 'j';
            }
            else{
                return 'J';
            }
        }
        if(sorteio == 17){
            var sorteioletra = Math.floor(Math.random() * 1.8);
            if(sorteioletra == 0){
                return 'k';
            }
            else{
                return 'K';
            }
        }
        if(sorteio == 27){
            var sorteioletra = Math.floor(Math.random() * 1.8);
            if(sorteioletra == 0){
                return 'l';
            }
            else{
                return 'L';
            }
        }
        if(sorteio == 28){
            var sorteioletra = Math.floor(Math.random() * 1.8);
            if(sorteioletra == 0){
                return 'ç';
            }
            else{
                return 'Ç';
            }
        }
        if(sorteio == 29){
            var sorteioletra = Math.floor(Math.random() * 1.8);
            if(sorteioletra == 0){
                return 'z';
            }
            else{
                return 'Z';
            }
        }
        if(sorteio == 30){
            var sorteioletra = Math.floor(Math.random() * 1.8);
            if(sorteioletra == 0){
                return 'x';
            }
            else{
                return 'X';
            }
        }
        if(sorteio == 31){
            var sorteioletra = Math.floor(Math.random() * 1.8);
            if(sorteioletra == 0){
                return 'c';
            }
            else{
                return 'C';
            }
        }
        if(sorteio == 32){
            var sorteioletra = Math.floor(Math.random() * 1.8);
            if(sorteioletra == 0){
                return 'v';
            }
            else{
                return 'V';
            }
        }
        if(sorteio == 33){
            var sorteioletra = Math.floor(Math.random() * 1.8);
            if(sorteioletra == 0){
                return 'b';
            }
            else{
                return 'B';
            }
        }
        if(sorteio == 34){
            var sorteioletra = Math.floor(Math.random() * 1.8);
            if(sorteioletra == 0){
                return 'n';
            }
            else{
                return 'N'
            }
        }
        if(sorteio == 35){
            var sorteioletra = Math.floor(Math.random() * 1.8);
            if(sorteioletra == 0){
                return 'm';
            }
            else{
                return 'M';
            }
        }
        if(sorteio == 36){
            return ','
        }
        if(sorteio == 37){
            return '.'
        }
        if(sorteio == 38){
            return '/'
        }
        if(sorteio == 39){
            var sorteioletra = Math.floor(Math.random() * 1.8);
            if(sorteioletra == 0){
                return '[';
            }
            else{
                return ']';
            }
        }
        
        
    }

    }
})();
