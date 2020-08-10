import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { register } from '../../../redux/actions/auth'
import {
  Main, Auth, Container, Header, 
  Form, FormGroup, Label, Input, 
  Button, Footer, Content, Group
} from '../Auth.styled'


export const Register = () => {

  const [type, setType] = useState('password')
  const [showText, setShowText] = useState('Показать')

  const dispatch = useDispatch()

  const selectTypeHandler = () => {
    type === 'password' ? setType('text') : setType('password')
    type === 'password' ? setShowText('Скрыть') : setShowText('Показать')
  }

  const [form, setForm] = useState({
    userName: '',
    email: '',
    password: ''
  })
  
  const changeHandler = (event) =>{
    setForm({
      ...form, 
      [event.target.name]: event.target.value
    })
  }

  const registerHandler = () => dispatch(register({...form}))

  return (
    <Main>
      <Auth>
        <Container>

          <Header>
            Регистрация
          </Header>

          <Form>

            <FormGroup>
              <Group width='100%' >
                <Label htmlFor='userName'>Name</Label>
                <Input type='text' id='userName' name='userName' value={form.userName} onChange={changeHandler}/>
              </Group>      
            </FormGroup>

            <FormGroup >
              <Group width='100%' >
                <Label htmlFor='email'>Email</Label>
                <Input type='text' id='email' name='email' value={form.email} onChange={changeHandler}/>
              </Group>
            </FormGroup>

            <FormGroup >
              <Group width='70%' >
                <Label htmlFor='password'>Password</Label>
                <Input type={type} id='password' name='password' value={form.password} onChange={changeHandler}/>
              </Group>
              <Button width='30%' onClick={() => selectTypeHandler()}>{showText}</Button>
            </FormGroup>

            <Button br='4px' onClick={registerHandler}>Регистрация</Button>

          </Form>
        </Container>
      </Auth>

      <Footer>
        <Content>Есть аккаунт?</Content>
        <Link to='/'>&nbsp;Вход</Link>
      </Footer>
      
    </Main>
  )
}
