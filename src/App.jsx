import React from 'react';

function App() {
    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <div className="glass" style={{ width: '240px', borderRight: '1px solid var(--border-color)', padding: '20px' }}>
                <h2 style={{ fontSize: '14px', color: '#666', marginBottom: '16px' }}>WORKSPACE</h2>
                <div style={{ padding: '8px', cursor: 'pointer', borderRadius: '4px' }}>Board 1</div>
                <div style={{ padding: '8px', cursor: 'pointer', borderRadius: '4px' }}>Board 2</div>
                <div style={{ padding: '8px', cursor: 'pointer', borderRadius: '4px' }}>Board 3</div>
            </div>
            <div style={{ flex: 1, padding: '40px' }}>
                <h1>Board 1 Content</h1>
            </div>
        </div>
    );
}

export default App;
