import React from 'react';

const ReminderList = ({ appointments }) => {
  const upcomingAppointments = appointments.filter((appointment) => {
    const today = new Date();
    const appointmentDate = new Date(appointment.date);
    return appointmentDate >= today;
  });

  return (
    <div className="reminder-list">
      <h2>Upcoming Reminders</h2>
      {upcomingAppointments.length > 0 ? (
        <ul>
          {upcomingAppointments.map((appointment) => (
            <li key={appointment.id}>
              {appointment.type} on {appointment.date}
            </li>
          ))}
        </ul>
      ) : (
        <p>No upcoming appointments</p>
      )}
    </div>
  );
};

export default ReminderList;
