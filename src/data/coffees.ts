interface Coffee {
  id: number
  name: string
  description: string
  price: number
  tags: string[]
  image?: string
}

export const coffees: Coffee[] = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.99,
    tags: ['TRADICIONAL'],
    image: './assets/coffes/traditional-express.png'
  },
  {
    id: 2,
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 7.99,
    tags: ['TRADICIONAL']
  },
  {
    id: 3,
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 12.99,
    tags: ['TRADICIONAL']
  },
  {
    id: 4,
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 15.99,
    tags: ['TRADICIONAL', 'GELADO']
  },
  {
    id: 5,
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 5.99,
    tags: ['TRADICIONAL', 'COM LEITE']
  },
  {
    id: 6,
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.99,
    tags: ['TRADICIONAL', 'COM LEITE']
  },
  {
    id: 7,
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 10.99,
    tags: ['TRADICIONAL', 'COM LEITE']
  },
  {
    id: 8,
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 8.99,
    tags: ['TRADICIONAL', 'COM LEITE']
  },
  {
    id: 9,
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 10.99,
    tags: ['TRADICIONAL', 'COM LEITE']
  },
  {
    id: 10,
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 16.99,
    tags: ['ESPECIAL', 'COM LEITE']
  },
  {
    id: 11,
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 14.99,
    tags: ['ESPECIAL', 'ALCOÓLICO', 'GELADO']
  },
  {
    id: 12,
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 12.99,
    tags: ['ESPECIAL']
  },
  {
    id: 13,
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 13.99,
    tags: ['ESPECIAL']
  },
  {
    id: 14,
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 18.99,
    tags: ['ESPECIAL', 'ALCOÓLICO']
  }
]
