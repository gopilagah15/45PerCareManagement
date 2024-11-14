import React from 'react';

const HealthHistory = ({ appointments }) => {
  return (
    <div className="health-history">
      <h2>Health History</h2>
      {appointments.length > 0 ? (
        <ul>
          {appointments.map((appointment) => (
            <li key={appointment.id}>
              {appointment.type} on {appointment.date}
            </li>
          ))}
        </ul>
      ) : (
        <p>No appointments found</p>
      )}
    </div>
  );
};

export default HealthHistory;
