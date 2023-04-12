import React from 'react';
import Button from '@atlaskit/button';
import styled, { css } from "styled-components";
import CheckIcon from "@atlaskit/icon/glyph/check";
import TrashIcon from '@atlaskit/icon/glyph/trash'
// import { Container } from './styles';

const ButtonStyle = styled(Button)`
margin-top : 5px;

&,
&:hover {
${p => p.iscompleted === 'true' && css`
    text-decoration : line-through;
`}
}
&:hover {
    .check-icon{
        display:inline-block;
    }
}
    .check-icon{
        display: none;

        &:hover{
            background-color : #e2e2e2;
            border-radius:3px;
        }
    }
`;

function Todo({ todo , onCheckBtnClick }) {
  return (<ButtonStyle 
    iscompleted= {todo.isCompleted.toString()}
    shouldFitContainer 
    iconAfter={ !todo.isCompleted && (
                        <span className='check-icon' onClick={() => onCheckBtnClick(todo.id)}>
                        <CheckIcon primaryColor='#4fff4f'/></span>
                    )
            }
    >
        {todo.name}
    </ButtonStyle>
    ); 
}

export default Todo;