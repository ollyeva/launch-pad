import React, {ReactNode} from "react"
import styled from "styled-components"

const Holder = styled.div`
  max-width: ${(props: any) => props.theme.typography.maxScreen}px;
  margin: 0 auto 2rem auto;
  padding: 0 1rem;

  > :first-child {
    margin-top: 0;
  }

  > :last-child {
    margin-bottom: 0;
  }
`

interface ContainerProps {
    children: ReactNode
}

// ReactNode or ReactElement or JSX.Element
function Container({children}: ContainerProps) {
    return (
        <Holder>{children}</Holder>
    )
}

export default Container