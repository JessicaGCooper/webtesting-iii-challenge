// Test away!
// Test away
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import 'jest-dom/extend-expect';

import Controls from './Controls';


test ('Controls renders successfully', () => {
    render(<Controls />)
})


// - provide buttons to toggle the `closed` and `locked` states.
// - buttons' text changes to reflect the state the door will be in if clicked
test ('gate unlocked and open, closeGateButton click fires function', () => {

    const toggleClosedMock = jest.fn();

    const { getByText } = render(
    <Controls locked={false} closed={false} toggleClosed={toggleClosedMock} />)
    
    //testing for default button display
    const closeGateButton = getByText(/^close gate$/i)
    const lockGateButton = getByText(/^lock gate$/i)

    //close gate button clicked
    fireEvent.click(closeGateButton);
    expect(toggleClosedMock).toHaveBeenCalled()

    //next state locked will be false and closed will be true
})

// - provide buttons to toggle the `closed` and `locked` states.
// - buttons' text changes to reflect the state the door will be in if clicked
test ('gate unlocked and closed, lockGateButton click fires function', () => {

    const toggleLockedMock = jest.fn();

    const { getByText } = render(
    <Controls locked={false} closed={true} toggleLocked={toggleLockedMock} />)
    
    // ACT - getting the node by text
    const openGateButton = getByText(/^open gate$/i)
    //the close gate button now fails the test but the open gate button passes
    //this shows that the button changed text from 'close gate' to 'open gate' 
    //when button was clicked (and closed became true)
    const lockGateButton = getByText(/^lock gate$/i)


    fireEvent.click(lockGateButton);
    expect(toggleLockedMock).toHaveBeenCalled()
    
    //next state both locked and closed will be true
})

test ('gate locked and closed, unlockGateButton click fires function', () => {

    const toggleLockedMock = jest.fn();

    const { getByText } = render(
    <Controls locked={true} closed={true} toggleLocked={toggleLockedMock} />)
    
    // ACT - getting the node by text
    const openGateButton = getByText(/^open gate$/i)
    const unlockGateButton = getByText(/^unlock gate$/i)
    //the lock gate button now fails the test as locked state is true 
    //but the unlock gate button passes
    //this shows that the button changed text from 'lock gate' to 'unlock gate' 
    //when button was clicked (and locked became true)

    fireEvent.click(unlockGateButton);
    expect(toggleLockedMock).toHaveBeenCalled()
    
    //next state locked will be false and closed will be true
})

test ('gate unlocked and closed, openGateButton click fires function', () => {

    const toggleClosedMock = jest.fn();

    const { getByText } = render(
    <Controls locked={false} closed={true} toggleClosed={toggleClosedMock} />)
    
    //testing for default button display
    const openGateButton = getByText(/^open gate$/i)
    //close gate fails
    //open gate passes
    //text on button has changed
    const lockGateButton = getByText(/^lock gate$/i)

    //close gate button clicked
    fireEvent.click(openGateButton);
    expect(toggleClosedMock).toHaveBeenCalled()

    //next state locked will be false and closed will be false (back to default)
})

// - the closed toggle button is disabled if the gate is locked
// - the locked toggle button is disabled if the gate is open
test ('the locked toggle button is disabled if the gate is open', () => {

    const toggleLockedMock = jest.fn();

    const { getByText } = render(
    <Controls locked={false} closed={false}  toggleLocked={toggleLockedMock}/>)
    
    const lockGateButton = getByText(/^lock gate$/i)

    //close gate button clicked
    fireEvent.click(lockGateButton);
    expect(toggleLockedMock).not.toHaveBeenCalled()
    expect(lockGateButton).toBeDisabled

})

test ('the closed toggle button is disabled if the gate is locked', () => {

    const toggleClosedMock = jest.fn();

    const { getByText } = render(
    <Controls locked={true} closed={true} toggleClosed={toggleClosedMock}/>)
    
    //testing for default button display
    const openGateButton = getByText(/^open gate$/i)

    //close gate button clicked
    fireEvent.click(openGateButton);
    expect(toggleClosedMock).not.toHaveBeenCalled()
    expect(openGateButton).toBeDisabled

})


