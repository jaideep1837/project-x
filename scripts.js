// Mobile menu toggle
const toggle = document.querySelector('.mobile-toggle');
const nav = document.querySelector('mobileMenu');
toggle.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));

// Example Challenge Data
const challengeData = {
  step1: {
    5000: { 
      profit: "10%", 
      maxLoss: "6%", 
      dailyLoss: "4%", 
      share: "80%", 
      maxDrawdownType: "Static",
      dailyDrawdownType: "Higher of previous day equity/balance",
      time: "Unlimited", 
      leverage: "FX 1:30",
      evalMinDays: "3",
      fundedMinDays: "3",
      payout: "14 Days",
      copyTrading: "Yes",
      prohibited: "Yes"
    },
    10000: { 
      profit: "10%", 
      maxLoss: "6%", 
      dailyLoss: "4%", 
      share: "80%", 
      maxDrawdownType: "Static",
      dailyDrawdownType: "Higher of previous day equity/balance",
      time: "Unlimited", 
      leverage: "FX 1:30",
      evalMinDays: "3",
      fundedMinDays: "3",
      payout: "14 Days",
      copyTrading: "Yes",
      prohibited: "Yes"
    },
    25000: { 
      profit: "10%", 
      maxLoss: "6%", 
      dailyLoss: "4%", 
      share: "80%", 
      maxDrawdownType: "Static",
      dailyDrawdownType: "Higher of previous day equity/balance",
      time: "Unlimited", 
      leverage: "FX 1:30",
      evalMinDays: "3",
      fundedMinDays: "3",
      payout: "14 Days",
      copyTrading: "Yes",
      prohibited: "Yes"
    },
    50000: { 
      profit: "10%", 
      maxLoss: "6%", 
      dailyLoss: "4%", 
      share: "80%", 
      maxDrawdownType: "Static",
      dailyDrawdownType: "Higher of previous day equity/balance",
      time: "Unlimited", 
      leverage: "FX 1:30",
      evalMinDays: "3",
      fundedMinDays: "3",
      payout: "14 Days",
      copyTrading: "Yes",
      prohibited: "Yes"
    },
    100000: { 
      profit: "10%", 
      maxLoss: "6%", 
      dailyLoss: "4%", 
      share: "80%", 
      maxDrawdownType: "Static",
      dailyDrawdownType: "Higher of previous day equity/balance",
      time: "Unlimited", 
      leverage: "FX 1:30",
      evalMinDays: "3",
      fundedMinDays: "3",
      payout: "14 Days",
      copyTrading: "Yes",
      prohibited: "Yes"
    },
    200000: { 
      profit: "10%", 
      maxLoss: "6%", 
      dailyLoss: "4%", 
      share: "80%", 
      maxDrawdownType: "Static",
      dailyDrawdownType: "Higher of previous day equity/balance",
      time: "Unlimited", 
      leverage: "FX 1:30",
      evalMinDays: "3",
      fundedMinDays: "3",
      payout: "14 Days",
      copyTrading: "Yes",
      prohibited: "Yes"
    }
  },
  step2: {
    5000: { 
      profit: "Phase 1: 10% & Phase 2: 5%", 
      maxLoss: "10%", 
      dailyLoss: "5%", 
      share: "80%", 
      maxDrawdownType: "Static",
      dailyDrawdownType: "Higher of previous day equity/balance",
      time: "Unlimited", 
      leverage: "FX 1:50",
      evalMinDays: "3",
      fundedMinDays: "3",
      payout: "14 Days",
      copyTrading: "Yes",
      prohibited: "Yes"
    },
    10000: { 
      profit: "Phase 1: 10% & Phase 2: 5%", 
      maxLoss: "10%", 
      dailyLoss: "5%", 
      share: "80%", 
      maxDrawdownType: "Static",
      dailyDrawdownType: "Higher of previous day equity/balance",
      time: "Unlimited", 
      leverage: "FX 1:50",
      evalMinDays: "3",
      fundedMinDays: "3",
      payout: "14 Days",
      copyTrading: "Yes",
      prohibited: "Yes"
    },
    25000: { 
      profit: "Phase 1: 10% & Phase 2: 5%", 
      maxLoss: "10%", 
      dailyLoss: "5%", 
      share: "80%", 
      maxDrawdownType: "Static",
      dailyDrawdownType: "Higher of previous day equity/balance",
      time: "Unlimited", 
      leverage: "FX 1:50",
      evalMinDays: "3",
      fundedMinDays: "3",
      payout: "14 Days",
      copyTrading: "Yes",
      prohibited: "Yes"
    },
    50000: { 
      profit: "Phase 1: 10% & Phase 2: 5%", 
      maxLoss: "10%", 
      dailyLoss: "5%", 
      share: "80%", 
      maxDrawdownType: "Static",
      dailyDrawdownType: "Higher of previous day equity/balance",
      time: "Unlimited", 
      leverage: "FX 1:50",
      evalMinDays: "3",
      fundedMinDays: "3",
      payout: "14 Days",
      copyTrading: "Yes",
      prohibited: "Yes"
    },
    100000: { 
      profit: "Phase 1: 10% & Phase 2: 5%", 
      maxLoss: "10%", 
      dailyLoss: "5%", 
      share: "80%", 
      maxDrawdownType: "Static",
      dailyDrawdownType: "Higher of previous day equity/balance",
      time: "Unlimited", 
      leverage: "FX 1:50",
      evalMinDays: "3",
      fundedMinDays: "3",
      payout: "14 Days",
      copyTrading: "Yes",
      prohibited: "Yes"
    },
    
  },
  rapid: {
    10000: { 
      profit: "5%", 
      maxLoss: "4%", 
      dailyLoss: "3%", 
      share: "80%", 
      maxDrawdownType: "Trailing",
      dailyDrawdownType: "Higher",
      time: "7 days", 
      leverage: "FX 1:30",
      evalMinDays: "0",
      fundedMinDays: "3",
      payout: "14 Days",
      copyTrading: "Yes",
      prohibited: "Yes"
    },
    25000: { 
      profit: "5%", 
      maxLoss: "4%", 
      dailyLoss: "3%", 
      share: "80%", 
      maxDrawdownType: "Trailing",
      dailyDrawdownType: "Higher ",
      time: "7 days", 
      leverage: "FX 1:30",
      evalMinDays: "0",
      fundedMinDays: "3",
      payout: "14 Days",
      copyTrading: "Yes",
      prohibited: "Yes"
    },
    50000: { 
      profit: "5%", 
      maxLoss: "4%", 
      dailyLoss: "3%", 
      share: "80%", 
      maxDrawdownType: "Trailing",
      dailyDrawdownType: "Higher",
      time: "7 days", 
      leverage: "FX 1:30",
      evalMinDays: "0",
      fundedMinDays: "3",
      payout: "14 Days",
      copyTrading: "Yes",
      prohibited: "Yes"
    },
    100000: { 
      profit: "5%", 
      maxLoss: "4%", 
      dailyLoss: "3%", 
      share: "80%", 
      maxDrawdownType: "Trailing",
      time: "7 days", 
      leverage: "FX 1:30",
      evalMinDays: "0",
      fundedMinDays: "3",
      payout: "14 Days",
      copyTrading: "Yes",
      prohibited: "Yes"
    },
  }
};

