import React, { useState, useEffect } from 'react';
import { FaCalendar, FaUser, FaMapMarkerAlt, FaLink, FaBook } from 'react-icons/fa';
import './Schedule.css';

const Schedule = () => {
  const [schedules, setSchedules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [newSchedule, setNewSchedule] = useState({
    topicName: '',
    mentor: '',
    time: '',
    place: '',
    contestLink: '',
    resourceLink: ''
  });

  useEffect(() => {
    fetchSchedules();
  }, []);

  const fetchSchedules = async () => {
    try {
      setLoading(true);
      setError(null);
      console.log('Fetching schedules...');
      
      const response = await fetch('http://localhost:5000/api/schedules');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('Received data:', data);

      if (data.success && Array.isArray(data.schedules)) {
        setSchedules(data.schedules);
      } else {
        setError('Invalid data format received');
      }
    } catch (error) {
      console.error('Error fetching schedules:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewSchedule(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Submitting schedule:', newSchedule); // Debug log

      const response = await fetch('http://localhost:5000/api/schedules', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newSchedule)
      });

      const data = await response.json();
      
      if (data.success) {
        // Reset form
        setNewSchedule({
          topicName: '',
          mentor: '',
          time: '',
          place: '',
          contestLink: '',
          resourceLink: ''
        });
        setShowForm(false);
        // Refresh schedules
        fetchSchedules();
      } else {
        setError(data.message || 'Failed to create schedule');
      }
    } catch (error) {
      console.error('Error creating schedule:', error);
      setError('Failed to create schedule. Please try again.');
    }
  };

  return (
    <section className="schedule-section">
      <h1 className="section-title">Training Schedule</h1>
      <p className="section-subtitle">
        Stay updated with our upcoming training sessions and contests
      </p>

      <div className="schedule-actions">
        <button 
          className="create-schedule-btn"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? '× Cancel' : '+ Create New Schedule'}
        </button>
      </div>

      {showForm && (
        <div className="form-container">
          <form className="schedule-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Topic Name</label>
                <input
                  type="text"
                  name="topicName"
                  value={newSchedule.topicName}
                  onChange={handleInputChange}
                  placeholder="Enter topic name"
                  required
                />
              </div>
              <div className="form-group">
                <label>Mentor</label>
                <input
                  type="text"
                  name="mentor"
                  value={newSchedule.mentor}
                  onChange={handleInputChange}
                  placeholder="Enter mentor name"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Date & Time</label>
                <input
                  type="datetime-local"
                  name="time"
                  value={newSchedule.time}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Place</label>
                <input
                  type="text"
                  name="place"
                  value={newSchedule.place}
                  onChange={handleInputChange}
                  placeholder="Enter location"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Contest Link</label>
                <input
                  type="url"
                  name="contestLink"
                  value={newSchedule.contestLink}
                  onChange={handleInputChange}
                  placeholder="Enter contest URL"
                  required
                />
              </div>
              <div className="form-group">
                <label>Resource Link</label>
                <input
                  type="url"
                  name="resourceLink"
                  value={newSchedule.resourceLink}
                  onChange={handleInputChange}
                  placeholder="Enter resources URL (optional)"
                />
              </div>
            </div>

            <button type="submit" className="submit-btn">Create Schedule</button>
          </form>
        </div>
      )}

      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

      {loading ? (
        <div className="loading-spinner">Loading...</div>
      ) : schedules.length === 0 ? (
        <div className="no-schedules">No schedules found.</div>
      ) : (
        <div className="schedules-grid">
          {schedules.map((schedule) => (
            <div key={schedule._id} className="schedule-card">
              <div className="card-header">
                <FaCalendar className="card-icon" />
                <h3>{schedule.topicName}</h3>
              </div>
              <div className="card-content">
                <div className="info-row">
                  <FaUser className="info-icon" />
                  <span>{schedule.mentor}</span>
                </div>
                <div className="info-row">
                  <FaCalendar className="info-icon" />
                  <span>{new Date(schedule.time).toLocaleString()}</span>
                </div>
                <div className="info-row">
                  <FaMapMarkerAlt className="info-icon" />
                  <span>{schedule.place}</span>
                </div>
              </div>
              <div className="card-actions">
                <a href={schedule.contestLink} target="_blank" rel="noopener noreferrer" className="action-btn contest">
                  <FaLink className="btn-icon" /> Contest
                </a>
                {schedule.resourceLink && (
                  <a href={schedule.resourceLink} target="_blank" rel="noopener noreferrer" className="action-btn resource">
                    <FaBook className="btn-icon" /> Resources
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Schedule; 