import React from 'react'
import styled from 'styled-components'
import TransitionFade from '../components/transition-fade'

const Container = styled.main`
  width: 90%;
  margin: auto;
`

const about = () => {
  return (
    <TransitionFade>
      <Container>
        <h2>About Nayoun Kim</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui earum
          quo saepe libero! Tempore sunt veniam eius nam voluptatum, illo neque
          quidem fugiat quis deserunt unde accusamus illum blanditiis ipsa
          obcaecati. Maxime repellat dolorum delectus numquam sunt inventore
          vitae cum quaerat, veritatis voluptas praesentium quisquam possimus
          labore suscipit quod iusto tempore neque voluptatum voluptate ipsum
          explicabo aliquid id. Assumenda consequuntur, architecto vitae iusto
          odit nulla veritatis eveniet nesciunt inventore aut. Non repellat amet
          laborum similique qui eum ipsum natus neque ad quae maxime voluptate
          possimus, tempore cumque explicabo omnis est nemo! Expedita, id minima
          asperiores sunt quibusdam eos doloribus nemo.
        </p>
      </Container>
    </TransitionFade>
  )
}

export default about
