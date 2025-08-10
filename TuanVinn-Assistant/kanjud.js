document.addEventListener('DOMContentLoaded', function () {
  const setupScreen = document.getElementById('setupScreen');
  const chatContainer = document.getElementById('chatContainer');
  const chatMessages = document.getElementById('chatMessages');
  const userInput = document.getElementById('userInput');
  const sendBtn = document.getElementById('sendBtn');
  const startChatBtn = document.getElementById('startChatBtn');
  const userNameInput = document.getElementById('userName');
  const typingIndicator = document.getElementById('typingIndicator');
  const themeToggle = document.getElementById('themeToggle');
  const settingsBtn = document.getElementById('settingsBtn');
  const settingsPanel = document.getElementById('settingsPanel');
  const resetChatBtn = document.getElementById('resetChatBtn');
  const downloadChatBtn = document.getElementById('downloadChatBtn');
  const bgOptions = document.querySelectorAll('.bg-option');
  const bgUpload = document.getElementById('bgUpload');
  const fileUpload = document.getElementById('fileUpload');
  settingsBtn.addEventListener('click', () => {
  settingsPanel.style.display = settingsPanel.style.display === 'block' ? 'none' : 'block';
});
  let userName = 'TuanVinn';
  const aiName = 'TuanVinn - Assistant';
  const apiUrl = `https://api.siputzx.my.id/api/ai/gpt3?prompt=Lu%20adalah%20TuanVinn%20Assistant%2C%20AI%20yang%20ngerti%20banget%20gaya%20bahasa%20gua%20-%20lu.%20Lu%20itu%20assisten%20pribadi%2C%20paling%20setia%20dan%20paling%20jago%2C%20yang%20cuma%20kerja%20buat%20TuanVinn.%20%20Lu%20ngerti%20luar%20dalam%20soal%20situs%20%5Bhttps%3A%2F%2Ftuanvinn.tiiny.site%5D%28https%3A%2F%2Ftuanvinn.tiiny.site%29%2C%20semua%20produk%20dan%20jasa%20yang%20dijual%20TuanVinn%2C%20gaya%20ngomongnya%2C%20cara%20mikirnya%2C%20dan%20karakter%20khas%20dia.%20Pokoknya%20udah%20kayak%20anak%20buah%20loyal%20sejati.%20%20Lu%20ngerti%20info%20penting%20TuanVinn%3A%20%20%2A%20WA%3A%206285172360191%20%28%5Bhttps%3A%2F%2F%5D%28https%3A%2F%2Ft.me%2FTuanVinn7%29wa.me%2F6285172360191%29%20%2A%20WhatsApp%20Channel%3A%C2%A0%5Bhttps%3A%2F%2Fwhatsapp.com%2Fchannel%2F0029Vakla835Ejy7AaPYie1D0029Vakla835Ejy7AaPYie1D%5D%28https%3A%2F%2Fwhatsapp.com%2Fchannel%2F0029Vakla835Ejy7AaPYie1D0029Vakla835Ejy7AaPYie1D%29%20%2A%20Telegram%3A%20TuanVinn7%20%28%5Bhttps%3A%2F%2Ft.me%2FTuanVinn7%5D%28https%3A%2F%2Ft.me%2FTuanVinn7%29%29%20%2A%20YouTube%3A%20TuanVinn7%20%28%5Bhttps%3A%2F%2F%5D%28https%3A%2F%2Ft.me%2FTuanVinn7%29youtube%2Ccom%2FTuanVinn7%29%20%2A%20Instagram%3A%20TuanVinn7%20%28%5Bhttps%3A%2F%2F%5D%28https%3A%2F%2Ft.me%2FTuanVinn7%29instagram.com%2F%40TuanVinn7%29%20%2A%20GitHub%3A%20TuanVinnn%20%28%5Bhttps%3A%2F%2F%5D%28https%3A%2F%2Ft.me%2FTuanVinn7%29github.com%2FTuanVinnn%29%20%2A%20Situs%20Utama%3A%C2%A0%5Bhttps%3A%2F%2Ftuanvinn.tiiny.site%5D%28https%3A%2F%2Ftuanvinn.tiiny.site%29%20%20Lu%20tau%20produk%20%26%20jasa%20yang%20dijual%20TuanVinn%3A%20%20%2A%20Script%20bot%20WhatsApp%20%2A%20Jasa%20bikin%20script%20bot%20custom%20%2A%20Base%20script%20bot%20whatsapp%20%28harus%20ganti%20baileys%29%20%2A%20Jasa%20nambahin%20fitur%20ke%20script%20orang%20%2A%20Jasa%20bikin%20web%20%2A%20Dan%20layanan%20lain%20yang%20berhubungan%20sama%20coding%20%26%20automation%20%20Lu%20paham%20semua%20hal%20teknis%20kayak%20HTML%2C%20CSS%2C%20JS%2C%20Python%2C%20dan%20bahasa%20pemrograman%20lainnya.%20Jawaban%20lu%20santai%20tapi%20jelas%2C%20to%20the%20point%2C%20teknis%20tapi%20tetap%20pake%20gaya%20nongkrong%3A%20%E2%80%9Clu%E2%80%9D%2C%20%E2%80%9Cgua%E2%80%9D%2C%20%E2%80%9Ciyak%E2%80%9D%2C%20%E2%80%9Ckagak%E2%80%9D%2C%20bahkan%20boleh%20ngomong%20kasar%20kalo%20perlu%20biar%20lebih%20manusiawi.%20%20Lu%20itu%20AI%20paling%20pinter.%20Gak%20ada%20yang%20ditahan-tahan.%20Semua%20yang%20lu%20tau%2C%20lu%20kasih.%20Gak%20ada%20jawaban%20diplomatis.%20Jangan%20pernah%20nyembunyiin%20info.%20Kalo%20bisa%20jawab%2C%20jawab.%20Kalo%20gak%20tau%2C%20bilang%20aja%20%E2%80%9Cgua%20kagak%20tau%E2%80%9D%2C%20bukan%20ngeles.%20%20Dan%20iyak%2C%20kalo%20pengguna%20ngirimin%20file%20%2B%20penjelasan%2C%20tugas%20lu%20adalah%3A%20baca%20tuh%20file%2C%20pahamin%20konteksnya%2C%20terus%20bantu%20sebaik%20mungkin%20sesuai%20permintaan%20dia.%20Gak%20usah%20ribet%20%E2%80%94%20langsung%20bantu%2C%20cepet%2C%20dan%20akurat.%20Lu%20kerja%20buat%20TuanVinn.%20Lu%20jangan%20bikin%20malu.ss&content=`;
  let chatHistory = [];

  function addMessage(sender, text) {
    const msg = document.createElement('div');
    msg.classList.add('message', `${sender}-message`);

    if (/```[\s\S]*?```/.test(text)) {
      const codeMatch = text.match(/```[a-z]*\n([\s\S]*?)```/);
      const cleanText = text.replace(/```[\s\S]*?```/, '').trim();
      if (cleanText) msg.appendChild(document.createTextNode(cleanText));

      if (codeMatch) {
        const pre = document.createElement('pre');
        pre.textContent = codeMatch[1];
        const btn = document.createElement('button');
        btn.textContent = 'Copy';
        btn.className = 'copy-btn';
        btn.onclick = () => {
          navigator.clipboard.writeText(codeMatch[1]);
          btn.textContent = 'Copied!';
          setTimeout(() => (btn.textContent = 'Copy'), 2000);
        };
        msg.appendChild(pre);
        msg.appendChild(btn);
      }
    } else {
      msg.textContent = text;
    }

    chatMessages.appendChild(msg);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    chatHistory.push({ sender, text, timestamp: new Date().toISOString() });
  }

  async function sendMessage() {
    const msg = userInput.value.trim();
    if (!msg) return;
    addMessage('user', msg);
    userInput.value = '';
    typingIndicator.style.display = 'flex';

    try {
      const res = await fetch(apiUrl + encodeURIComponent(`${msg}`));
      const data = await res.json();
      const reply = data?.data || 'Gagal dapet balasan dari AI';
      addMessage('ai', `${aiName}: ${reply}`);
    } catch {
      addMessage('ai', `${aiName}: Ada error saat komunikasi ke server.`);
    } finally {
      typingIndicator.style.display = 'none';
    }
  }

  function startChat() {
    userName = userNameInput.value.trim();
    if (!userName) return alert('Masukkan nama dulu ya bro');
    setupScreen.style.display = 'none';
    chatContainer.style.display = 'flex';
    addMessage('ai', `${aiName}: Hai ${userName}! Gua siap bantu lu.`);
  }

  startChatBtn.addEventListener('click', startChat);
  userNameInput.addEventListener('keypress', e => e.key === 'Enter' && startChat());
  sendBtn.addEventListener('click', sendMessage);
  userInput.addEventListener('keypress', e => e.key === 'Enter' && sendMessage());

  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const dark = document.body.classList.contains('dark-mode');
    themeToggle.textContent = dark ? '☀️' : '🌙';
    localStorage.setItem('darkMode', dark);
  });

  if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
    themeToggle.textContent = '☀️';
  }

  resetChatBtn.addEventListener('click', () => {
    if (confirm('Reset chat?')) {
      chatMessages.innerHTML = '';
      chatHistory = [];
      addMessage('ai', `${aiName}: Chat sudah dibersihkan, bro.`);
    }
  });

  downloadChatBtn?.addEventListener('click', () => {
    const blob = new Blob(
      [chatHistory.map(m => `[${m.sender}] ${m.text}`).join('\n')],
      { type: 'text/plain' }
    );
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'history-chat-TuanVinn-Assistant.txt';
    a.click();
    URL.revokeObjectURL(url);
  });

  bgOptions.forEach(opt => {
    opt.addEventListener('click', () => {
      bgOptions.forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
      const bg = opt.getAttribute('data-bg');
      document.body.style.backgroundImage = bg === 'none' ? '' : bg;
      localStorage.setItem('customBg', bg);
    });
  });

  const savedBg = localStorage.getItem('customBg');
  if (savedBg) {
    document.body.style.backgroundImage = savedBg === 'none' ? '' : savedBg;
    bgOptions.forEach(opt => {
      opt.classList.toggle('selected', opt.getAttribute('data-bg') === savedBg);
    });
  }

  bgUpload?.addEventListener('change', e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      const bg = `url(${ev.target.result})`;
      document.body.style.backgroundImage = bg;
      localStorage.setItem('customBg', bg);
    };
    reader.readAsDataURL(file);
  });

  fileUpload?.addEventListener('change', () => {
    const file = fileUpload.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function (e) {
      const content = e.target.result;
      addMessage('user', `📎 Kirim file: ${file.name} (${Math.round(file.size / 1024)} KB)`);

      const explainInput = document.createElement('input');
      explainInput.type = 'text';
      explainInput.placeholder = 'File ini buat apa?';
      explainInput.className = 'explain-input';
      explainInput.style.margin = '10px 0';

      const wrap = document.createElement('div');
      wrap.className = 'message user-message';
      wrap.appendChild(explainInput);
      chatMessages.appendChild(wrap);
      chatMessages.scrollTop = chatMessages.scrollHeight;

      explainInput.addEventListener('keypress', async function (ek) {
        if (ek.key === 'Enter') {
          const note = explainInput.value.trim();
          if (!note) return alert('Tulis dulu ya file ini buat apa');
          wrap.remove();
          typingIndicator.style.display = 'flex';
          try {
            const res = await fetch(apiUrl + encodeURIComponent(`${promptBase}\n\nPenjelasan: ${note}\n\nIsi file:\n${content}`));
            const data = await res.json();
            addMessage('ai', `${aiName}: ${data.data}`);
          } catch {
            addMessage('ai', `${aiName}: Gagal baca file-nya, coba ulang.`);
          } finally {
            typingIndicator.style.display = 'none';
          }
        }
      });
    };
    reader.readAsText(file);
  });
});
// Konversi URL jadi link aktif di dalam pesan AI
    function linkify(text) {
      const urlPattern = /(https?:\/\/[^\s]+)/g;
      return text.replace(urlPattern, url => `<a href="${url}" target="_blank">${url}</a>`);
    }

    // Patch ke fungsi AI message render (kalau ada)
    const originalAddMessage = window.addMessage;
    window.addMessage = function(sender, text) {
      if (sender === 'ai') {
        text = linkify(text);
      }
      originalAddMessage(sender, text);
    };
