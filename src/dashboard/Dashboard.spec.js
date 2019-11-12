// Test away
import React from 'react';
import { render } from '@testing-library/react';

import Dashboard from './Dashboard';

test ('Dashboard renders successfully', () => {
    expect(render(<Dashboard />)).toMatchSnapshot();
})

test ('Dashboard renders Display Component', () => {

    const { getByText } = render(<Dashboard />)

 //note Display cannot contain text 'locked' or 'closed' because default state is 'false' and 'false'
 //I tested this by changing the default state for locked and closed to true and then it would getByText unlocked & closed
 //I also check to make sure this test passed when the Controls component was commented out
 //& when both Display & Controls were commented out and it failed
    getByText(/^unlocked$/i);
    getByText(/^open$/i);
//also the default must be unlocked and open as this test fails when attempting to find text locked or closed
})

//the logic about the default values of locked and closed being false also applies here
test ('Dashboard renders Controls Component', () => {

    const { getByText } = render(<Dashboard />)

    getByText(/^lock gate$/i);
    getByText(/^close gate$/i);
})


