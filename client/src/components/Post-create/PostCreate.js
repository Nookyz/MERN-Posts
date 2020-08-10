import React, { useState } from 'react'
import {
  Container,
  Box,
  Title,
  Input,
  Textarea,
  Select,
  Option,
  Button
} from './PostCreate.styled'
import { useHistory } from 'react-router'
import {addPost} from '../../redux/actions/post'
import { useDispatch } from 'react-redux'


const objType = [
  {id: 0, value: 'JavaScript'},
  {id: 1, value: 'Node.js'},
  {id: 2, value: 'Next.js'},
  {id: 3, value: 'React'},
  {id: 4, value: 'Vue.js'},
  {id: 5, value: 'Angular'},
  {id: 6, value: 'HTML'},
  {id: 7, value: 'CSS'},
  {id: 8, value: 'Java'},
  {id: 9, value: 'Express'},
]

export const PostCreate = () => {

  const dispatch = useDispatch()
  const history = useHistory()
  const goBack = () => history.goBack()

  const [form, setForm] = useState({
    title: '',
    text: ''
  })
  const {title, text} = form

  const [value, setValue] = useState(objType[0].value)
  
  const selectHandleChange = e => setValue(e.currentTarget.value)

  const formHandleChange = e => {
    setForm({
      ...form, 
      [e.target.name]: e.target.value
    })
  }

  const clickHandler = () => {
    dispatch(addPost({...form, type: value}))
    setForm({
      title: '',
      text: ''
    })
  }

  return (
    <Container>
      <Box style={{flexDirection: 'row'}}>
        <Button onClick={goBack}>Назад</Button>
      </Box>
      <Box>
        <Title>Тема публикации:</Title>
        <Select name="status" placeholder='Выбирите название' onChange={selectHandleChange}>
          
          {objType.map(item => (
            <Option 
              key={item.id} 
              value={item.value}
            >
              {item.value}
            </Option>
          ))}
          
        </Select>
      </Box>
      <Box>
        <Title>Заголовок:</Title>
        <Input 
          type='text' 
          name='title' 
          value={title}
          onChange={formHandleChange}
        />
      </Box>
      <Box>
        <Title>Текст:</Title>
        <Textarea 
          name='text' 
          value={text}
          onChange={formHandleChange}
        />
      </Box>
      <Box style={{flexDirection: 'row'}}>
        <Button>Отмена</Button>
        <Button 
          disabled={text.length < 1 || title.length < 1}
          style={{marginLeft: '10px'}}
          onClick={clickHandler}
        >
          Опубликоать
        </Button>
      </Box>
    </Container>
  )
}
