import { FC, ReactElement } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { Header } from '../home/components';
import Notice from '../home/components/notice';
const Pvp: FC = (): ReactElement => {
    const router = useRouter();
    const [, setProgress] = useProgress();

    return (
        <View>
            <Notice />
            <Header disableClick={true} />
            <Section>
                <ComingSoon src="https://.../gif/airship..." />
                <Bg src="https://.../main/pvpbg..." />
            </Section>
        </View>
    );
};

const View = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
`;

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
