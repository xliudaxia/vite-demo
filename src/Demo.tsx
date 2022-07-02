import React,{useRef} from 'react'
import { Button } from 'antd';
import { message } from 'react-message-popup'



export default () => {
  const buttonRef  = useRef();
  const click = async ()=>{
    buttonRef && buttonRef.current?.blur();
    message.loading('Loading...', 4000)

  }
  return <>
  <Button onClick={click} ref={buttonRef} type="primary">Primary Button</Button>
  <Button>Default Button</Button>
  <Button type="dashed">Dashed Button</Button>
  <br />
  <Button type="text">Text Button</Button>
  <Button type="link">Link Button</Button>
</>
}
