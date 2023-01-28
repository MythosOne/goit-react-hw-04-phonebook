import styled from 'styled-components';

export const Container = styled.div`
    background-color: white;
    width: 380px;
    margin: 16px  auto;
    border: 1px solid rgb(236, 236, 236);
    border-radius: 4px;
    box-shadow: 0px 1px 3px rgb(0, 0, 0, 0.12);
`;

export const TitleContainer = styled.h1`
    font-size: 36px;
    text-align: center;
`;

export const TitleContacts = styled.h2`
    font-size: 36px;
    text-align: center;
    margin-bottom: 10px;
`;

export const TitleFilter = styled.h3`
    font-size: 24px;
    text-align: center;
    margin: 0;
    margin-bottom: 10px;
`;

export const Form = styled.form`
    width: 300px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 10px;
    margin: 0 auto;
    border: 1px solid rgb(236, 236, 236);
    border-radius: 4px;
    box-shadow: 0px 1px 3px rgb(0, 0, 0, 0.12);
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: auto;
    font-size: 16px;
    font-weight: 600;
`;

export const AddButton = styled.button`
    border-radius: 4px;
    width: 100px;
    height: 30px;
    text-align: center;
    border: none;
    font-size: 14px;
    font-weight: 600;
    background-color: #2196f3;
    color: white;
    margin: 0 auto;
`;

export const DeleteButton = styled.button`
    border-radius: 4px;
    text-align: center;
    border: none;
    font-size: 12px;
    background-color: #2196f3;
    color: white;
`;

export const Input = styled.input`
    height: 20px;
    border: 2px solid rgb(163 167 167);
    border-radius: 4px;
`;



export const ContainerFilter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ContactsList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 0;
`;

export const ContactsItem = styled.li`
    width: 280px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
`;

export const Message = styled.ul`
    padding: 0;
    text-align: center;

    font-size: 16px;
    font-weight: 600;
    color: orange;
`;
