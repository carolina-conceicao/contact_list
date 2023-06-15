import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { MainContainer, Titulo, Campo, BotaoSalvar } from '../../styles'
import { Form, Opcoes, Opcao } from './styles'
import * as enums from '../../utils/enums/Contato'
import { cadastrar } from '../../store/reducers/contatos'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [titulo, setTitulo] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState(0)
  const [categoria, setCategoria] = useState(enums.Categoria.OUTROS)

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        titulo,
        categoria,
        email,
        telefone
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Novo Contato</Titulo>
      <Form onSubmit={cadastrarContato}>
        <Campo
          value={titulo}
          onChange={(evento) => setTitulo(evento.target.value)}
          type="text"
          placeholder="Titulo"
        />
        <Campo
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
          type="email"
          placeholder="E-mail"
        />
        <Campo
          value={telefone}
          onChange={(evento) => setTelefone(parseInt(evento.target.value))}
          type="tel"
          placeholder="Telefone"
        />
        <Opcoes>
          <p>Categoria</p>

          {Object.values(enums.Categoria).map((categoria) => (
            <Opcao key={categoria}>
              <label htmlFor={categoria}>
                <input
                  value={categoria}
                  name="categoria"
                  type="radio"
                  onChange={(evento) =>
                    setCategoria(evento.target.value as enums.Categoria)
                  }
                  id={categoria}
                  defaultChecked={categoria === enums.Categoria.OUTROS}
                />
                {categoria}
              </label>
            </Opcao>
          ))}
        </Opcoes>
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
