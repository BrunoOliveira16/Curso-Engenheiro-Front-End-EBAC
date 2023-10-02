import { fireEvent, render, screen } from '@testing-library/react'
import App from "./App";

describe('Testes para o componente principal', () => {
  test('Deve renderizar corretamente', () => {
    render(<App />)
    expect(screen.getByText('cadastrar')).toBeInTheDocument()
  })

  test('Deve adicionar Estudar React na lista', () => {
    render(<App />)
    fireEvent.change(screen.getByTestId('campo-tarefa'), {
      target: {
        value: 'Estudar React'
      }
    })
    fireEvent.click(screen.getByTestId('btn-cadastrar'))
    expect(screen.getByText('Estudar React')).toBeInTheDocument()
  })
})