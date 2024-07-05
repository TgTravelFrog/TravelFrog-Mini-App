import styled from 'styled-components';
import { FC, ReactElement } from 'react';
import { useNoticeModal } from '@/state/base/hooks';
import { Modal } from 'antd';

const NoticeModal: FC = (): ReactElement => {
    const [noticeInfo, handNoticeModal] = useNoticeModal();

    return (
        <ConfirmModal width="80%" footer={null} open={noticeInfo.open} onOk={() => handNoticeModal({ open: true })} onCancel={() => handNoticeModal({ open: false })}>
            <ConfirmContent>
                <h5>{noticeInfo.info.name}</h5>
                {noticeInfo.info.describe}
            </ConfirmContent>
        </ConfirmModal>
    );
};

const ConfirmModal = styled(Modal)`
    .ant-modal-content {
        background: none;
        position: relative;
    }
`;
const ConfirmContent = styled.div`
    border-radius: 0.12rem;
    border: 2px solid #565f4e;
    background: #e7dec1;
    padding: 0.12rem 0.14rem;
    color: #555e4b;
    font-size: 0.16rem;
    line-height: 1.4;
    position: relative;
    z-index: 3;
    h5 {
        font-size: 0.2rem;
        margin-bottom: 0.05rem;
    }
`;
export default NoticeModal;
