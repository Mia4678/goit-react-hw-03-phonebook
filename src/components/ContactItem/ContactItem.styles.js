import styled from 'styled-components';

export const ContactItemContainer = styled.div`
  border: 1px solid #000000;
  padding: 10px;
  margin: 10px 0;
`;

export const ContactInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ContactName = styled.p`
  font-weight: bold;
`;

export const ContactNumber = styled.p`
  color: #555;
`;

export const DeleteButton = styled.button`
  background-color: #800080;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  &:hover {
    background-color: #cc2525;
  }
`;
