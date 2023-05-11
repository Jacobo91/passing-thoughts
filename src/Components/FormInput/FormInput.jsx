/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Input } from "../../styles";
import { AddButton } from '../../styles';
import { useState } from 'react';


function FormInput({ onThoughtChange }){

    const [newThought, setNewThought] = useState("");

    const addThought = (e) => {
        e.preventDefault();
        if(!newThought) return;
        onThoughtChange(newThought);
        setNewThought("");
    }

    return(
        <form
        css={css`
            display: flex;
            gap: 10px;
        `}
        action=""
        onSubmit={addThought}
        >
            <Input 
                type="text"
                placeholder="What's on your mind ?"
                value={newThought}
                onChange={(e) => setNewThought(e.target.value)}
                name='thought'
                data-testid="text input"
            />
            <AddButton
                data-testid="add button"
            >
                Add
            </AddButton>
        </form>
    )
}

export default FormInput;