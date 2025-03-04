const users = {
  '1': { password: '1', balance: 9999 },
  'user2': { password: 'def456', balance: 2000 },
  'user3': { password: 'ghi789', balance: 3000 },
  // 繼續加到 user20
};

let currentUser = null;

function showPage(pageId) {
  document.querySelectorAll('.page').forEach(page => page.classList.add('hidden'));
  document.getElementById(pageId).classList.remove('hidden');
}

function login() {
  const userId = document.getElementById('loginUserId').value.trim();
  const password = document.getElementById('loginPassword').value.trim();
  if (users[userId] && users[userId].password === password) {
    currentUser = userId;
    document.getElementById('loginResult').innerText = `登入成功，歡迎 ${userId}`;
  } else {
    document.getElementById('loginResult').innerText = '帳號或密碼錯誤';
  }
}

function checkBalance() {
  if (!currentUser) return alert('請先登入');
  document.getElementById('balanceResult').innerText = `餘額：${users[currentUser].balance} 元`;
}

function transfer() {
  if (!currentUser) return alert('請先登入');

  const bankCode = document.getElementById('toBankCode').value.trim();
  const account = document.getElementById('toAccount').value.trim();
  const amount = Number(document.getElementById('transferAmount').value);

  if (!bankCode || !account || amount <= 0) {
    document.getElementById('transferResult').innerText = '請完整填寫資訊';
    return;
  }

  if (users[currentUser].balance < amount) {
    document.getElementById('transferResult').innerText = '餘額不足';
    return;
  }

  users[currentUser].balance -= amount;

  document.getElementById('transferResult').innerText =
    `轉帳成功！\n金額：${amount} 元\n銀行代號：${bankCode}\n帳戶：${account}\n\n` +
    `剩餘餘額：${users[currentUser].balance} 元\n\n` +
    `請截圖並傳送至本科技團隊官方LINE確認。`;
}

function withdraw() {
  if (!currentUser) return alert('請先登入');

  const amount = Number(document.getElementById('withdrawAmount').value);

  if (amount <= 0) {
    document.getElementById('withdrawResult').innerText = '金額不正確';
    return;
  }

  if (users[currentUser].balance < amount) {
    document.getElementById('withdrawResult').innerText = '餘額不足';
    return;
  }

  users[currentUser].balance -= amount;
  document.getElementById('withdrawResult').innerText =
    `提款成功！扣款 ${amount} 元，剩餘 ${users[currentUser].balance} 元`;
}
