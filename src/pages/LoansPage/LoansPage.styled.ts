import styled from 'styled-components';

export const PageContainer = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const StatusContainer = styled.div`
    display: flex;
    width: 80%;
    height: 150px;
    align-items: center;
    justify-content: center;
    margin: 20px 0;
    box-shadow: 0 4px 12px rgba(186, 199, 213, 0.5);
`;

export const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;
