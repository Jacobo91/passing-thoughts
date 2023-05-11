import styled from "@emotion/styled";

export const Input = styled.input`
    min-height: 40px;
    flex: 4;
    boder-radius: 5px;
    text-indent: 10px;
`;

export const Button = styled.button`
    background-color: #f2f2f2;
    boder-radius: 15px;
`;

export const AddButton = styled(Button)`
    flex: 1;
    border: 1px solid black;
`;

export const RemoveBtn = styled(Button)`
    border: none;
`;

export const MyThought = styled.div`
    background-color: #f2f2f2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin: 20px 0;
`;