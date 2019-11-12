export const toggleLocked = () => {
    this.setState(prev => ({ locked: !prev.locked }));
  };

export const  toggleClosed = () => {
    this.setState(prev => ({ closed: !prev.closed }));
  };