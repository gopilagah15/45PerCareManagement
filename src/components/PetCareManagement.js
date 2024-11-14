import React, { useState } from 'react';
import AddAppointment from './AddAppointment';
import ReminderList from './ReminderList';
import HealthHistory from './HealthHistory';

const PetCareManagement = () => {
  const [appointments, setAppointments] = useState([]);

  // Function to add a new appointment
  const addAppointment = (type, date) => {
    const newAppointment = { type, date, id: appointments.length + 1 };
    setAppointments([...appointments, newAppointment]);
  };

  return (
    <div className="management-container">
      <h1>Pet Care Management</h1>
      <AddAppointment addAppointment={addAppointment} />
      <ReminderList appointments={appointments} />
      <HealthHistory appointments={appointments} />
    </div>
  );
};

export default PetCareManagement;
