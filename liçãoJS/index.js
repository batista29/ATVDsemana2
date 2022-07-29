var inputPlaca = document.querySelector("#inputPlaca");
var placaRes = document.querySelector("#placaRes");

//evento do botão
var btnPlaca = document.querySelector("#btnValidarPlaca");
btnPlaca.addEventListener("click", () => {
    let resposta = validarPlaca(inputPlaca.value);
    placaRes.innerHTML = resposta;
});

function validarPlaca(placa) {
    if (placa.length == 7) {
        if (isNaN(placa[0]) && isNaN(placa[1]) && isNaN(placa[2])) {
            if (isNaN(placa[3]) == false && (isNaN(placa[4]) == false || isNaN(placa[4]) == true) && isNaN(placa[5]) == false && isNaN(placa[6]) == false) {
                return "placa valida"
            } else {
                return "placa invalida"
            }
        } else {
            return "placa invalida"
        }
    } else {
        return "Placa Inválida por Exceder o Limite ou por falta de Caracteres"
    }
}
//validarPlaca("ABC1212")

// authors:
// @Batista29
// @Vicafe04
// @BrenoJorge
// @c-alvares

var inputCPF = document.querySelector("#inputCPF");
var cpfRes = document.querySelector("#cpfRes");

var btnCPF = document.querySelector("#btnVerificarCPF");
btnCPF.addEventListener("click", () => {
    let resposta = validaCPF(inputCPF.value);
    cpfRes.innerHTML = resposta;
});

function validaCPF(cpf) {

    let mult
    let soma = 0
    let indice = 0
    let resto

    //primeira conta
    if (cpf.length == 11) {
        for (let i = 10; i >= 2; i--) {
            mult = i * cpf[indice]
            soma += mult
            indice++
        }
        resto = (soma * 10) % 11

        if (resto == 10 || resto == 11) {
            resto = 0
        }
        if (resto != cpf[9]) {
            return "Cpf invalido"
        } else {
            //segunda conta
            indice = 0
            soma = 0
            for (let i = 11; i >= 2; i--) {
                mult = i * cpf[indice]
                soma += mult
                indice++
            }
            resto = (soma * 10) % 11
            if (resto == cpf[10]) {
                return "Cpf valido"
            } else {
                return "Cpf invalido"

            }
        }
    } else {
        return "Erro: O tamanho do CPF não está correto"
    }

}

//validaCPF("")

// authors:
// @Batista29
// @Vicafe04
// @BrenoJorge
// @c-alvares

var btnTelefone = document.querySelector("#btnNumber");

btnTelefone.addEventListener("click", () => {

    var inputNumberDDD = document.querySelector("#inputNumberDDD");
    var inputNumberQTD = document.querySelector("#inputNumberQTD");
    var telefonesGerados = document.querySelector("#telefonesGerados");

    var telefones = gerarTelefones(inputNumberDDD.value, inputNumberQTD.value);

    telefonesGerados.innerHTML = "";

    telefones.forEach(function (telefone) {
        telefonesGerados.innerHTML += `${telefone}&#10`;
    });
});

function gerarTelefones(ddd, quantidade) {
    let celular = []

    for (let i = quantidade; i > 0; i--) {
        let phone = `${ddd}-${Math.floor(Math.random() * (99999 - 11111 + 1)) + 11111}-${Math.floor(Math.random() * (9999 - 1111 + 1)) + 1111}`
        celular.push(phone)
    }
    return celular
}

//gerarTelefones(19,3)

var btnCPF = document.querySelector("#BtnCpf");

btnCPF.addEventListener("click", () => {
    var inputCriarCPF = document.querySelector("#inputCriarCPf");
    //tetx.area
    var CPFsGerados = document.querySelector("#cpfs");
    var Gerados = gerarCPF(inputCriarCPF.value);

    CPFsGerados.innerHTML = "";

    Gerados.forEach(function (CPF) {
        CPFsGerados.innerHTML += `${CPF}&#10`;
    });
});

function gerarCPF(quantidade) {
    let indice = 0
    var cpfs = []

    while (indice != quantidade) {
        let cpfGerado = Math.floor(Math.random() * (99999999999 - 00000000000 + 1) + 00000000000).toString()
        if (validaCPF(cpfGerado)) {
            cpfs.push(cpfGerado)
            indice++
            //console.log(cpfGerado)
        }
    }
    return cpfs
}
//gerarCPF(10)