import React, { createContext, useContext, useState } from 'react';

const FeedbackContext = createContext();

export const useFeedback = () => {
  return useContext(FeedbackContext);
};

export const FeedbackProvider = ({ children }) => {
  const [feedbackMode, setFeedbackMode] = useState(false); // Toggle feedback mode
  const [hoveredElement, setHoveredElement] = useState(null); // Track hovered element
  const [feedback, setFeedback] = useState(''); // Store feedback input
  const [feedbackPosition, setFeedbackPosition] = useState(null); // Position for feedback text box

  // Toggle feedback mode
  const toggleFeedbackMode = () => setFeedbackMode(prev => !prev);

  // Handle hover to highlight element
  const handleHover = (event) => {
    if (feedbackMode) {
      setHoveredElement(event.target); // Set hovered element
      const rect = event.target.getBoundingClientRect();
      setFeedbackPosition({ top: rect.top + window.scrollY, left: rect.left });
    }
  };

  // Handle feedback input change
  const handleFeedbackChange = (e) => setFeedback(e.target.value);

  // Handle feedback submission
  const submitFeedback = () => {
    if (feedback && hoveredElement) {
      console.log('Feedback submitted:', feedback);
      // Reset feedback form and position
      setFeedback('');
      setHoveredElement(null);
      setFeedbackPosition(null);
    }
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedbackMode,
        toggleFeedbackMode,
        hoveredElement,
        handleHover,
        feedback,
        handleFeedbackChange,
        submitFeedback,
        feedbackPosition,
      }}
    >
      {children}
      {/* Feedback Mode Button */}
      <button
        onClick={toggleFeedbackMode}
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          padding: '10px 20px',
          backgroundColor: '#0070f3',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        {feedbackMode ? 'Disable Feedback Mode' : 'Enable Feedback Mode'}
      </button>

      {/* Render feedback textbox when an element is clicked */}
      {feedbackMode && hoveredElement && (
        <div
          style={{
            position: 'absolute',
            top: feedbackPosition?.top,
            left: feedbackPosition?.left,
            backgroundColor: '#fff',
            border: '1px solid #ccc',
            padding: '10px',
            boxShadow: '0px 2px 10px rgba(0,0,0,0.1)',
            zIndex: 1000,
          }}
        >
          <textarea
            value={feedback}
            onChange={handleFeedbackChange}
            rows="4"
            cols="30"
            placeholder="Enter your feedback..."
          ></textarea>
          <button onClick={submitFeedback}>Submit Feedback</button>
        </div>
      )}
    </FeedbackContext.Provider>
  );
};