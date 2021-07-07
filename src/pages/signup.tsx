import Link from 'next/link'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { Container, Content, Logo } from '../styles/pages/Signup'

export default function SignUp() {
  return (
    <Container>
      <Content>
        <Logo />
        <h2>Create your account</h2>
        <div>
          <form>
            <Input type="text" name="name" label="First name" />
            <Input type="email" name="email" label="Email address" />
            <Input type="password" name="password" label="Password" />
            <Button type="submit">Sign up</Button>
          </form>

          <p>
            Already have an account?{' '}
            <Link href="/">
              <a>Sign in now</a>
            </Link>
          </p>
        </div>
      </Content>
    </Container>
  )
}
