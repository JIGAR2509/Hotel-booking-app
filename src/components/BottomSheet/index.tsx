import React, { ReactNode, useEffect, useRef } from 'react';
import styles from './styles';
import RBSheet from 'react-native-raw-bottom-sheet';

export type BottomSheetProps = {
  isOpen: boolean;
  sheetHeight?: any;
  onClose: () => void;
  children: ReactNode;
  backGroundColor?: string;
};

const BottomSheet = ({
  isOpen,
  onClose,
  backGroundColor,
  children,
  sheetHeight,
}: BottomSheetProps) => {
  const ref = useRef<any>(null);

  useEffect(() => {
    if (isOpen) {
      ref?.current?.open();
    } else {
      ref?.current?.close();
    }
  }, [isOpen]);

  return (
    <RBSheet
      ref={ref}
      onClose={onClose}
      openDuration={400}
      closeDuration={100}
      draggable={true}
      useNativeDriver={false}
      customStyles={{
        wrapper: styles.wrapper,
        container: [
          styles.bottomsheetContainer,
          { backgroundColor: backGroundColor, height: sheetHeight },
        ],
        draggableIcon: styles.bottomsheetIcon,
      }}
      customModalProps={{
        animationType: 'slide',
        supportedOrientations: ['landscape', 'portrait'],
      }}
    >
      {children}
    </RBSheet>
  );
};

export default BottomSheet;
