function verificar (){
    var data = new Date()
    var ano = data.getFullYear()
    var fano= document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length ==0 || Number(fano.value) > ano ){
        alert('{error} Verifique os dados!Tente novamente.  ')
    }else {
        var fsex =document.getElementsByName ("sex")
        var idade = ano - Number (fano.value)
        //res.innerHTML = `idade caculada ${idade}`
        var genero =''
        if(fsex[0].checked){
            genero = 'Homem'
        }else if (fsex[1].checked){
            genero ='Mulher'
        }
        res.style.textAlign = 'center'
        res.innerHTML =`Você e um (a) ${genero} com ${idade} anos`
    }
}