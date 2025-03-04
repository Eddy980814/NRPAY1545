const users = {
  'ECX': { password: 'A4uu7014', balance: 1000 },
  'user2': { password: 'def456', balance: 2000 },
  'user3': { password: 'ghi789', balance: 3000 },
  'user4': { password: 'jkl012', balance: 4000 },
  'user5': { password: 'mno345', balance: 5000 },
  'user6': { password: 'pqr678', balance: 6000 },
  'user7': { password: 'stu901', balance: 7000 },
  'user8': { password: 'vwx234', balance: 8000 },
  'user9': { password: 'yz5678', balance: 9000 },
  'user10': { password: '123abc', balance: 10000 },
  'user11': { password: '456def', balance: 11000 },
  'user12': { password: '789ghi', balance: 12000 },
  'user13': { password: '012jkl', balance: 13000 },
  'user14': { password: '345mno', balance: 14000 },
  'user15': { password: '678pqr', balance: 15000 },
  'user16': { password: '901stu', balance: 16000 },
  'user17': { password: '234vwx', balance: 17000 },
  'user18': { password: '567yz', balance: 18000 },
  'user19': { password: 'abc890', balance: 19000 },
  'user20': { password: 'def123', balance: 20000 },
};

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
