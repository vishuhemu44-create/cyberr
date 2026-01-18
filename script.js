/* ---------- PAGE NAVIGATION ---------- */
function showPage(page) {
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    document.getElementById("page" + page).classList.add("active");
}

/* ---------- REGISTER ---------- */
function register() {
    const name = regName.value;
    const pass = regPass.value;

    if (!name || !pass) {
        regMsg.textContent = "❌ Fill all fields";
        return;
    }

    localStorage.setItem("username", name);
    localStorage.setItem("password", pass);

    regMsg.textContent = "✅ Account Created Successfully";
}

/* ---------- LOGIN ---------- */
function login() {
    const savedName = localStorage.getItem("username");
    const savedPass = localStorage.getItem("password");

    if (loginName.value === savedName && loginPass.value === savedPass) {
        userDisplay.textContent = savedName;
        showPage(3);
    } else {
        loginMsg.textContent = "❌ Invalid Credentials";
    }
}

/* ---------- FIREWALL ---------- */
let firewallOn = true;
function toggleFirewall() {
    firewallOn = !firewallOn;
    firewall.textContent = firewallOn ? "ACTIVE" : "DISABLED";
    firewall.className = firewallOn ? "status safe" : "status danger";
}

/* ---------- THREAT DETECTION ---------- */
function detectThreat() {
    if (Math.random() > 0.6) {
        threat.textContent = "⚠ Malware Detected";
        threat.className = "status danger";
    } else {
        threat.textContent = "System Secure";
        threat.className = "status safe";
    }
}

/* ---------- SYSTEM SCAN ---------- */
function runScan() {
    scan.textContent = "Scanning...";
    scan.className = "status warning";

    setTimeout(() => {
        scan.textContent = "Scan Completed – Secure";
        scan.className = "status safe";
    }, 3000);
}