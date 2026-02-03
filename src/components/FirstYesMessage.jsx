import React from 'react';
import '../styles/FirstYesMessage.css';

export default function FirstYesMessage({ show }) {
    if (!show) return null;

    return (
        <div className="first-yes-overlay">
            <div className="first-yes-card">
                <p className="first-yes-text">
                    I appreciate it, but aren't you gonna try "No"? lol 😏
                </p>
            </div>
        </div>
    );
}