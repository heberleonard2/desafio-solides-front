import Link from 'next/link'
import Head from 'next/head'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { Container, Content, Logo } from '../styles/pages/signup'
import { useAuth } from '../hooks/useAuth'
import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'

interface SignUpFormData {
  name: string
  email: string
  password: string
  passwordConfirmation: string
}

const signUpFormSchema = yup.object().shape({
  name: yup.string().required('First name is required'),
  email: yup.string().required('E-mail is required').email('Invalid e-mail'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'At least 6 characters'),
  passwordConfirmation: yup
    .string()
    .oneOf([null, yup.ref('password')], 'Passwords must be the same')
})

export default function SignUp() {
  const { signUp } = useAuth()
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signUpFormSchema)
  })
  const errors = formState.errors

  const handleSignUp: SubmitHandler<SignUpFormData> = async ({
    name,
    email,
    password
  }) => {
    await signUp({
      name,
      email,
      password
    })
  }

  return (
    <>
      <Head>
        <title>SignUp</title>
      </Head>
      <Container>
        <Content>
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
          <h2>Create your account</h2>
          <div>
            <form onSubmit={handleSubmit(handleSignUp)}>
              <Input
                type="text"
                label="Name"
                placeholder="Your name"
                error={errors.name}
                {...register('name')}
              />
              <Input
                type="email"
                label="Email"
                placeholder="Your email"
                error={errors.email}
                {...register('email')}
              />
              <Input
                type="password"
                label="Password"
                placeholder="Your password"
                error={errors.password}
                {...register('password')}
              />
              <Input
                type="password"
                label="Confirm password"
                placeholder="Confirm password"
                error={errors.passwordConfirmation}
                {...register('passwordConfirmation')}
              />

              <Button type="submit" isLoading={formState.isSubmitting}>
                Sign up
              </Button>
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
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { 'solides.token': token } = parseCookies(ctx)

  if (token) {
    return {
      redirect: {
        destination: '/dashboard',
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}
