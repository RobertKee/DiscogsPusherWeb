import React from 'react';
import './App.css';

function Edit() {
    let records = [
        {artist: "Wu Tang", album: "36 Chambers", cover: "one day"},
        {artist: "Dismemberment Plan", album: "Emergency and I", cover: "one day"},
        {artist: "Robert Ashley", album: "Perfect Lives", cover: "one day"},
];
    let list = records.map((record) =>
        <div>
<h1>{record.artist}</h1>
<h1>{record.album}</h1>
<h1>{record.cover}</h1>
<br />
        </div>
)

return (
    <div>
        {list}
    </div>
)

}

export default Edit;