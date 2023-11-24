import React, { useEffect, useState } from "react";
import Input from "../Forms/Input";
import useForm from "../../Hooks/useForm";
import Button from "../Forms/Button";
import { PASSWORD_RESET } from "../../api";
import useFetch from "../../Hooks/useFetch";
import { useNavigate } from "react-router-dom";
import Error from "../Helper/Error";
import Head from "../Helper/Head";

const LoginPasswordReset = () => {
  const [login, setLogin] = useState('')
  const [key, setKey] = useState('')
  const password = useForm()
  const { data, error, loading, request } = useFetch()
  const navigate = useNavigate()

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const key = params.get('key')
    const login = params.get('login')

    if (key) {
      setKey(key)
    }

    if (login) {
      setLogin(login)
    }
  }, [])

  async function handleSubmit(e) {
    e.preventDefault()

    const { url, options } = PASSWORD_RESET({
      login,
      key,
      password: password.value
    })

    const { response } = await request(url, options)

    if (response.ok) {
      navigate('/login')
    }
  }

  return <section className="animeLeft">
    <Head
        title="Redefinir senha"
        description="Redefinir senha"
      />
    <h1 className="title">Resetar a Senha</h1>
    <form onSubmit={handleSubmit}>
      <Input label={'Nova Senha'} type={'password'} name={'password'} {...password} />
      {loading ? <Button disabled>Redefinindo...</Button> : <Button>Redefinir senha</Button>}
    </form>
    {error && <Error error={error} />}
  </section>;
};

export default LoginPasswordReset;
