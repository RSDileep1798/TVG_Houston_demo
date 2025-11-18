import React from 'react';

export default function ChatWidget() {
  return (
    <>
      {/* AI CHAT WIDGET – Floating bubble bottom-left (opens by default) */}
      <input
        type="checkbox"
        id="chat-toggle"
        className="chat-toggle"
        defaultChecked
      />

      {/* Bubble */}
      <label
        htmlFor="chat-toggle"
        className="chat-bubble"
        title="Chat with TVG Houston AI"
      >
        <span role="img" aria-label="chat">
          💬
        </span>
      </label>

      {/* Chat window */}
      <div className="chat-window">
        <div className="chat-header">
          <div className="chat-header-left">
            <div className="chat-avatar">AI</div>
            <div>
              <div className="chat-title">TVG Houston Assistant</div>
              <div className="chat-status">
                Online · Ask about products &amp; delivery
              </div>
            </div>
          </div>
          <label
            htmlFor="chat-toggle"
            className="chat-close-label"
            title="Minimize chat"
          >
            ×
          </label>
        </div>

        <div className="chat-body">
          <div className="chat-msg-row from-bot">
            <div className="chat-msg">
              Hi! I’m your AI assistant from TVG Houston. I can help you with
              bottle sizes, USD pricing and safe international delivery options.
            </div>
          </div>
          <div className="chat-msg-row from-user">
            <div className="chat-msg">
              I want to ship bottles to another country.
            </div>
          </div>
          <div className="chat-msg-row from-bot">
            <div className="chat-msg">
              Great! Tell me what you’re bottling, how many units you need and
              your destination country. We’ll suggest suitable bottles and
              packing for safe delivery.
            </div>
          </div>
        </div>

        <div className="chat-input-row">
          <input
            className="chat-input"
            type="text"
            placeholder="Type your question here..."
          />
          <button className="chat-send">➤</button>
        </div>
        <div className="chat-hint">
          Demo only · Connect a live chat or AI backend to make this fully
          interactive.
        </div>
      </div>
    </>
  );
}