// Test away!
// Test away
import React from 'react';
import { render } from '@testing-library/react';
import 'jest-dom/extend-expect';

import Display from './Display';

test ('Display renders successfully', () => {
    expect(render(<Display />)).toMatchSnapshot();
})


test ('Displays if gate is open/unlocked and if it is closed/locked', () => {

    
const { getByText, rerender } = render(<Display closed={false} locked={false}/>)
getByText(/^open$/i)
getByText(/^unlocked$/i)

rerender (<Display closed={true} locked={true} /> )
getByText(/^closed$/i)
getByText(/^locked$/i)

})

test ('', () => {

})

test ('Red class when locked or closed', () => {
    const { getByText } = render(<Display locked={true} closed={true} /> );

    expect(getByText(/^closed$/i)).toHaveClass('red-led');
    expect(getByText(/^locked$/i)).toHaveClass('red-led'); 

    // rerender (<Display closed={false} locked={true})

    // const unlocked = getByText(/^unlocked$/i);

    // expect(unlocked).toHaveClass('green-led');
    
})

// - displays if gate is open/closed and if it is locked/unlocked
// - displays 'Closed' if the `closed` prop is `true` and 'Open' if otherwise
// - displays 'Locked' if the `locked` prop is `true` and 'Unlocked' if otherwise
// - when `locked` or `closed` use the `red-led` class
// - when `unlocked` or `open` use the `green-led` class