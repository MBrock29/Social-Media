import React from 'react'

export default function Comment({username, caption, myname}) {
    return (
        <div className="comment">
                <p>
                <span style={{ fontWeight: "500", marginRight: "8px"}}>{myname}</span>
                {caption}
                </p>
        </div>
    )
}
