import {ChangeEvent, FC, useState} from 'react';

interface FullInputProps {
    addMessage: (title: string) => void
}

export const FullInput: FC<FullInputProps> = ({addMessage}) => {
    let [title, setTitle] = useState('')
    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    return (
        <div>
            <input value={title} onChange={onChangeInputHandler}/>
            <button onClick={() => {
                addMessage(title)
                setTitle('')
            }}>+
            </button>
        </div>
    )
}