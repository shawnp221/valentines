import React from 'react';
import { Heart } from 'lucide-react';
import { affirmations } from '../constants';
import '../styles/AcceptedView.css';

export default function AcceptedView() {
    return (
        <div className="accepted-container">
            {/* Floating hearts animation */}
            <div className="floating-hearts">
                {[...Array(20)].map((_, i) => (
                    <Heart
                        key={i}
                        className="floating-heart"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 2}s`,
                            fontSize: `${Math.random() * 30 + 20}px`
                        }}
                        fill="currentColor"
                    />
                ))}
            </div>

            <div className="accepted-content">
                <div className="accepted-card">
                    <Heart className="accepted-heart" fill="currentColor" />
                    <h1 className="accepted-title">
                        Yay! 💕
                    </h1>
                    <p className="accepted-subtitle">
                        I knew you'd say yes!
                    </p>
                    <p className="accepted-message">
                        You've made this the best Valentine's Day ever. You're absolutely incredible, and I'm so grateful to have you in my life. Here's to us! 🌹✨
                    </p>
                    <div className="accepted-badges">
                        {affirmations.slice(0, 4).map((affirmation, i) => (
                            <span key={i} className="accepted-badge">
                {affirmation}
              </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}