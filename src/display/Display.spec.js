// Test away!
// Test away
import React from 'react';
import { render } from '@testing-library/react';
import 'jest-dom/extend-expect';

import Display from './Display';

test ('Display renders successfully', () => {
    expect(render(<Display />)).toMatchSnapshot();
})

// - displays if gate is open/closed and if it is locked/unlocked
// - displays 'Closed' if the `closed` prop is `true` and 'Open' if otherwise
// - displays 'Locked' if the `locked` prop is `true` and 'Unlocked' if otherwise
test ('Displays if gate is open/unlocked and if it is closed/locked', () => {

    const { getByText, rerender } = render(<Display closed={false} locked={false}/>)
    getByText(/^open$/i)
    getByText(/^unlocked$/i)

    rerender (<Display closed={true} locked={true} /> )
    getByText(/^closed$/i)
    getByText(/^locked$/i)

})

// - when `locked` or `closed` use the `red-led` class
// - when `unlocked` or `open` use the `green-led` class
test ('Red class when locked or closed and green class if unlocked or open', () => {
    const { getByText, rerender } = render(<Display locked={true} closed={true} /> );

    expect(getByText(/^closed$/i)).toHaveClass('red-led');
    expect(getByText(/^locked$/i)).toHaveClass('red-led'); 

    //testing below for green class when open and unlocked
    rerender (<Display closed={false} locked={false} /> )

    const unlocked = getByText(/^unlocked$/i);
    expect(unlocked).toHaveClass('green-led');

    const open = getByText(/^open$/i);
    expect(open).toHaveClass('green-led');
    
})


