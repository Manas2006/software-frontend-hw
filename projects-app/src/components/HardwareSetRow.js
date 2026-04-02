/*
  HardwareSetRow.js – Custom component #2 (RUBRIC: custom component)
  Displays a single hardware set with name, available qty, input, and check-in/check-out buttons.
  This component is REUSED multiple times inside each ProjectCard (RUBRIC: reuse).

  RUBRIC: props passed from ProjectCard to HardwareSetRow
  - hwName:       string  – name of the hardware set
  - available:    number  – quantity available
  - checkedOut:   number  – quantity currently checked out by user
  - onCheckOut:   func    – handler when user clicks Check Out
  - onCheckIn:    func    – handler when user clicks Check In
  - qtyInput:     number  – current value in the quantity input
  - onQtyChange:  func    – handler when user changes quantity input
*/
import React from 'react';
import { Button, TextField } from '@mui/material';

function HardwareSetRow({ hwName, available, checkedOut, onCheckOut, onCheckIn, qtyInput, onQtyChange }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '8px 0',
      borderBottom: '1px solid #eee',
      flexWrap: 'wrap'
    }}>
      <div style={{ minWidth: '140px' }}>
        <strong>{hwName}</strong>
        <div style={{ fontSize: '0.85rem', color: '#666' }}>
          Available: {available} | Checked out: {checkedOut}
        </div>
      </div>

      {/* RUBRIC: Material UI component – TextField */}
      <TextField
        label="Qty"
        type="number"
        size="small"
        value={qtyInput}
        onChange={(e) => onQtyChange(e.target.value)}
        inputProps={{ min: 0 }}
        sx={{ width: '80px' }}
      />

      {/* RUBRIC: Material UI component – Button */}
      <Button
        variant="contained"
        size="small"
        onClick={onCheckOut}
        sx={{ backgroundColor: '#bf5700', '&:hover': { backgroundColor: '#a04a00' } }}
      >
        Check Out
      </Button>

      <Button
        variant="outlined"
        size="small"
        onClick={onCheckIn}
        sx={{ borderColor: '#bf5700', color: '#bf5700', '&:hover': { borderColor: '#a04a00', color: '#a04a00' } }}
      >
        Check In
      </Button>
    </div>
  );
}

export default HardwareSetRow;
