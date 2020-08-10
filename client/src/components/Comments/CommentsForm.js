import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {addComment} from '../../redux/actions/post'
import {
  MyCommentsForm,
  Title,
  Input,
  Box,
  Button
} from './Comments.styled'

export const CommentsForm = ({postId}) => {
  const dispatch = useDispatch()

  const [text, setText] = useState('')
  const [show, setShow] = useState(false)

  const changeHandler = e => setText(e.target.value)

  const hideHandler = () => {
    setShow(false)
    setText('')
  }
  const clickHandler = () => {
    dispatch(addComment(postId, {text}))
    setText('')
  }
  
  useEffect(() => {
    text.length > 0 && setShow(true)
  }, [text])

  const commLen = useSelector(state => state.post.post.comments)
  
  return (
    <MyCommentsForm>
      <Title>
        {commLen.length > 0 ? 
        `${commLen.length} комментариев` :
        'Комментариев нету'}
      </Title>
      <Input placeholder='Оставьте комментарий' value={text} onChange={changeHandler}/>
      {
        show &&
        <Box>
          <Button onClick={hideHandler}>Отмена</Button>
          <Button disabled={text.length < 1} onClick={clickHandler}>Оставить комментарий</Button>
        </Box>
      }
      
    </MyCommentsForm>
  )
}
