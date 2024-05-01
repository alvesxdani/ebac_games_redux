import { fireEvent, screen } from '@testing-library/react'
import Produto from '..'
import { renderizaComProvider } from '../../../utils/tests'

describe('Testes para o componente produto', () => {
  const jogo = {
    id: 1,
    categoria: 'RPG',
    imagem: '',
    plataformas: ['PC', 'PS4'],
    preco: 150.9,
    precoAntigo: 200,
    titulo: 'Super Mario'
  }
  test('Deve renderizar corretamente', () => {
    renderizaComProvider(<Produto game={jogo} />)
    expect(screen.getByText('Super Mario')).toBeInTheDocument()
  })
  test('Deve adicionar item ao carrinho', () => {
    const { store } = renderizaComProvider(<Produto game={jogo} />)
    const botao = screen.getByTestId('btn-adicionar-produto')
    fireEvent.click(botao)
    store.getState().carrinho.itens
    expect(store.getState().carrinho.itens).toHaveLength(1)
  })
})
