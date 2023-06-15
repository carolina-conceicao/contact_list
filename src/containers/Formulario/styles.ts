import styled from 'styled-components'

export const Form = styled.form`
  max-width: 547px;
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  color: #666666;

  input:nth-child(2) {
    margin: 16px 0;
  }
  input:nth-child(3) {
    margin-bottom: 16px;
  }
`

export const Opcoes = styled.div`
  margin-bottom: 16px;

  p {
    margin-bottom: 6px;
    margin-top: 6px;
  }

  label {
    margin-right: 6px;
  }

  input {
    margin-right: 3px;
  }
`

export const Opcao = styled.div`
  display: inline;
  text-transform: capitalize;
`
