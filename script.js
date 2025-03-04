const users = {};
for (let i = 1; i <= 20; i++) {
  users[`user${i}`] = { password: `pass${i}`, balance: 1000 };
}

let currentUser = null;

function login() {
  const userId = document.getElementById('loginUserId').value;
  const password = document.getElementById('loginPassword').value;
  if (users[userId] && users[userId].password === password) {
    currentUser = userId;
    document.getElementById('loginResult').innerText = `登入成功，歡迎 ${userId}`;
  } else {
    document.getElementById('loginResult').innerText = '帳號或密碼錯誤';
  }
}

function checkBalance() {
  if (!currentUser) return alert('請先登入');
  document.getElementById('balanceResult').innerText =
    `餘額：${users[currentUser].balance} 元`;
}

function transfer() {
  if (!currentUser) return alert('請先登入');
  const bankCode = document.getElementById('toBankCode').value;
  const account = document.getElementById('toAccount').value;
  const amount = Number(document.getElementById('transferAmount').value);
  if (!bankCode || !account || amount <= 0) {
    return document.getElementById('transferResult').innerText = '請完整填寫資訊';
  }
  if (users[currentUser].balance < amount) {
    return document.getElementById('transferResult').innerText = '餘額不足';
  }
  users[currentUser].balance -= amount;
  document.getElementById('transferResult').innerText =
    `轉帳成功！扣款 ${amount} 元，剩餘 ${users[currentUser].balance} 元`;
}

function withdraw() {
  if (!currentUser) return alert('請先登入');
  const amount = Number(document.getElementById('withdrawAmount').value);
  if (amount <= 0) {
    return document.getElementById('withdrawResult').innerText = '金額不正確';
  }
  if (users[currentUser].balance < amount) {
    return document.getElementById('withdrawResult').innerText = '餘額不足';
  }
  users[currentUser].balance -= amount;
  document.getElementById('withdrawResult').innerText =
    `提款成功！扣款 ${amount} 元，剩餘 ${users[currentUser].balance} 元`;
}
