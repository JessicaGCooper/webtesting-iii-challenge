// Test away!
// Test away
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import 'jest-dom/extend-expect';
// import { toggleLocked, toggleClosed } from '../utils/utils.js'

import Controls from './Controls';


test ('Controls renders successfully', () => {
    expect(render(<Controls />)).toMatchSnapshot();
})



test ('', () => {

    const toggleLockedMock = jest.fn();
    const toggleClosedMock = jest.fn();

    const { getByText } = render(
    <Controls locked={false} closed={false} toggleLocked={toggleLockedMock} toggleClosed={toggleClosedMock} />)
    
    // ACT - getting the node by text
    const closeGateButton = getByText(/^close gate$/i)
    const lockGateButton = getByText(/^lock gate$/i)
   

    // const unlockedButton = getByText(/^unlocked gate$/i)
    // const openGateButton = getByText(/^open gate$/i)
    fireEvent.click(closeGateButton);
    expect(toggleClosedMock).toHaveBeenCalled()
    


    fireEvent.click(lockGateButton);

    // expect(toggleLockedMock).toHaveBeenCalled()
    

})

test ('', () => {

})

// .toBeDisabled


// - provide buttons to toggle the `closed` and `locked` states.
// - buttons' text changes to reflect the state the door will be in if clicked
// - the closed toggle button is disabled if the gate is locked
// - the locked toggle button is disabled if the gate is open