let currentStep = "step1";
let currentSize = "5000";

function renderChallenge() {
  const data = challengeData[currentStep][currentSize];
  if (!data) {
    document.getElementById("challenge-details").innerHTML = `<p class="text-gray-400">No data available.</p>`;
    return;
  }
  if(currentStep=="rapid"){
    document.getElementById("challenge-details").innerHTML = `
    <table class="w-full text-gray-300">
      <tr><td class="py-2">Profit Target</td><td>${data.profit}</td></tr>
      <tr><td class="py-2">Max Total Loss</td><td>${data.maxLoss}</td></tr>
      <tr><td class="py-2">Daily Loss</td><td>${data.dailyLoss}</td></tr>
      <tr><td class="py-2">Profit Share</td><td>${data.share}</td></tr>
      <tr><td class="py-2">Drawdown Type</td><td>${data.maxDrawdownType}</td></tr>
      <tr><td class="py-2">Time Limit</td><td>${data.time}</td></tr>
      <tr><td class="py-2">Leverage</td><td>${data.leverage}</td></tr>
      <tr><td class="py-2">Evaluation Min Trading Days</td><td>${data.evalMinDays}</td></tr>
      <tr><td class="py-2">Funded Min Trading Days</td><td>${data.fundedMinDays}</td></tr>
      <tr><td class="py-2">Payout Frequency</td><td>${data.payout}</td></tr>
      <tr><td class="py-2">Account Copy Trading</td><td>${data.copyTrading}</td></tr>
      <tr><td class="py-2">Prohibited Strategies</td><td>${data.prohibited}</td></tr>
    </table>
    `;
    return;
  }
  document.getElementById("challenge-details").innerHTML = `
    <table class="w-full text-gray-300">
      <tr><td class="py-2">Profit Target</td><td>${data.profit}</td></tr>
      <tr><td class="py-2">Max Total Loss</td><td>${data.maxLoss}</td></tr>
      <tr><td class="py-2">Daily Loss</td><td>${data.dailyLoss}</td></tr>
      <tr><td class="py-2">Profit Share</td><td>${data.share}</td></tr>
      <tr><td class="py-2">Max Drawdown Type</td><td>${data.maxDrawdownType}</td></tr>
      <tr><td class="py-2">Daily Drawdown Type</td><td>${data.dailyDrawdownType}</td></tr>
      <tr><td class="py-2">Time Limit</td><td>${data.time}</td></tr>
      <tr><td class="py-2">Leverage</td><td>${data.leverage}</td></tr>
      <tr><td class="py-2">Evaluation Min Trading Days</td><td>${data.evalMinDays}</td></tr>
      <tr><td class="py-2">Funded Min Trading Days</td><td>${data.fundedMinDays}</td></tr>
      <tr><td class="py-2">Payout Frequency</td><td>${data.payout}</td></tr>
      <tr><td class="py-2">Account Copy Trading</td><td>${data.copyTrading}</td></tr>
      <tr><td class="py-2">Prohibited Strategies</td><td>${data.prohibited}</td></tr>
    </table>
  `;
}


