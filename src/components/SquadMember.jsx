import { useState } from "react"
import "./squadMember.css"

export default function SquadMember({ member }) {
    
    const [isFlipped, setIsFlipped] = useState(false);

    function handleFlip() {
        setIsFlipped(!isFlipped)
    }

    return (
        <div className={`flip-container ${isFlipped ? 'hover' : ''}`} onClick={handleFlip}>
            <div className="flipper">
                <div className="front">
                    <div className="squadMember" style={{background:member.color}}>
                        <div className="squadMember__card">
                            <div className="squadMember__image">
                                <img src={member.img} alt={member.name}/>
                            </div>
                            <div className="squadMember__info">
                                <div className="squadMember__realName">
                                    <p>{member.name}</p>
                                </div>
                                <div className="squadMember__cohort">
                                    <span>Cohort: 10.6</span>
                                </div>
                            </div>
                            <div className="squadMember__specialties">
                                <span>Fanatic of:</span>
                                <span>{member.fan[0]}|</span>
                                <span>{member.fan[1]}|</span>
                                <span>{member.fan[2]}</span>
                            </div>
                            <div className="squadMember__links">
                                <a href={member.github}><span>Github</span></a>
                                <a href={member.linkedin}><span>LinkedIn</span></a>
                                <a href={member.codeTrack}><span>CodeTrack</span></a>
                                <a href={member.notion}><span>Notion</span></a>
                                <a href={member.rick}><span>Facebook</span></a>
                                <a href={member.rick}><span>Twitter/X</span></a>
                                <a href={member.rick}><span>Instagram</span></a>
                                <a href={member.rick}><span>TikTok</span></a>
                            </div>
                        </div> 
                    </div>
                </div>
                <div className="back">
                    <div className="squadMember" style={{background:member.color}}>
                        <div className="squadMember__card-bio">
                            <p>{member.bio}</p>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )

}