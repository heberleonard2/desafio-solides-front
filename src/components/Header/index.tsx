import Link from 'next/link'
import { FiLogOut } from 'react-icons/fi'
import { useAuth } from '../../hooks/useAuth'
import { ActiveLink } from '../ActiveLink'

import { Container, Logo, Logout } from './styles'
export function Header() {
  const { signOut } = useAuth()

  function handleSignOut() {
    signOut()
  }
  return (
    <>
      <Container>
        <div>
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
          <nav>
            <ActiveLink activeClassName={'active'} href="/dashboard">
              <a>Home</a>
            </ActiveLink>
            <ActiveLink activeClassName={'active'} href="/dashboard/historic">
              <a>Historic</a>
            </ActiveLink>
          </nav>

          <Logout onClick={handleSignOut}>
            <FiLogOut />
            <span>Logout</span>
          </Logout>
        </div>
      </Container>
    </>
  )
}
