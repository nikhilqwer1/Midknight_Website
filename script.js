// Midknight Launch Script: Dynamic Navbar, Smooth Scroll, and FULL ORACLE CHAT LOGIC

// --- Global DOM Elements ---
const navbar = document.getElementById("navbar");
const chatIcon = document.getElementById("oracle-chat-icon");
const chatWindow = document.getElementById("oracle-chat-window");
const chatCloseBtn = document.getElementById("chat-close-btn");
const chatHistory = document.getElementById("chat-history");
const chatInput = document.getElementById("chat-input");
const chatSendBtn = document.getElementById("chat-send");


// --- 1. Dynamic Navbar Functionality (Sticky Header) ---
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    const logoText = document.querySelector(".logo-text");
    
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        navbar.classList.add("scrolled");
        logoText.style.color = 'var(--color-secondary)';
    } else {
        navbar.classList.remove("scrolled");
        logoText.style.color = 'var(--color-text)';
    }
}

// --- 2. Smooth Scrolling for Navigation Links ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// --- 3. ORACLE CHATBOT LOGIC (The Brains) ---

function getOracleAnswer(query) {
    const q = query.toLowerCase().trim();

    if (q.includes("ceo") || q.includes("hrithik")) {
        return "The Chief Executive Officer (CEO) is Hrithik Roshan, driving global operations and executive strategy.";
    } else if (q.includes("mui") || q.includes("integrator")) {
        return "The Midknight Universal Integrator (MUI) is our core asset—a Quantum Processing, AI, and AR OS ecosystem dedicated to URO (Universal Resource Optimization).";
    } else if (q.includes("blazer") || q.includes("apparel")) {
        return "The signature product is the Adapt-Weave Blazer, a high-performance smart-polymer textile for universal comfort and function.";
    } else if (q.includes("founder") || q.includes("nikhil")) {
        return "The Founder and original visionary of Midknight is Nikhil Kumar.";
    } else if (q.includes("harvest") || q.includes("farm")) {
        return "Midknight Harvest's flagship system is Aura-Harvest, achieving 100% precision agriculture via the MUI-Light network.";
    } else if (q.includes("headquarters") || q.includes("location")) {
        return "The Global Headquarters is located at The Midknight Cave in Bengaluru, India.";
    } else if (q.includes("ethics") || q.includes("code")) {
        return "Our Code of Ethics mandates Universal Stewardship, Ethical Sovereignty of AI, Global Dignity in Labor, and Data Sanctity.";
    } else if (q.includes("strategy") || q.includes("strategist")) {
        return "The Chief Strategist ([Your Name]) is the executive authority responsible for setting the company's universal scope and future direction.";
    }
    
    return "Query complexity exceeds current public access parameters. Please reformulate your question or contact a human executive for high-level strategic inquiries.";
}

function appendMessage(sender, message) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('chat-message');
    
    if (sender === 'user') {
        messageDiv.classList.add('user-message');
        messageDiv.textContent = message;
    } else {
        messageDiv.classList.add('oracle-message');
        messageDiv.textContent = "Oracle: " + message;
    }
    
    chatHistory.appendChild(messageDiv);
    chatHistory.scrollTop = chatHistory.scrollHeight; // Auto-scroll to bottom
}

function processUserQuery() {
    const query = chatInput.value.trim();
    if (query === "") return;

    appendMessage('user', query);
    chatInput.value = ""; // Clear input immediately
    
    // Simulate AI thinking
    setTimeout(() => {
        const answer = getOracleAnswer(query);
        appendMessage('oracle', answer);
    }, 1200); // 1.2 seconds delay
}

// --- 4. Event Listeners (Chat Window Toggles) ---

document.addEventListener('DOMContentLoaded', (event) => {
    // Show/Hide Chat Window
    chatIcon.addEventListener('click', () => {
        chatWindow.style.display = 'flex';
        chatIcon.style.display = 'none';
        chatInput.focus();
    });

    chatCloseBtn.addEventListener('click', () => {
        chatWindow.style.display = 'none';
        chatIcon.style.display = 'flex';
    });

    // Send button click
    chatSendBtn.addEventListener('click', processUserQuery);
    
    // Enter key press
    chatInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            processUserQuery();
        }
    });

    // --- 5. Simulated Complex Button Functionality (Retained) ---
    const viewPositionsButton = document.querySelector('.large-btn');

    if (viewPositionsButton) {
        viewPositionsButton.addEventListener('click', function(e) {
            e.preventDefault(); 
            alert("Redirecting to the Midknight Careers Portal...\n\n(Simulation: Seamless application processing via the Oracle AI's recruitment module is commencing.)");
        });
    }
});