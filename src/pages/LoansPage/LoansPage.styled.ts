import styled from 'styled-components';

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const StatusContainer = styled.div`
    display: flex;
    width: 80%;
    height: 50px;
    align-items: center;
    justify-content: flex-end;
    margin: 20px 0;
    padding: 0 20px;
    //box-shadow: 0 4px 12px hsla(211, 24%, 78%, 0.5);
`;

export const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 80vh;
`;

export const StyledText = styled.div`
    align-self: center;
    color: hsl(0, 0%, 0%);
`;
