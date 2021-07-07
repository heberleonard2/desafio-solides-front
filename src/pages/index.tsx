import Link from 'next/link'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { Container, Content, Logo } from '../styles/pages/Home'

export default function Home() {
  return (
    <Container>
      <Content>
        <Logo />
        <h2>Sign in to your account</h2>
        <div>
          <form>
            <Input type="email" name="email" label="Email address" />
            <Input type="password" name="password" label="Password" />
            <Button type="submit">Sign in</Button>
          </form>

          <p>
            Dont have account?{' '}
            <Link href="/signup">
              <a>Sign up now</a>
            </Link>
          </p>
        </div>
      </Content>
    </Container>
  )
}
