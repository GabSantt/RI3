/*Nesta atividade, você deve praticar a construção de objetos que precisam de atributos privados. Além disto, também praticar o
codificação dos métodos get e set.
Imagine que você foi contratada para desenvolver um script que possa criar objetos dos tipos empresa, cliente, telefone e endereço.*/

/*EXIGENCIAS! - 
CLIENTE - CPF imutavel pós criacao, sendo privado. A lista de telefone pode aumentar e diminuir.
TELEFONE- sem atributos privados, servirá para criar objetos que serão usados em clientes e na empresa.
ENDERECO- sem atributos privados,servirá para criar objetos que serão usados em clientes e na empresa.
EMPRESA- CNPJ imutavel pós criacao, sendo privado.*/

/*Parte 1-deverão existir métodos construtores para cada tipo de objeto.
Para cada atributo privado, deverão existir métodos de acesso get.!
Para cada atributo, deverão existir métodos que permitam recuperar o valor do atributo em caixa alta e caixa baixa!.*/

class Cliente{
    #cpf
    constructor(nome,cpf,endereco){
        this.nome=nome
        this.endereco=endereco
        this.telefones=new Set()
        this.#cpf=cpf
    }
    getCpf(){
        return this.#cpf;
    }
    getNome(){
    return this.nome
    }
    getNomeMaiusculo(){
        return this.nome.toUpperCase()
    }
    getNomeMinusculo(){
        return this.nome.toLowerCase()
    }
}
class Telefone{
    constructor(ddd,numero){
        this.ddd=ddd
        this.numero=numero
    }
    getDdd(){
    return this.ddd
    }
    getNumero(){
        return this.numero
    }
}
class Endereco{
    constructor(estado,cidade,rua,numero){
        this.estado=estado
        this.cidade=cidade
        this.rua=rua
        this.numero=numero
    }
    getEstadoMaiusculo(){
        return this.estado.toUpperCase()
    }
    getEstadoMinusculo(){
        return this.estado.toLowerCase()
    }

    getCidadeMaiusculo(){
        return this.cidade.toUpperCase()
    }
    getCidadeMinusculo(){
        return this.cidade.toLowerCase()
    }
    getRuaMaiusculo(){
        return this.rua.toUpperCase()
    }
    getRuaMinusculo(){
        return this.rua.toLowerCase()
    }
}
class Empresa{
    #cnpj
    constructor(razaoSocial,nomeFantasia,cnpj,endereco){
        this.razaoSocial=razaoSocial
        this.nomeFantasia=nomeFantasia
        this.#cnpj=cnpj
        this.endereco=endereco
        this.clientes=new Set()
        this.telefone=new Set()
    }
    getCnpj(){
        return this.#cnpj;
    }
    getRazaoSocialMaiusculo(){
        return this.razaoSocial.toUpperCase()
    }
    getRazaoSocialMinusculo(){
        return this.razaoSocial.toLowerCase()
    }
    getNomeFantasiaMaiusculo(){
        return this.nomeFantasia.toUpperCase()
    }
    getNomeFantasiaMinusculo(){
        return this.nomeFantasia.toLowerCase()
    }
}

/* Parte 2- Para isso crie uma empresa e atribua a ela um endereço e pelo menos dois telefones. */
let enderecoEmpresa= new Endereco ("SP","São Paulo","Avenida Paulixta", "1234")
let empresa=new Empresa ("Odeia BR LTDA","Nintendo","23659871030001",enderecoEmpresa)
let emptel1= new Telefone ("11","234567891")
let emptel2= new Telefone ("11","987654320")
empresa.telefone.add(emptel1)
empresa.telefone.add(emptel2)

/*Além disso, crie cinco clientes, cada um com seu endereço e doistelefones. Estes clientes devem ser colocados dentro do conjunto de
clientes da empresa.*/

let end1 = new Endereco("MG","Paraisópolis","Avenida Roça",283)
let cliente1 = new Cliente("Ana","23648795125",end1)

cliente1.telefones.add(new Telefone("35","965656565"))
cliente1.telefones.add(new Telefone("35","989898989"))

empresa.clientes.add(cliente1)

let end2 = new Endereco("PR","Curitiba","Rua das Flores",5568)
let cliente2 = new Cliente("Joana","54781365294",end2)

cliente2.telefones.add(new Telefone("41","9487545870"))
cliente2.telefones.add(new Telefone("41","9852452457"))

empresa.clientes.add(cliente2)

let end3 = new Endereco("RJ","Rio de Janeiro","Do lado do Pão de Acucar",78)
let cliente3 = new Cliente("Josue","69562132543",end3)

cliente3.telefones.add(new Telefone("21","9542369854"))
cliente3.telefones.add(new Telefone("21","9554565687"))

empresa.clientes.add(cliente3)

let end4 = new Endereco("AM","Manaus","Avenida Rio Amazonas", 10)
let cliente4 = new Cliente("Fernando","54230065987",end4)

cliente4.telefones.add(new Telefone("92","9845120154"))
cliente4.telefones.add(new Telefone("92","902165890"))

empresa.clientes.add(cliente4)

let end5 = new Endereco("GO","Goiânia","Rua dos Pequis",6596)
let cliente5 = new Cliente("Cowboy","56253012017",end5)

cliente5.telefones.add(new Telefone("62","9554874320"))
cliente5.telefones.add(new Telefone("62","9695326541"))

empresa.clientes.add(cliente5)

/*parte 3- seu script deve ser capaz de gerar uma descrição da empresa e de seus clientes */
console.log("Razão Social:", empresa.razaoSocial)
console.log("Nome Fantasia:", empresa.nomeFantasia)
console.log("----------------------")
console.log("Endereço:")
console.log(
    empresa.endereco.rua + ", " +
    empresa.endereco.numero + " - " +
    empresa.endereco.cidade + " / " +
    empresa.endereco.estado
)
console.log("----------------------")
console.log("Telefones da empresa:")
for (let tel of empresa.telefone){
    console.log("(" + tel.getDdd() + ") " + tel.getNumero())
}
console.log("----------------------")
console.log("Clientes:")

for (let cliente of empresa.clientes){

    console.log("Nome:", cliente.nome)
    console.log("CPF:", cliente.getCpf())

    console.log("Endereço:",
        cliente.endereco.rua + ", " +
        cliente.endereco.numero + " - " +
        cliente.endereco.cidade + " / " +
        cliente.endereco.estado
    )

    for (let tel of cliente.telefones){
        console.log("Telefone:(" + tel.getDdd() + ") " + tel.getNumero())
    }

    console.log("----------------------")
}