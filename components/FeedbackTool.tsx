'use client';

import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

const styles = {
  toggleButton: {
    position: 'fixed',
    right: 0,
    top: '50%',
    transform: 'translateY(-50%)',
    background: '#1e40af',
    color: '#ffffff',
    border: 'none',
    borderRadius: '6px 0 0 6px',
    padding: '12px 16px',
    cursor: 'pointer',
    zIndex: 10000,
    fontSize: '14px',
    fontWeight: 600,
    transition: 'background 0.3s ease, box-shadow 0.2s ease',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
  },
  activeButton: {
    background: '#b91c1c',
    boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
  },
  chatbotContainer: {
    position: 'fixed',
    top: 0,
    right: 0,
    width: '360px',
    height: '450px',
    background: '#ffffff',
    boxShadow: '0 6px 16px rgba(0,0,0,0.12)',
    display: 'flex',
    flexDirection: 'column',
    zIndex: 10001,
    borderRadius: '0 0 0 8px',
    overflow: 'hidden',
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  chatHeader: {
    background: '#1e40af',
    color: '#ffffff',
    padding: '14px 18px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
  },
  chatTitle: {
    margin: 0,
    fontSize: '16px',
    fontWeight: 600,
    letterSpacing: '0.2px',
  },
  closeButton: {
    background: 'none',
    border: 'none',
    color: '#ffffff',
    fontSize: '20px',
    cursor: 'pointer',
    padding: 0,
    opacity: 0.8,
    transition: 'opacity 0.2s ease',
  },
  chatMessages: {
    flex: 1,
    padding: '14px',
    overflowY: 'auto',
    background: '#f9fafb',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  messageBubble: {
    padding: '10px 14px',
    borderRadius: '8px',
    maxWidth: '80%',
    fontSize: '13px',
    lineHeight: 1.5,
    boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
    color: 'black'
  },
  botMessage: {
    background: '#e5e7eb',
    alignSelf: 'flex-start',
  },
  userMessage: {
    background: '#1e40af',
    color: '#ffffff',
    alignSelf: 'flex-end',
  },
  dragDropArea: {
    border: '1px dashed #6b7280',
    borderRadius: '6px',
    padding: '18px',
    textAlign: 'center',
    fontSize: '12px',
    color: '#6b7280',
    margin: '14px',
    background: '#ffffff',
    cursor: 'pointer',
    transition: 'border-color 0.3s ease, background 0.3s ease',
  },
  dragDropActive: {
    borderColor: '#1e40af',
    background: '#eff6ff',
  },
  imagePreview: {
    maxWidth: '100%',
    maxHeight: '130px',
    border: '1px solid #e5e7eb',
    borderRadius: '6px',
    margin: '10px 14px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
  },
  chatInputContainer: {
    padding: '12px',
    display: 'flex',
    gap: '10px',
    borderTop: '1px solid #e5e7eb',
    background: '#ffffff',
  },
  chatInput: {
    flex: 1,
    padding: '10px 14px',
    border: '1px solid #d1d5db',
    borderRadius: '6px',
    fontSize: '13px',
    outline: 'none',
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
    ':focus': {
      borderColor: '#1e40af',
      boxShadow: '0 0 0 2px rgba(30, 64, 175, 0.2)',
    },
  },
  sendButton: {
    background: '#1e40af',
    color: '#ffffff',
    border: 'none',
    borderRadius: '6px',
    width: '36px',
    height: '36px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'background 0.3s ease, box-shadow 0.2s ease',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
};

const FeedbackTool = () => {
  const [isActive, setIsActive] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [screenshot, setScreenshot] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const dragAreaRef = useRef(null);

  // Load from LocalStorage
  useEffect(() => {
    const savedMessages = localStorage.getItem('feedbackMessages');
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    } else {
      setMessages([{ text: "How may we assist with your feedback today?", isBot: true }]);
    }
  }, []);

  // Save to LocalStorage and scroll
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem('feedbackMessages', JSON.stringify(messages));
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  // Focus input
  useEffect(() => {
    if (isActive && inputRef.current) inputRef.current.focus();
  }, [isActive]);

  const toggleActive = () => setIsActive(!isActive);

  // Drag and Drop Handlers
  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.target === dragAreaRef.current) setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files && files.length > 0) handleFile(files[0]);
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const handleFile = async (file) => {
    try {
      const base64 = await convertToBase64(file);
      setScreenshot(base64);
      setImagePreview(base64);
    } catch (error) {
      console.error('Error converting file to Base64:', error);
      setMessages(prev => [
        ...prev,
        { text: "Failed to process image. Please try again.", isBot: true },
      ]);
    }
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  const sendMessage = async () => {
    if (!inputText.trim() && !screenshot) {
      console.log('No input or screenshot provided');
      return;
    }

    const newMessage = { text: inputText, isBot: false, screenshot: screenshot || undefined };
    console.log('New message:', newMessage);
    if (inputText.trim() || screenshot) {
      setMessages(prev => [...prev, newMessage]);
    }

    const feedbackData = {
      feedback: inputText,
      screenshot: screenshot || null,
      url: window.location.href,
      timestamp: new Date().toISOString(),
    };

    try {
      console.log('Sending feedback data:', feedbackData);
      const response = await axios.post(
        '/api/feedback', // Use the proxy endpoint
        feedbackData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          timeout: 10000,
        }
      );
      console.log('Axios success response:', response.data);

      setTimeout(() => {
        setMessages(prev => [
          ...prev,
          { text: "Thank you for your feedback. Anything else we can assist with?", isBot: true },
        ]);
      }, 1000);
    } catch (error) {
      console.error('Axios error:', {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status,
        code: error.code,
      });
      let errorMessage = "Failed to submit feedback. Please try again later.";
      if (error.code === 'ECONNABORTED') {
        errorMessage = "Request timed out. Please check your network and try again.";
      } else if (error.message.includes('Network Error')) {
        errorMessage = "Network error. Please ensure you're online and try again.";
      }
      setMessages(prev => [
        ...prev,
        { text: errorMessage, isBot: true },
      ]);
    } finally {
      setInputText('');
      setScreenshot(null);
      setImagePreview(null);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      <button
        onClick={toggleActive}
        style={{ ...styles.toggleButton, ...(isActive ? styles.activeButton : {}) }}
        onMouseOver={(e) => (e.currentTarget.style.background = '#1e3a8a')}
        onMouseOut={(e) => (e.currentTarget.style.background = isActive ? '#b91c1c' : '#1e40af')}
      >
        Feedback
      </button>

      {isActive && (
        <div style={styles.chatbotContainer}>
          <div style={styles.chatHeader}>
            <h3 style={styles.chatTitle}>Feedback Portal</h3>
            <button
              style={styles.closeButton}
              onClick={toggleActive}
              onMouseOver={(e) => (e.currentTarget.style.opacity = '1')}
              onMouseOut={(e) => (e.currentTarget.style.opacity = '0.8')}
            >
              ×
            </button>
          </div>

          <div style={styles.chatMessages}>
            {messages.map((msg, index) => (
              <div key={index}>
                <div
                  style={{
                    ...styles.messageBubble,
                    ...(msg.isBot ? styles.botMessage : styles.userMessage),
                  }}
                >
                  {msg.text}
                </div>
                {msg.screenshot && (
                  <img src={msg.screenshot} alt="Screenshot" style={styles.imagePreview} />
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div
            ref={dragAreaRef}
            style={{ ...styles.dragDropArea, ...(isDragging ? styles.dragDropActive : {}) }}
            onDragEnter={handleDragEnter}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => document.getElementById('fileInput')?.click()}
          >
            Drag & drop or click to upload an image
            <input
              id="fileInput"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              style={{ display: 'none' }}
            />
          </div>

          {imagePreview && <img src={imagePreview} alt="Preview" style={styles.imagePreview} />}

          <div style={styles.chatInputContainer}>
            <input
              ref={inputRef}
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter your feedback..."
              style={styles.chatInput}
            />
            <button
              onClick={sendMessage}
              style={styles.sendButton}
              onMouseOver={(e) => (e.currentTarget.style.background = '#1e3a8a')}
              onMouseOut={(e) => (e.currentTarget.style.background = '#1e40af')}
            >
              →
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FeedbackTool;