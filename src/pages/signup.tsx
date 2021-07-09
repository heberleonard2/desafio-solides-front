import Link from 'next/link'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { Container, Content, Logo } from '../styles/pages/SignUp'
import { useAuth } from '../hooks/useAuth'

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
    <Container>
      <Content>
        <Logo />
        <h2>Create your account</h2>
        <div>
          <form onSubmit={handleSubmit(handleSignUp)}>
            <Input
              type="text"
              label="First name"
              error={errors.name}
              {...register('name')}
            />
            <Input
              type="email"
              label="E-mail address"
              error={errors.email}
              {...register('email')}
            />
            <Input
              type="password"
              label="Password"
              error={errors.password}
              {...register('password')}
            />
            <Input
              type="password"
              label="Confirm password"
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
  )
}
