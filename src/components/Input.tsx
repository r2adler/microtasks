import {ChangeEvent, FC} from 'react';

interface InputProps {
    title: string
    setTitle: (title: string) => void

}


export const Input: FC<InputProps> = ({title, setTitle}) => {
    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    return (
        <input value={title} onChange={onChangeInputHandler}/>
    )
}