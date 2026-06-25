import React, { useState } from 'react';

const FeedbackForm = ({ onSubmit }) => {
  const [courseName, setCourseName] = useState('');
  const [instructorName, setInstructorName] = useState('');
  const [rating, setRating] = useState('');
  const [comments, setComments] = useState('');
  const [studentId, setStudentId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      courseName,
      instructorName,
      rating: parseInt(rating),
      comments,
      studentId: studentId || null
    };
    onSubmit(formData);
    setCourseName('');
    setInstructorName('');
    setRating('');
    setComments('');
    setStudentId('');
  };

  return (
    <form onSubmit={handleSubmit} className="feedback-form">
      <div className="form-group">
        <label>Course Name</label>
        <input
          type="text"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Instructor Name</label>
        <input
          type="text"
          value={instructorName}
          onChange={(e) => setInstructorName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Rating (1-5)</label>
        <input
          type="number"
          min="1"
          max="5"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Comments</label>
        <textarea
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Student ID (optional)</label>
        <input
          type="text"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
        />
      </div>
      <button type="submit">Submit Feedback</button>
    </form>
  );
};

export default FeedbackForm;
