/*Dado um conjunto de elementos tecnológicos e tabela de custo, deve - se calcular o seu custo de operação.

Exemplo de tabela de custo:

Text
{
  "oracle": 10.2,
  "postgresql": 5.3,
  "mongodb": 3.0,
  "redis": 6.1,
  "vcpu": 2.0,
  "gb_memoria": 0.9,
  "gb_disco": 0.2,
}

Exemplo de descrição de arquitetura (elementos tecnológicos):
*/
const entrada = [
  {
    "nome": "A",
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
        "nome": "B",
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
        "nome": "C",
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
  }
]

/*
Deve-se observar que a entrada da arquitetura é descrita por um array,
podendo possuir outros arrays aninhados (formando uma árvore).
É importante também a observância do atributo “quantidade”,
uma vez que ele influencia no custo final.
O custo do elemento deve ser multiplicado pelo fator quantidade.
Para elementos que possuem filhos, deve-se primeiro calcular o custo total dos filhos
e então multiplicar pela quantidade.

*/