import React from 'react'
import { Icon, Input } from 'semantic-ui-react'

const InputExampleIconElement = (props) => (
  <Input 
   icon={<Icon name='search' inverted circular link />} 
   placeholder='Search...'  
   onChange={props.onchange}
   value={props.value}/>
)

export default InputExampleIconElement