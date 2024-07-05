import { FC, ReactElement, useState } from 'react';
import styled from 'styled-components';

type IProps = {
    changeScenes: () => void;
};
const Pvp: FC<IProps> = ({ changeScenes }): ReactElement => {
    return (
        <>
            <Section>
                <ComingSoon src="https://.../gif/..." />
                <Bg src="https://.../main/..." />
            </Section>
            <Actios src={`https://.../main/...`} onClick={() => changeScenes()} />
        </>
    );
};
const Section = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: auto;
    position: relative;
`;
const ComingSoon = styled.img`
    position: absolute;
    width: 58.46153846153846%;
    top: 11.588235294117648%;
    left: 50%;
    transform: translateX(-50%);
`;
const Bg = styled.img`
    width: 100%;
`;

const Actios = styled.img`
    position: absolute;
    width: 0.52rem;
    right: 0.22rem;
    bottom: 2.76rem;
    z-index: 3;
`;
export default Pvp;
