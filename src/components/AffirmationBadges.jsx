import React from 'react';
import '../styles/AffirmationBadges.css';

export default function AffirmationBadges({ affirmations }) {
    return (
        <div className="affirmation-container">
            {affirmations.map((affirmation, i) => (
                <span
                    key={i}
                    className="affirmation-badge"
                    style={{
                        animationDelay: `${i * 0.2}s`
                    }}
                >
          {affirmation} ✨
        </span>
            ))}
        </div>
    );
}