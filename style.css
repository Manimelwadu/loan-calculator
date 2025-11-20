/* =========================================
   THEME VARIABLES
   ========================================= */
:root {
    --bg-gradient: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
    --glass-bg: rgba(255, 255, 255, 0.05);
    --glass-border: rgba(255, 255, 255, 0.1);
    --neon-blue: #00f2ff;
    --neon-purple: #bc13fe;
    --text-main: #ffffff;
    --text-muted: #a0a0a0;
    --input-bg: rgba(0, 0, 0, 0.3);
    --shadow-strong: 0 8px 32px 0 rgba(0, 0, 0, 0.5);
}

/* =========================================
   GLOBAL STYLES
   ========================================= */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Inter', sans-serif;
    background: var(--bg-gradient);
    background-attachment: fixed;
    color: var(--text-main);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center; /* Centers the card vertically */
    padding: 2rem;
}

/* =========================================
   MAIN CONTAINER (Glass Card)
   ========================================= */
.calculator-container {
    display: grid;
    grid-template-columns: 1fr 1.3fr;
    gap: 0;
    width: 100%;
    max-width: 1100px;
    background: var(--glass-bg);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid var(--glass-border);
    border-radius: 20px;
    box-shadow: var(--shadow-strong);
    overflow: hidden;
    animation: slideUp 0.8s ease-out;
}

@keyframes slideUp {
    from { transform: translateY(50px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
}

/* =========================================
   LEFT PANEL (Inputs)
   ========================================= */
.input-panel {
    padding: 2.5rem;
    background: rgba(0, 0, 0, 0.2);
    border-right: 1px solid var(--glass-border);
}

.input-panel h2 {
    font-weight: 700;
    font-size: 1.8rem;
    margin-bottom: 2rem;
    /* Gradient Text */
    background: linear-gradient(to right, var(--neon-blue), var(--neon-purple));
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    letter-spacing: 1px;
}

.form-group {
    margin-bottom: 1.2rem;
}

.form-group label {
    font-size: 0.9rem;
    color: var(--text-muted);
    margin-bottom: 0.5rem;
    display: block;
}

.form-group .small-label {
    font-size: 0.75rem;
    color: var(--neon-blue);
    opacity: 0.8;
    margin-top: 4px;
}

.form-group input {
    width: 100%;
    background: var(--input-bg);
    border: 1px solid var(--glass-border);
    padding: 0.8rem;
    border-radius: 8px;
    color: #fff;
    font-size: 1rem;
    font-family: 'Inter', sans-serif;
    transition: all 0.3s ease;
}

.form-group input:focus {
    outline: none;
    border-color: var(--neon-blue);
    box-shadow: 0 0 15px rgba(0, 242, 255, 0.2);
    background: rgba(0, 0, 0, 0.5);
}

.form-divider {
    border: 0;
    height: 1px;
    background: linear-gradient(to right, transparent, var(--glass-border), transparent);
    margin: 1.5rem 0;
}

#calculate-btn {
    width: 100%;
    padding: 1rem;
    margin-top: 1rem;
    border: none;
    border-radius: 8px;
    background: linear-gradient(45deg, var(--neon-blue), #007bff);
    color: #000;
    font-weight: 700;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;
}

#calculate-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 20px rgba(0, 242, 255, 0.4);
}

/* =========================================
   RIGHT PANEL (Outputs)
   ========================================= */
.output-panel {
    padding: 2.5rem;
    background: rgba(255, 255, 255, 0.02);
}

.output-panel h3 {
    font-size: 1.4rem;
    margin-bottom: 1.5rem;
    color: var(--text-main);
}

.result-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(255, 255, 255, 0.05);
    padding: 1rem;
    border-radius: 10px;
    margin-bottom: 0.8rem;
    border-left: 4px solid var(--glass-border);
    transition: transform 0.3s ease;
}

.result-box:hover {
    transform: translateX(5px);
    background: rgba(255, 255, 255, 0.08);
}

#monthly-payment-result {
    color: var(--neon-blue);
    font-size: 1.5rem;
    font-weight: 700;
    text-shadow: 0 0 10px rgba(0, 242, 255, 0.3);
}

/* Special styling for 'Saved' results */
.result-box-new {
    background: rgba(188, 19, 254, 0.08);
    border-left: 4px solid var(--neon-purple);
}
.result-box-new span {
    color: var(--neon-purple);
    font-weight: 700;
    text-shadow: 0 0 8px rgba(188, 19, 254, 0.3);
}

.output-panel hr {
    border: 0;
    height: 1px;
    background: var(--glass-border);
    margin: 1.5rem 0;
}

/* Secondary Button (Print) */
.secondary-btn {
    width: 100%;
    padding: 0.8rem;
    margin-top: 1rem;
    border: 1px solid var(--glass-border);
    border-radius: 8px;
    background: transparent;
    color: var(--text-muted);
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}
.secondary-btn:hover {
    background: rgba(255,255,255,0.1);
    color: white;
    border-color: white;
}

/* =========================================
   TABLE
   ========================================= */
.table-container {
    max-height: 300px;
    overflow-y: auto;
    border-radius: 8px;
    background: rgba(0,0,0,0.2);
}
.table-container::-webkit-scrollbar {
    width: 6px;
}
.table-container::-webkit-scrollbar-thumb {
    background: var(--glass-border);
    border-radius: 3px;
}

table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.9rem;
}
th {
    text-align: left;
    padding: 1rem;
    background: rgba(0,0,0,0.4);
    color: var(--text-muted);
    position: sticky;
    top: 0;
    backdrop-filter: blur(5px);
}
td {
    padding: 0.8rem 1rem;
    border-bottom: 1px solid rgba(255,255,255,0.05);
}
tr:hover td {
    background: rgba(0, 242, 255, 0.05);
}

/* =========================================
   MOBILE RESPONSIVE
   ========================================= */
@media (max-width: 900px) {
    .calculator-container {
        grid-template-columns: 1fr;
        margin-top: 2rem;
        margin-bottom: 2rem;
    }
    .input-panel, .output-panel {
        padding: 1.5rem;
    }
}

/* =========================================
   PRINT MODE (Clean PDF)
   ========================================= */
@media print {
    body {
        background: white;
        color: black;
        display: block;
        padding: 0;
    }
    .calculator-container {
        box-shadow: none;
        border: none;
        width: 100%;
        max-width: 100%;
        background: white;
        display: block;
        backdrop-filter: none;
    }
    .input-panel, #calculate-btn, .secondary-btn, .form-divider {
        display: none !important;
    }
    .output-panel {
        padding: 0;
        background: white;
    }
    .result-box, .result-box-new {
        background: white;
        border: none;
        border-bottom: 1px solid #ccc;
        color: black;
        padding: 0.5rem 0;
        margin: 0;
    }
    .result-box p, .result-box span, #monthly-payment-result, .result-box-new span {
        color: black !important;
        text-shadow: none !important;
    }
    .output-panel h3 {
        color: black;
        border-bottom: 2px solid black;
    }
    .table-container {
        max-height: none;
        overflow: visible;
        background: white;
    }
    th {
        background: #eee;
        color: black;
        border-bottom: 2px solid black;
    }
    td {
        border-bottom: 1px solid #ccc;
        color: black;
    }
}
