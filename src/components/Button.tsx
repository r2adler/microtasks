import {FC} from 'react';

interface ButtonProps {
    name: string
    callBack: () => void
}

export const Button: FC<ButtonProps> = (props) => {
    const onClickButtonHandler = () => {
        props.callBack()
    }
    return (
        <button onClick={onClickButtonHandler}>{props.name}</button>
    )
}