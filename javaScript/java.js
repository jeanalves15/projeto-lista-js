let contador=0;
let input=document.getElementById("inputTarefa");
let btnAdd=document.getElementById("add");
let main=document.getElementById("areaLista")

function addTarefa(){

    let valorInput=input.value;
    if((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)){

        ++contador;

        let novoItem=` <div id="${contador}" class="item">
             <div  onclick="marcarTarefa(${contador})" class="item-icone">
                <i id="icone_${contador}" class="fa-regular fa-circle"></i> 
            </div>
            <div onclick="marcarTarefa(${contador})" class="item-nome"> 
                 ${valorInput}

            </div>
            <div class="item-botao">
                <button  onclick="deletar(${contador})" class="delete"><i class="fa-regular fa-trash-can"></i>Deletar</button>
                </div>
            </div>`;
            main.innerHTML += novoItem;   
            input.value="";
            input.focus();
    }
}
function deletar(id){
    var tarefa=document.getElementById(id);
    tarefa.remove();
}

input.addEventListener ("keyup",function(event) {
    if(event.key === "Enter"){
        event.preventDefault();
        btnAdd.click();
    }

});

function marcarTarefa(id){
    var item=document.getElementById(id);
    var classe=item.getAttribute('class');
    console.log(classe);

    if(classe === "item"){
        item.classList.add('clicado');
        var icone=document.getElementById("icone_ "+ id);
        icone.classList.remove('regular fa-circle');
        icone.classList.add("fa-regular");
    }
}
