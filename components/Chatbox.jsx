// components/ChatBox.jsx
'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, X, Image as ImageIcon } from 'lucide-react';

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [images, setImages] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  // Handle drag and drop
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };

  const handleFileInput = (e) => {
    const files = Array.from(e.target.files);
    handleFiles(files);
  };

  const handleFiles = (files) => {
    const imageFiles = files.filter(file => file.type.startsWith('image/'));
    const newImages = imageFiles.map(file => ({
      file,
      preview: URL.createObjectURL(file)
    }));
    setImages(prev => [...prev, ...newImages]);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim() && images.length === 0) return;

    const formData = new FormData();
    formData.append('message', message);
    images.forEach((img, index) => {
      formData.append(`image${index}`, img.file);
    });

    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        body: formData,
      });
      
      if (response.ok) {
        setMessage('');
        setImages([]);
        setIsOpen(false);
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };

  // Remove image
  const removeImage = (index) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <>
      {/* Floating button to toggle chatbox */}
      <motion.button
        className="fixed bottom-6 right-6 bg-indigo-600 text-white p-3 rounded-full shadow-lg z-50 chatbox"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Send size={24} />
      </motion.button>

      {/* Chatbox */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-20 right-6 w-96 bg-white rounded-xl shadow-2xl z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-indigo-600 text-white p-3 flex justify-between items-center">
              <h3 className="font-semibold">Feedback</h3>
              <button onClick={() => setIsOpen(false)}>
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <form onSubmit={handleSubmit} className="flex flex-col h-[400px]">
              {/* Drop zone */}
              <div
                className={`flex-1 p-4 min-h-[100px] ${
                  isDragging ? 'bg-indigo-50 border-2 border-dashed border-indigo-600' : 'bg-gray-50'
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                {images.length > 0 ? (
                  <div className="grid grid-cols-2 gap-2">
                    {images.map((img, index) => (
                      <div key={index} className="relative">
                        <img
                          src={img.preview}
                          alt="Preview"
                          className="w-full h-24 object-cover rounded"
                        />
                        <button
                          type="button"
                          onClick={() => removeImage(index)}
                          className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
                        >
                          <X size={14} />
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center text-gray-500 py-4">
                    <ImageIcon className="mx-auto mb-2" size={24} />
                    <p>Drag & drop screenshots here or click to upload</p>
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileInput}
                      accept="image/*"
                      multiple
                      className="hidden"
                    />
                    <button
                      type="button"
                      onClick={() => fileInputRef.current.click()}
                      className="mt-2 text-indigo-600 hover:underline"
                    >
                      Browse files
                    </button>
                  </div>
                )}
              </div>

              {/* Text input */}
              <div className="p-4 border-t">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your feedback..."
                  className="w-full h-20 p-2 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
                <button
                  type="submit"
                  className="mt-2 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Send Feedback
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBox;