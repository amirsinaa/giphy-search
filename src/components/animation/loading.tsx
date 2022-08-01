import styled from '@emotion/styled'

const Spinner = styled.div(`
  animation: SpinnerRotation 800ms linear infinite;
  width: 100px;
  height: 100px;
  border: 5px solid #f3f3f3;
  border-left: 5px solid #333333;
  background: transparent;
  border-radius: 100%;
  display: flex;
`);


export function Loading() {
  return (
    <Spinner />
  )
}