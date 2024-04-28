import { screen } from '@testing-library/react'
import Header from '..'
import { renderizaComProvider } from '../../../utils/tests'

describe('Testes para o componente Header', () => {
  test('Deve renderizar o componente corretamente', () => {
    renderizaComProvider(<Header />)
    expect(screen.getByText('EBAC Games')).toBeInTheDocument()
  })

  test('Deve renderizar com dois componentes no carrinho', () => {
    renderizaComProvider(<Header />, {
      preloadedState: {
        carrinho: {
          itens: [
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
              plataformas: ['PC', 'PS4'],
              preco: 200,
              precoAntigo: 250,
              titulo: 'Hogwarts Legacy'
            }
          ]
        }
      }
    })
    expect(screen.getByTestId('qtd-carrinho').innerHTML).toContain('2 itens')
  })
})
