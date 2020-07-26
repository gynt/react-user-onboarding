import React, { useState } from 'react';
import Modal from './components/Modal';

const UserOnboarding = ({ config, isVisible, onClose, beginFrom }) => {
  const [index, setIndex] = useState(beginFrom);
  
  const selectedData = config.tour[index];
  return (
    <div>
      {
        selectedData.component === 'modal'
        ? <Modal
            intro={selectedData.intro || false}
            index={index}
            setIndex={setIndex}
            maxLength={config.tour.length}
            isVisible={isVisible} 
            onClose={onClose}>
              {selectedData.children}
          </Modal>
        : selectedData.component === 'tooltip'
          ? <Modal
              intro={selectedData.intro || false}
              index={index}
              setIndex={setIndex}
              maxLength={config.tour.length}
              isVisible={isVisible} 
              onClose={onClose}>
                {selectedData.children}
            </Modal>
          : null
      }
    </div>
  )  
}

export { UserOnboarding, Modal };
