import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { renderizaComProvider } from '../../../utils/tests'
import { Produtos } from '../styles'
import { screen } from '@testing-library/react'

const mocks = [
  {
    id: 1,
    categoria: 'RPG',
    imagem: '',
    plataformas: ['PC', 'PS4'],
    preco: 150.9,
    precoAntigo: 200,
    titulo: 'Super Mario'
  },
  {
    id: 2,
    categoria: 'Ação',
    imagem: '',
    plataformas: ['Windows', 'PC', 'PS4'],
    preco: 150.9,
    precoAntigo: 200,
    titulo: 'Hogwarts Legacy'
  },
  {
    id: 3,
    categoria: 'Aventura',
    imagem: '',
    plataformas: ['PC', 'PS5'],
    preco: 150.9,
    precoAntigo: 200,
    titulo: 'Bomberland'
  }
]

const server = setupServer(
  rest.get('http://localhost:4000/produtos', (req, res, context) => {
    return res(context.json(mocks))
  })
)

describe('Testes para o container produtos', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  test('Deve renderizar corretamente', () => {
    renderizaComProvider(<Produtos />)
    expect(screen.getByText('Carregando...')).toBeInTheDocument()
  })
})
