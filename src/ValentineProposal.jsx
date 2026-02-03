import React, { useState } from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { affirmations } from './constants';
import AcceptedView from './components/AcceptedView';
import FloatingDecorations from './components/FloatingDecorations';
import AffirmationBadges from './components/AffirmationBadges';
import FirstYesMessage from './components/FirstYesMessage';
import './styles/ValentineProposal.css';

export default function ValentineProposal() {
    const [noClickCount, setNoClickCount] = useState(0);
    const [showYesFirstMessage, setShowYesFirstMessage] = useState(false);
    const [accepted, setAccepted] = useState(false);
    const [hasClickedNo, setHasClickedNo] = useState(false);

    const handleYesClick = () => {
        if (!hasClickedNo) {
            setShowYesFirstMessage(true);
            setTimeout(() => setShowYesFirstMessage(false), 3000);
        } else {
            setAccepted(true);
        }
    };

    const handleNoClick = () => {
        setHasClickedNo(true);
        setNoClickCount(prev => prev + 1);
    };

    const getYesButtonSize = () => {
        const baseSize = 120;
        const growth = noClickCount * 40;
        return Math.min(baseSize + growth, 500);
    };

    const getNoButtonSize = () => {
        return Math.max(120 - noClickCount * 8, 40);
    };

    const getEncouragementMessage = () => {
        if (noClickCount === 1) return "Are you sure? 🥺";
        if (noClickCount === 2) return "Pretty please? 💕";
        if (noClickCount === 3) return "I know you'll say yes eventually... 😊";
        if (noClickCount >= 4) return "The 'Yes' button is taking over! 😄";
        return "";
    };

    if (accepted) {
        return <AcceptedView />;
    }

    return (
        <div className="valentine-container">
            <FloatingDecorations />
            <FirstYesMessage show={showYesFirstMessage} />

            <div className="content-wrapper">
                <AffirmationBadges affirmations={affirmations} />

                <div className="main-card">
                    <Heart className="main-heart" fill="currentColor" />

                    <h1 className="main-title">
                        Annie, Will You Be My Valentine?
                    </h1>

                    <p className="subtitle">
                        You mean the world to me 💖
                    </p>

                    <div className="button-container">
                        <button
                            onClick={handleYesClick}
                            className="yes-button"
                            style={{
                                width: `${getYesButtonSize()}px`,
                                height: `${getYesButtonSize()}px`,
                                fontSize: `${Math.min(getYesButtonSize() / 5, 48)}px`
                            }}
                        >
                            Yes! 💚
                        </button>

                        <button
                            onClick={handleNoClick}
                            className="no-button"
                            style={{
                                width: `${getNoButtonSize()}px`,
                                height: `${getNoButtonSize()}px`,
                                fontSize: `${Math.min(getNoButtonSize() / 5, 24)}px`
                            }}
                        >
                            {getNoButtonSize() > 60 ? 'No' : '😢'}
                        </button>
                    </div>

                    {noClickCount > 0 && (
                        <p className="encouragement-message">
                            {getEncouragementMessage()}
                        </p>
                    )}
                </div>

                <p className="bottom-message">
                    You deserve all the happiness in the world 🌹
                </p>
            </div>
        </div>
    );
}