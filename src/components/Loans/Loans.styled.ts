import styled from 'styled-components';

export const GridView = styled.div`
    width: 60%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
`;

export const ItemContainer = styled.div`
    width: 100%;
    height: 200px;
    box-shadow: 0 4px 12px rgba(186, 199, 213, 0.5);
    grid-gap: 15px;
    padding: 15px;
`;
