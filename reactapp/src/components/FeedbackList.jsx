import React from 'react';

const FeedbackList = ({ feedbacks, onDelete }) => {
  return (
    <div className="feedback-list">
      {feedbacks.length === 0 ? (
        <p>No feedback submitted yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Course</th>
              <th>Instructor</th>
              <th>Rating</th>
              <th>Comments</th>
              <th>Student ID</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {feedbacks.map((feedback) => (
              <tr key={feedback.id}>
                <td>{feedback.courseName}</td>
                <td>{feedback.instructorName}</td>
                <td>{feedback.rating}</td>
                <td>{feedback.comments}</td>
                <td>{feedback.studentId || 'Anonymous'}</td>
                <td>
                  <button 
                    className="delete-btn" 
                    onClick={() => onDelete(feedback.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default FeedbackList;
