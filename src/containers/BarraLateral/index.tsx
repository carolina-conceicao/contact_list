import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import FiltroCard from '../../components/FiltroCard'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'
import * as S from './styles'
import * as enums from '../../utils/enums/Contato'
import { Botao, Campo } from '../../styles'

type Props = {
  mostrarFiltros: boolean
}

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        {mostrarFiltros ? (
          <>
            <Campo
              type="text"
              placeholder="Buscar"
              value={termo}
              onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
            />
            <S.Filtros>
              <FiltroCard
                valor={enums.Categoria.FAMILIA}
                criterio="categoria"
                legenda="Familia"
              />
              <FiltroCard
                valor={enums.Categoria.TRABALHO}
                criterio="categoria"
                legenda="Trabalho"
              />
              <FiltroCard
                valor={enums.Categoria.FACULDADE}
                criterio="categoria"
                legenda="Faculdade"
              />
              <FiltroCard
                valor={enums.Categoria.AMIGOS}
                criterio="categoria"
                legenda="Amigos"
              />
              <FiltroCard
                valor={enums.Categoria.OUTROS}
                criterio="categoria"
                legenda="Outros"
              />
              <FiltroCard criterio="todas" legenda="Todos" />
            </S.Filtros>
          </>
        ) : (
          <Botao onClick={() => navigate('/')}>
            Voltar a lista de contatos
          </Botao>
        )}
      </div>
    </S.Aside>
  )
}

export default BarraLateral
