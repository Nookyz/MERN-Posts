import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { login } from '../../../redux/actions/auth'
import { useDispatch, useSelector } from 'react-redux'
import {
  Main, Auth, Container, Header, 
  Form, FormGroup, Label, Input, 
  Button, Footer, Content, Group,
} from '../Auth.styled'

export const Login = () => {

  const [type, setType] = useState('password')
  const [showText, setShowText] = useState('Показать')

  const [form, setForm] = useState({
    email:'',
    password: ''
  })

  const changeHandler = (event) =>{
    setForm({
      ...form, 
      [event.target.name]: event.target.value
    })
  }

  const selectTypeHandler = () => {
    type === 'password' ? setType('text') : setType('password')
    type === 'password' ? setShowText('Скрыть') : setShowText('Показать')
  }

  const dispatch = useDispatch()

  const showAlert = useSelector(state => state.alert.showAlert)
  
  const loginHandler = () => dispatch(login({...form}))

  return (
    <Main>
      <Auth>
        <Container>

          <Header>
            Вход
          </Header>

          <Form>

            <FormGroup>
              <Group width='100%'>
                <Label htmlFor='email'>Email</Label>
                <Input type='text' id='email' name='email' onChange={changeHandler}/>
              </Group>
            </FormGroup>

            <FormGroup>
              <Group width='70%'>
                <Label htmlFor='password'>Password</Label>
                <Input type={type} id='password' name='password' onChange={changeHandler}/>
              </Group>
              <Button width='30%' onClick={() => selectTypeHandler()}>{showText}</Button>
            </FormGroup>

            <Button disabled={showAlert} br='4px' onClick={() => loginHandler()}>Войти</Button>

          </Form>
        </Container>
      </Auth>

      <Footer>
        <Content>У вас ещё нет аккаунта?</Content>
        <Link to='/signup'>&nbsp;Зарегистрироваться</Link>
      </Footer>
      
    </Main>
  )
}