function updateSizes() {
    const sizeButtons = document.querySelectorAll(".size-btn");
    let firstVisible = null;

    sizeButtons.forEach(btn => {
    const size = btn.dataset.size;
    if (challengeData[currentStep][size]) {
        btn.classList.remove("hidden");
        if (!firstVisible) firstVisible = btn; // pick first available
    } else {
        btn.classList.add("hidden");
    }
    btn.classList.remove("bg-green-400");
    });

    // auto-highlight the first visible option
    if (firstVisible) {
    currentSize = firstVisible.dataset.size;
    firstVisible.classList.add("bg-green-400");
    }
}

// Step buttons
document.querySelectorAll(".step-btn").forEach(btn => {
    btn.addEventListener("click", () => {
    // reset styling
    document.querySelectorAll(".step-btn").forEach(b => b.classList.remove("bg-green-400"));
    btn.classList.add("bg-green-400");

    currentStep = btn.dataset.step;
    updateSizes();
    renderChallenge();
    });
});

// Size buttons
document.querySelectorAll(".size-btn").forEach(btn => {
    btn.addEventListener("click", () => {
    document.querySelectorAll(".size-btn").forEach(b => b.classList.remove("bg-green-400"));
    btn.classList.add("bg-green-400");

    currentSize = btn.dataset.size;
    renderChallenge();
    });
});

// initial render
document.querySelector(".step-btn[data-step='" + currentStep + "']").classList.add("bg-green-400");
updateSizes();
renderChallenge();
