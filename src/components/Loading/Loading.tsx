import React from 'react';
import loadingCircle from '../../assets/loadingCircle.svg';
import {Image, LoadingContainer} from './Loading.styled';

export const Loading: React.FC = () => (
    <LoadingContainer>
        <Image src={loadingCircle} />
    </LoadingContainer>
);
