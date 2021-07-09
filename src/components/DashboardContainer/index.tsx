import { ReactNode } from 'react'
import { SideBar } from '../SideBar'

import { Container } from './styles'

interface FlexProps {
  children: ReactNode
}

export function DashboardContainer({ children }: FlexProps) {
  return (
    <>
      <Container>
        <SideBar />
        {children}
      </Container>
    </>
  )
}
