import React, { useState, useEffect } from 'react';
import './App.css';
import { getAllFeedback, saveFeedback, deleteFeedback } from './api';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';

function App() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    try {
      const response = await getAllFeedback();
      setFeedbacks(response.data);
    } catch (error) {
      console.error('Error fetching feedback:', error);
    }
  };

  const addFeedback = async (formData) => {
    try {
      await saveFeedback(formData);
      fetchFeedback();
    } catch (error) {
      console.error('Error saving feedback:', error);
    }
  };

  const removeFeedback = async (id) => {
    try {
      await deleteFeedback(id);
      fetchFeedback();
    } catch (error) {
      console.error('Error deleting feedback:', error);
    }
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <h2>College Feedback System</h2>
        <FeedbackForm onSubmit={addFeedback} />
        <FeedbackList feedbacks={feedbacks} onDelete={removeFeedback} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
