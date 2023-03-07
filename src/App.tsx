import {useState} from 'react';
import {FullInput} from './components/FullInput';
import {Input} from './components/Input';
import {Button} from './components/Button';


function App() {
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])
    let [title, setTitle] = useState('')

    const addMessage = (title: string) => {
        let newMessage = {message: title}
        setMessage([...message, newMessage])
    }
    const callBackButtonHandler = () => {
        addMessage(title)
        setTitle('')
    }

    return (
        <div>
            {/*<FullInput addMessage={addMessage}/>*/}
            <Input title={title} setTitle={setTitle}/>
            <Button name={'+'} callBack={callBackButtonHandler}/>
            {
                message.map((el, index) => (
                    <div key={index}>{el.message}</div>
                ))
            }
        </div>
    )
}

export default App