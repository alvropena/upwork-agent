import React from 'react';

const Popup: React.FC = () => {
  return (
    <div className="popup">
      <h2>Job Helper</h2>
      <button 
        onClick={() => {
          chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id!, {action: "openNextJob"});
          });
        }}
      >
        Open Next Job
      </button>
    </div>
  );
};

export default Popup;