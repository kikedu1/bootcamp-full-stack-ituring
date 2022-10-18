const comprador = "Pedro Gonçalves"
function retorna_comprador(x){
    console.log("Olá, "+x+"!");
}
retorna_comprador(comprador)

const NomeDoProduto = "Mouse Microsoft"
const EnderecoDeEntrega = "Avenida Portugal 371, apartamento 64, Brooklin, São Paulo, SP, CEP 04559-001"
const NomeDaPessoaQueRecebeuOProduto = "Ana Gonçalves"

function info_recebimento_produto(y,z,k){
    console.log("Fizemos a entrega do produto "+y+" no endereço "+z+" com sucesso! O seu produto foi recebido por: "+k+   
        ". Esperamos que você esteja contente com o produto. Caso contrário, fale conosco em até 7 dias para que possamos ajudar.");
}

info_recebimento_produto(NomeDoProduto,EnderecoDeEntrega,NomeDaPessoaQueRecebeuOProduto)

const NomeDaPessoaQueEnviouOEmail ="André Almeida"

function remetente(w){
    console.log("Atenciosamente, "+w+".");
}

remetente(NomeDaPessoaQueEnviouOEmail)