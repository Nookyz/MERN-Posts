import React from 'react'
import { useHistory } from 'react-router'
import { useDispatch } from 'react-redux'
import {filterPosts} from '../redux/actions/post'
import { 
  ReactButton, 
  NodeButton,
  JavaScriptButton,
  VueButton,
  AngularButton,
  HTMLButton,
  CSSButton,
  JavaButton,
  ExpressButton,
  NextButton
} from '../global/GlobalStyle'

export const TypeButton = ({type}) => {
  const history = useHistory()
  const dispatch = useDispatch()

  const clickHandler = () => {
    dispatch(filterPosts(type))
    history.push(`/tag/${type.toLowerCase()}`)
  }
  switch(type){
    case 'React':
      return <ReactButton style={{margin: '0'}} onClick={clickHandler}>{type}</ReactButton>
    case 'Node.js':
      return <NodeButton style={{margin: '0'}} onClick={clickHandler}>{type}</NodeButton>
    case 'JavaScript':
      return <JavaScriptButton style={{margin: '0'}} onClick={clickHandler}>{type}</JavaScriptButton>
    case 'Vue.js':
      return <VueButton style={{margin: '0'}} onClick={clickHandler}>{type}</VueButton>
    case 'Angular':
      return <AngularButton style={{margin: '0'}} onClick={clickHandler}>{type}</AngularButton>
    case 'HTML':
      return <HTMLButton style={{margin: '0'}} onClick={clickHandler}>{type}</HTMLButton>
    case 'CSS':
      return <CSSButton style={{margin: '0'}} onClick={clickHandler}>{type}</CSSButton>
    case 'Java':
      return <JavaButton style={{margin: '0'}} onClick={clickHandler}>{type}</JavaButton>
    case 'Express':
      return <ExpressButton style={{margin: '0'}} onClick={clickHandler}>{type}</ExpressButton>
    case 'Next.js':
      return <NextButton style={{margin: '0'}} onClick={clickHandler}>{type}</NextButton>
    default:
      console.log('Error in check type')
  }
}
