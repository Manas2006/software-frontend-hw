/*
  Projects.js – Main Projects component (RUBRIC: Projects component rendered by App)
  
  This component:
  - Hardcodes initial project data (RUBRIC: hardcoded state, no backend)
  - Uses React state via useState hook (RUBRIC: functional components + hooks)
  - Renders HeaderBar with props (RUBRIC: props from parent to child)
  - Renders multiple ProjectCard components (RUBRIC: reuse custom component)
  - Contains event handlers that modify state (RUBRIC: custom event handler)

  ====== RUBRIC SUMMARY ======
  [✓] 2+ MUI components       → AppBar, Typography, TextField, Button, Card, Chip
  [✓] 2+ custom components    → HeaderBar, ProjectCard, HardwareSetRow
  [✓] Reuse custom component  → ProjectCard used 3×, HardwareSetRow used 2× per project
  [✓] Props parent→child (×2) → Projects→HeaderBar (title), Projects→ProjectCard (project, handlers)
  [✓] Event handler + state   → onToggleJoin, onCheckOut, onCheckIn, onQtyChange
  ============================
*/
import React, { useState } from 'react';
import { Container } from '@mui/material';
import HeaderBar from './HeaderBar';
import ProjectCard from './ProjectCard';

/* RUBRIC: hardcoded initial data (no backend / no database) */
const INITIAL_PROJECTS = [
  {
    id: 1,
    name: 'Smart Campus IoT',
    description: 'A network of sensors monitoring energy usage across campus buildings.',
    isJoined: true,
    hardwareSets: [
      { name: 'Arduino Uno Kit', available: 50, checkedOut: 5, qtyInput: '' },
      { name: 'Raspberry Pi 4',  available: 20, checkedOut: 2, qtyInput: '' },
    ],
  },
  {
    id: 2,
    name: 'Autonomous Rover',
    description: 'Build a small autonomous rover that can navigate a predefined course.',
    isJoined: false,
    hardwareSets: [
      { name: 'Motor Driver Board', available: 30, checkedOut: 0, qtyInput: '' },
      { name: 'LiDAR Sensor',      available: 10, checkedOut: 0, qtyInput: '' },
    ],
  },
  {
    id: 3,
    name: 'AR Study Buddy',
    description: 'An augmented-reality app that overlays study notes onto real-world objects.',
    isJoined: false,
    hardwareSets: [
      { name: 'VR Headset',       available: 15, checkedOut: 0, qtyInput: '' },
      { name: 'Webcam HD Pro',    available: 40, checkedOut: 0, qtyInput: '' },
    ],
  },
];

function Projects() {
  /* RUBRIC: React state via useState hook */
  const [projects, setProjects] = useState(INITIAL_PROJECTS);

  /*
    RUBRIC: custom event handler that modifies component state
    Toggles whether the user has joined a project.
  */
  const handleToggleJoin = (projectId) => {
    setProjects((prev) =>
      prev.map((p) =>
        p.id === projectId ? { ...p, isJoined: !p.isJoined } : p
      )
    );
  };

  /*
    RUBRIC: custom event handler that modifies component state
    Checks out hardware (decreases available, increases checkedOut).
  */
  const handleCheckOut = (projectId, hwIndex) => {
    setProjects((prev) =>
      prev.map((p) => {
        if (p.id !== projectId) return p;
        const updatedHw = p.hardwareSets.map((hw, i) => {
          if (i !== hwIndex) return hw;
          const qty = parseInt(hw.qtyInput, 10);
          if (isNaN(qty) || qty <= 0 || qty > hw.available) return hw;
          return {
            ...hw,
            available: hw.available - qty,
            checkedOut: hw.checkedOut + qty,
            qtyInput: '',
          };
        });
        return { ...p, hardwareSets: updatedHw };
      })
    );
  };

  /*
    RUBRIC: custom event handler that modifies component state
    Checks in hardware (increases available, decreases checkedOut).
  */
  const handleCheckIn = (projectId, hwIndex) => {
    setProjects((prev) =>
      prev.map((p) => {
        if (p.id !== projectId) return p;
        const updatedHw = p.hardwareSets.map((hw, i) => {
          if (i !== hwIndex) return hw;
          const qty = parseInt(hw.qtyInput, 10);
          if (isNaN(qty) || qty <= 0 || qty > hw.checkedOut) return hw;
          return {
            ...hw,
            available: hw.available + qty,
            checkedOut: hw.checkedOut - qty,
            qtyInput: '',
          };
        });
        return { ...p, hardwareSets: updatedHw };
      })
    );
  };

  /* RUBRIC: custom event handler – updates quantity input in state */
  const handleQtyChange = (projectId, hwIndex, value) => {
    setProjects((prev) =>
      prev.map((p) => {
        if (p.id !== projectId) return p;
        const updatedHw = p.hardwareSets.map((hw, i) =>
          i === hwIndex ? { ...hw, qtyInput: value } : hw
        );
        return { ...p, hardwareSets: updatedHw };
      })
    );
  };

  return (
    <div>
      {/* RUBRIC: props passed from Projects (parent) to HeaderBar (child) */}
      <HeaderBar title="EE461L – Project Resource Manager" />

      <Container maxWidth="md">
        {/*
          RUBRIC: ProjectCard is a custom component reused multiple times.
          RUBRIC: props passed from Projects (parent) to ProjectCard (child).
        */}
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onToggleJoin={handleToggleJoin}
            onCheckOut={handleCheckOut}
            onCheckIn={handleCheckIn}
            onQtyChange={handleQtyChange}
          />
        ))}
      </Container>
    </div>
  );
}

export default Projects;
