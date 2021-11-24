const custo = {
    "oracle": 10.2,
    "postgresql": 5.3,
    "mongodb": 3.0,
    "redis": 6.1,
    "vcpu": 2.0,
    "gb_memoria": 0.9,
    "gb_disco": 0.2,
}


const entrada = [
    {
        "custo": "A",
        "quantidade": 2,
        "tecnologias": [
            {
                "postgresql": {
                    "quantidade": 1
                }
            },
            {
                "vcpu": {
                    "quantidade": 2
                }
            },
            {
                "gb_memoria": {
                    "quantidade": 8
                }
            },
            {
                "gb_disco": {
                    "quantidade": 100
                }
            }
        ],
        "filhos": [
            {
                "custo": "B",
                "quantidade": 1,
                "tecnologias": [
                    {
                        "vcpu": {
                            "quantidade": 1
                        }
                    },
                    {
                        "gb_memoria": {
                            "quantidade": 2
                        }
                    },
                    {
                        "gb_disco": {
                            "quantidade": 10
                        }
                    }
                ],
                "filhos": []
            },
            {
                "custo": "C",
                "quantidade": 1,
                "tecnologias": [
                    {
                        "mongodb": {
                            "quantidade": 1
                        }
                    },
                    {
                        "vcpu": {
                            "quantidade": 1
                        }
                    },
                    {
                        "gb_memoria": {
                            "quantidade": 3
                        }
                    },
                    {
                        "gb_disco": {
                            "quantidade": 50
                        }
                    }
                ],
                "filhos": []
            }
        ]
    },
];

let soma = 0
let soma2 = 0
let resultadoFinal = 0
let arrayFinal = []

function calculaFilhos(quantidade, arrayNomes, propriedades) {

    for (let i = 0; i < arrayNomes.length; i++) {
        var aux = arrayNomes[i]
        soma2 += propriedades[i][aux].quantidade * custo[aux]
    }
    soma = soma * quantidade
    agruparNomesTecnologiaPai(soma)
}

function agruparNomesTecnologiaFilho(qtd, nomesTecnologiaFilho) {

    var keyArray = []

    for (let i = 0; i < nomesTecnologiaFilho.length; i++) {
        var aux = nomesTecnologiaFilho[i]
        var keyNames = Object.keys(aux)
        keyArray.push(keyNames)
        var flat = [].concat(...keyArray)
    }

    return calculaFilhos(qtd, flat, nomesTecnologiaFilho)

}

function calculaPai(quantidade, arrayNomes, propriedades, resultadoSoma) {
    for (let i = 0; i < arrayNomes.length; i++) {
        var aux = arrayNomes[i]
        soma2 += propriedades[i][aux].quantidade * custo[aux]
    }

    resultadoFinal = ((resultadoSoma + soma2) * quantidade) / 2
    arrayFinal.push(resultadoFinal)
    for (let j = 0; j<arrayFinal.length;j++){
        if (arrayFinal[j] > arrayFinal[j + 1]){
            console.log(arrayFinal[j])
            break
        }
        else{
            console.log("O valor total dos elementos tecnológicos é: " + arrayFinal[j+1])
            break
        }
    }
}

function agruparNomesTecnologiaPai(sum) {
    var resultado = sum
    var Arr = []

    for (let i = 0; i < entrada[0].tecnologias.length; i++) {
        var aux = entrada[0].tecnologias[i]
        var keyNames = Object.keys(aux)
        Arr.push(keyNames)
        var flat = [].concat(...Arr)

    }
    return calculaPai(entrada[0].quantidade, flat, entrada[0].tecnologias, resultado)
}

function percorreArvore(arvore) {

    if (arvore.filhos !== undefined && arvore.filhos.length > 0) {

        for (let i = 0; i < arvore.filhos.length; i++) {
            const elemento = arvore.filhos[i]
            if (agruparNomesTecnologiaFilho(elemento.quantidade, elemento.tecnologias)) {
                percorreArvore(elemento)
            }
        }
    }
}

for (let i = 0; i < entrada.length; i++) {
    const arvore = entrada[i];
    percorreArvore(arvore);
}
