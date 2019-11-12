// export const toggleLocked = () => {
//     this.setState(prev => ({ locked: !prev.locked }));
//   };

// export const  toggleClosed = () => {
//     this.setState(prev => ({ closed: !prev.closed }));
//   };



test("button text changes based on current state", async () => {
    // const [locked, setLocked] = useState(false);
    // const [closed, setClosed] = useState(false);
    let locked = false;
    let closed = false;
    const setLocked = () => (locked = !locked);
    const setClosed = () => (closed = !closed);
    const controls = render(<Controls closed={closed} locked={locked} />);
    const lockBtn = controls.getByText("Lock Gate");
    const closeBtn = controls.getByText("Close Gate");
    lockBtn.onClick = setLocked((locked) => !locked);
    closeBtn.onClick = setClosed((closed) => (!closed));
    expect(lockBtn).toBeDefined;
    expect(closeBtn).toBeDefined;
    fireEvent.click(closeBtn);
    await fireEvent.click(lockBtn);
    expect(lockBtn).not.toBeDefined;
    expect(closeBtn).not.toBeDefined;
})


test("Has buttons for open/close and lock/unlock", () => {
    const { getByText, rerender } = render(<Controls />);

    const props = { closed: true, locked: true };

    expect(getByText(/close gate/i)).toBeTruthy();
    expect(getByText(/lock gate/i)).toBeTruthy();

    rerender(<Controls {...props} />);

    expect(getByText(/open gate/i)).toBeTruthy();
    expect(getByText(/unlock gate/i)).toBeTruthy();
});

test("it can't open the gate if locked", () => {
    //check if open button disabled
    const { getByText } = render(<Controls closed={true} locked={true} />);
  
    expect(getByText(/open gate/i).disabled === true);
  });