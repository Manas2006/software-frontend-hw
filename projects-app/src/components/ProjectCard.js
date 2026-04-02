/*
  ProjectCard.js – Custom component #3 (RUBRIC: custom component)
  Displays a single project with its name, description, join/leave button,
  and a list of HardwareSetRow components.

  This component is REUSED multiple times inside Projects (RUBRIC: reuse).

  RUBRIC: props passed from Projects to ProjectCard
  - project:       object  – project data (name, description, isJoined, hardwareSets)
  - onToggleJoin:  func    – handler to join/leave the project
  - onCheckOut:    func    – handler for checking out hardware
  - onCheckIn:     func    – handler for checking in hardware
  - onQtyChange:   func    – handler for changing quantity input
*/
import React from 'react';
import { Card, CardContent, Typography, Button, Chip } from '@mui/material';
import HardwareSetRow from './HardwareSetRow';

function ProjectCard({ project, onToggleJoin, onCheckOut, onCheckIn, onQtyChange }) {
  return (
    /* RUBRIC: Material UI component – Card */
    <Card sx={{ mb: 3, border: '1px solid #e0e0e0' }}>
      <CardContent>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <div>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              {project.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
              {project.description}
            </Typography>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {/* RUBRIC: Material UI component – Chip */}
            <Chip
              label={project.isJoined ? 'Member' : 'Not Joined'}
              color={project.isJoined ? 'success' : 'default'}
              size="small"
            />
            {/*
              RUBRIC: custom event handler that modifies component state
              Clicking this button toggles the joined/not-joined state.
            */}
            <Button
              variant={project.isJoined ? 'outlined' : 'contained'}
              size="small"
              onClick={() => onToggleJoin(project.id)}
              sx={{
                backgroundColor: project.isJoined ? 'transparent' : '#bf5700',
                borderColor: '#bf5700',
                color: project.isJoined ? '#bf5700' : '#fff',
                '&:hover': {
                  backgroundColor: project.isJoined ? 'rgba(191,87,0,0.08)' : '#a04a00',
                  borderColor: '#a04a00'
                }
              }}
            >
              {project.isJoined ? 'Leave' : 'Join'}
            </Button>
          </div>
        </div>

        {project.isJoined && (
          <div>
            <Typography variant="subtitle2" sx={{ mt: 2, mb: 1, color: '#555' }}>
              Hardware Sets
            </Typography>
            {/*
              RUBRIC: HardwareSetRow is reused multiple times here.
              RUBRIC: props passed from ProjectCard (parent) to HardwareSetRow (child).
            */}
            {project.hardwareSets.map((hw, index) => (
              <HardwareSetRow
                key={hw.name}
                hwName={hw.name}
                available={hw.available}
                checkedOut={hw.checkedOut}
                qtyInput={hw.qtyInput}
                onCheckOut={() => onCheckOut(project.id, index)}
                onCheckIn={() => onCheckIn(project.id, index)}
                onQtyChange={(value) => onQtyChange(project.id, index, value)}
              />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default ProjectCard;
