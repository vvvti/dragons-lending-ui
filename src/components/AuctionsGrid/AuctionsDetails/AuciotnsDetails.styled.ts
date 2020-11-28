import styled from 'styled-components';

export const GridView = styled.div`
    width: 80%;
    display: grid;
    grid-gap: 70px;
    padding: 100px 15px 15px 15px;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    position: relative;
`;
