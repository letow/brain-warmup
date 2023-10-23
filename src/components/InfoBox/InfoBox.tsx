import { FC, ReactNode } from 'react';
import s from './InfoBox.module.scss';

interface InfoBoxProps {
    children: ReactNode;
    center?: boolean;
    isOpen?: boolean;
    onClose?: () => void;
}

const InfoBox: FC<InfoBoxProps> = ({ children, center = false, isOpen = true, onClose }) => {
    return (
        <>
            {isOpen && (
                <div className={`${s.InfoBox} ${center && s.center}`}>
                    <div className={s.content}>
                        {onClose && <div className={s.cross} onClick={() => onClose()} />}
                        {children}
                    </div>
                </div>
            )}
        </>
    );
};

export default InfoBox;
