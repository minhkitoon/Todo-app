import React from 'react';
import Button from '@atlaskit/button';
import styled, { css } from "styled-components";
import CheckIcon from "@atlaskit/icon/glyph/check";
import EditorRemoveIcon from '@atlaskit/icon/glyph/editor/remove';
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

function Todo({ todo , onCheckBtnClick , onDeleteBtnClick }) {
  return (<ButtonStyle 
    iscompleted= {todo.isCompleted.toString()}
    shouldFitContainer 
    iconAfter={ !todo.isCompleted 
                        ? 
                            <div>
                                <span className='check-icon' onClick={() => onCheckBtnClick(todo.id)}>
                                    <CheckIcon primaryColor='#4fff4f'/> 
                                </span>
                                <span className='check-icon' onClick={() => onDeleteBtnClick(todo.id)}>
                                    <EditorRemoveIcon primaryColor='red' /> 
                                </span>
                            </div>
                        : 
                        <div>
                            <span className='check-icon'  onClick={() => onDeleteBtnClick(todo.id)}>
                                <EditorRemoveIcon primaryColor='red' /> 
                            </span>
                        </div>
            }
    >
        {todo.name}
    </ButtonStyle>
    ); 
}

export default Todo;