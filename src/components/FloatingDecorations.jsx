import React from 'react';
import { Heart, Sparkles } from 'lucide-react';
import '../styles/FloatingDecorations.css';

export default function FloatingDecorations() {
    return (
        <div className="decorations">
            <Sparkles className="sparkle sparkle-1" />
            <Sparkles className="sparkle sparkle-2" />
            <Sparkles className="sparkle sparkle-3" />
            <Sparkles className="sparkle sparkle-4" />
            <Heart className="decoration-heart decoration-heart-1" fill="currentColor" />
            <Heart className="decoration-heart decoration-heart-2" fill="currentColor" />
        </div>
    );
}