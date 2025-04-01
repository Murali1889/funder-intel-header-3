"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { X, Send, Paperclip, Maximize2, Minimize2, DollarSign } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

// Extend Window interface to include our widget
declare global {
  interface Window {
    liveChatWidget?: {
      toggleChat?: () => void
      isOpen?: boolean
    }
  }
}

export function LiveChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<{ text: string; isUser: boolean; time: string }[]>([
    {
      text: "Hello! How can we help you today?",
      isUser: false,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ])

  // Reference to store the widget instance
  const widgetRef = useRef<{ toggleChat: () => void; isOpen: boolean }>({
    toggleChat: () => setIsOpen((prev) => !prev),
    isOpen: isOpen,
  })

  // Make widget available globally
  useEffect(() => {
    window.liveChatWidget = widgetRef.current

    return () => {
      window.liveChatWidget = undefined
    }
  }, [])

  // Update the ref when isOpen changes
  useEffect(() => {
    widgetRef.current.isOpen = isOpen
  }, [isOpen])

  const toggleChat = () => {
    setIsOpen(!isOpen)
    localStorage.setItem("chatInteracted", "true")

    if (isMinimized) {
      setIsMinimized(false)
    }
  }

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized)
  }

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()

    if (!message.trim()) return

    // Add user message
    const newMessages = [
      ...messages,
      {
        text: message,
        isUser: true,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      },
    ]

    setMessages(newMessages)
    setMessage("")

    // Simulate response after a short delay
    setTimeout(() => {
      setMessages([
        ...newMessages,
        {
          text: "Thanks for your message. One of our team members will respond shortly.",
          isUser: false,
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ])
    }, 1000)
  }

  return (
    <>
      {/* Chat button */}
      <motion.button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 bg-accent hover:bg-accent-light text-secondary rounded-full p-4 shadow-lg z-50 transition-all duration-500 flex items-center justify-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1, ease: [0.25, 0.1, 0.25, 1.0] }}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            <span className="absolute top-0 right-0 inline-flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
          </>
        )}
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`fixed bottom-20 right-6 bg-white rounded-lg shadow-xl z-50 overflow-hidden w-80 md:w-96 ${
              isMinimized ? "h-14" : "h-[450px]"
            }`}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }}
          >
            {/* Header */}
            <div className="bg-primary text-white p-3 flex items-center justify-between">
              <div className="flex items-center">
                <div className="bg-accent rounded-full w-8 h-8 flex items-center justify-center mr-2">
                  <DollarSign className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h3 className="font-medium">FunderIntel Support</h3>
                  <div className="flex items-center text-xs">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                    <span>Online</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <button
                  onClick={toggleMinimize}
                  className="text-white p-1 hover:bg-primary-light rounded transition-colors duration-300"
                >
                  {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
                </button>
                <button
                  onClick={toggleChat}
                  className="text-white p-1 hover:bg-primary-light rounded ml-1 transition-colors duration-300"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            <AnimatePresence>
              {!isMinimized && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }}
                >
                  {/* Messages */}
                  <div className="p-3 h-[330px] overflow-y-auto bg-gray-50">
                    {messages.map((msg, index) => (
                      <motion.div
                        key={index}
                        className={`mb-3 flex ${msg.isUser ? "justify-end" : "justify-start"}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }}
                      >
                        <div
                          className={`max-w-[80%] rounded-lg p-3 ${
                            msg.isUser
                              ? "bg-primary text-white rounded-br-none"
                              : "bg-gray-200 text-gray-800 rounded-bl-none"
                          }`}
                        >
                          <p className="text-sm">{msg.text}</p>
                          <span className={`text-xs mt-1 block ${msg.isUser ? "text-white/70" : "text-gray-500"}`}>
                            {msg.time}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Input */}
                  <form onSubmit={handleSendMessage} className="p-3 border-t border-gray-200 bg-white">
                    <div className="flex items-center">
                      <button
                        type="button"
                        className="p-2 text-gray-500 hover:text-primary rounded-full transition-colors duration-300"
                      >
                        <Paperclip className="h-5 w-5" />
                      </button>
                      <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Type your message..."
                        className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-primary mx-2"
                      />
                      <motion.button
                        type="submit"
                        className="p-2 bg-accent text-secondary rounded-full hover:bg-accent-light transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Send className="h-5 w-5" />
                      </motion.button>
                    </div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

