import { FC, ReactNode } from "react";
import s from "./InfoBox.module.scss";

interface InfoBoxProps {
    children: ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

const InfoBox: FC<InfoBoxProps> = ({ children, isOpen, onClose }) => {
    return (
        <>
            {isOpen && (
                <div className={s.InfoBox}>
                    <div className={s.content}>
                        <div className={s.cross} onClick={() => onClose()} />
                        {children}
                    </div>
                </div>
            )}
        </>
    );
};

export default InfoBox;
