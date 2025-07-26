document.addEventListener("DOMContentLoaded", () => {
    const track = document.getElementById("scrolling-track");
    const content = document.getElementById("scrolling-content");
    const clone = content.cloneNode(true);
    track.appendChild(clone);
  });
      
      // Scroll reveal effect
      document.addEventListener('DOMContentLoaded', () => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        }, { threshold: 0.1 });

        document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));
      });
    </script>

    <main class="px-6 pt-10 pb-28 space-y-24">
      <!-- HOME -->
      <section id="home" class="space-y-8 text-center fade-in">
        <h1 class="text-4xl font-extrabold gradient-text">Hi, I'm Dika</h1>
        <p class="text-lg opacity-70 mt-2">Bot Developer & Programmer based in Indonesia</p>
        <div class="mt-4 flex justify-center gap-4">
          <a href="https://github.com/dikaagntng" target="_blank" class="social-icon"><i class="fab fa-github"></i></a>
          <a href="https://wa.me/6283841442290" target="_blank" class="social-icon"><i class="fab fa-whatsapp"></i></a>
          <a href="https://instagram.com/dikafivee" target="_blank" class="social-icon"><i class="fab fa-instagram"></i></a>
          <a href="https://tiktok.com/@dikafivee" target="_blank" class="social-icon"><i class="fab fa-tiktok"></i></a>
        </div>

<div class="scrolling-container border-y border-neutral py-3 mt-6">
  <div class="scrolling-track" id="scrolling-track">
    <div class="scrolling-content" id="scrolling-content">
      <div class="logo-row flex gap-8">
        <i class="devicon-html5-plain tech-icon text-orange-500"></i>
        <i class="devicon-css3-plain tech-icon text-blue-500"></i>
        <i class="devicon-javascript-plain tech-icon text-yellow-300"></i>
        <i class="devicon-nodejs-plain tech-icon text-green-500"></i>
        <i class="devicon-typescript-plain tech-icon text-blue-400"></i>
        <i class="devicon-python-plain tech-icon text-yellow-400"></i>
        <i class="devicon-react-original tech-icon text-cyan-400"></i>
        <i class="devicon-bootstrap-plain tech-icon text-cyan-400 last-icon"></i>
      </div>
    </div>
  </div>
</div>

<section class="space-y-10 mt-16 scroll-reveal">
  <div class="text-center space-y-2">
    <h2 class="text-4xl font-bold text-white">What I Do</h2>
    <p class="text-gray-400 max-w-xl mx-auto">Here’s a glimpse of my skills and the services I offer as a developer.</p>
  </div>

  <div class="grid gap-6 md:grid-cols-3">
    <!-- Card 1 -->
    <div class="bg-neutral-800 rounded-xl p-6 border border-cyan-600 hover:scale-[1.03] transition-all duration-300 shadow-lg scroll-reveal">
      <div class="mb-4 text-3xl text-cyan-400">
        <i class="fas fa-globe"></i>
      </div>
      <h3 class="text-xl font-semibold mb-2 text-white">Web Scraping</h3>
      <p class="text-sm text-gray-400">Extract structured data from websites using Python & automation tools for insights and efficiency.</p>
    </div>

    <!-- Card 2 -->
    <div class="bg-neutral-800 rounded-xl p-6 border border-blue-500 hover:scale-[1.03] transition-all duration-300 shadow-lg scroll-reveal">
      <div class="mb-4 text-3xl text-blue-400">
        <i class="fas fa-robot"></i>
      </div>
      <h3 class="text-xl font-semibold mb-2 text-white">Bot Development</h3>
      <p class="text-sm text-gray-400">Custom WhatsApp, Telegram, and web bots using Node.js or Python — fully integrated with APIs.</p>
    </div>

    <!-- Card 3 -->
    <div class="bg-neutral-800 rounded-xl p-6 border border-green-500 hover:scale-[1.03] transition-all duration-300 shadow-lg scroll-reveal">
      <div class="mb-4 text-3xl text-green-400">
        <i class="fas fa-mobile-alt"></i>
      </div>
      <h3 class="text-xl font-semibold mb-2 text-white">Mobile Development</h3>
      <p class="text-sm text-gray-400">Build modern mobile apps with Flutter or React Native, optimized for performance and UI/UX.</p>
    </div>
  </div>
</section>

      <!-- PROJECTS -->
      <section id="projects" class="space-y-8 scroll-reveal">
        <h2 class="text-3xl font-semibold">Projects</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-neutral rounded-xl p-4 border border-cyan-500 scroll-reveal hover:scale-105 transition duration-300">
            <img src="images/project1.jpg" alt="Project 1"/>
            <h3 class="text-xl font-bold">Website Store</h3>
            <p class="text-sm opacity-70">Developer</p>
            <div class="flex gap-4 mt-2">
              <a href="https://github.com/" target="_blank"
   class="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full font-medium bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:scale-105 transition duration-300">
   <i class="fas fa-code"></i> Source
</a>
              <a href="https://dikaa.com/" target="_blank"
   class="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full font-medium bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-teal-500/30 hover:shadow-xl hover:scale-105 transition duration-300">
   <i class="fas fa-globe"></i> Demo
</a>
            </div>
          </div>
          
          <div class="bg-neutral rounded-xl p-4 border border-blue-400 scroll-reveal hover:scale-105 transition duration-300">
            <img src="images/project2.jpg" class="rounded-lg mb-3" alt="Project 2"/>
            <h3 class="text-xl font-bold">Portofolio Digital</h3>
            <p class="text-sm opacity-70">Coming Soon</p>
            <div class="flex gap-4 mt-2">
              <a href="https://github.com/" target="_blank"
   class="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full font-medium bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:scale-105 transition duration-300">
   <i class="fas fa-code"></i> Source
</a>
              <a href="https://dikaa.com/" target="_blank"
   class="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full font-medium bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-teal-500/30 hover:shadow-xl hover:scale-105 transition duration-300">
   <i class="fas fa-globe"></i> Demo
</a>
            </div>
          </div>
        </div>
          
          <div class="bg-neutral rounded-xl p-4 border border-purple-400 scroll-reveal hover:scale-105 transition duration-300">
            <img src="images/project3.jpg" class="rounded-lg mb-3" alt="Project 2"/>
            <h3 class="text-xl font-bold">Bot Whatsapp</h3>
            <p class="text-sm opacity-70">Coming Soon</p>
            <div class="flex gap-4 mt-2">
              <a href="https://github.com/" target="_blank"
   class="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full font-medium bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:scale-105 transition duration-300">
   <i class="fas fa-code"></i> Source
</a>
              <a href="https://dikaa.com/" target="_blank"
   class="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full font-medium bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-teal-500/30 hover:shadow-xl hover:scale-105 transition duration-300">
   <i class="fas fa-globe"></i> Demo
</a>
            </div>
          </div>
        </div>
      </section>

      <!-- CONTACT -->
      <section id="contact" class="space-y-6 scroll-reveal">
        <h2 class="text-3xl font-semibold">Let's Talk</h2>
        <form class="flex flex-col gap-4" onsubmit="sendTelegram(event)">
          <input type="text" id="name" placeholder="Name" class="input input-bordered w-full" required />
          <input type="email" id="email" placeholder="Email" class="input input-bordered w-full" required />
          <textarea id="message" placeholder="Message" class="textarea textarea-bordered" required></textarea>
          <button id="submitBtn" type="submit"
  class="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full font-medium bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:scale-105 transition duration-300 w-full">
  <i class="fas fa-paper-plane"></i>
  <span id="submitText">Send Message</span>
  <span id="loadingSpinner" class="loading loading-spinner loading-sm hidden"></span>
</button>
        </form>

        <dialog id="telegramDialog" class="modal">
          <div class="modal-box">
            <h3 class="font-bold text-lg">Success!</h3>
            <p class="py-2">Pesan berhasil dikirim!</p>
            <div class="modal-action">
              <form method="dialog">
                <button class="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </section>

      <!-- AI CHAT -->
      <section id="ai-chat" class="space-y-6 scroll-reveal">
        <h2 class="text-3xl font-semibold">Ask My Assistant</h2>
        <div class="bg-neutral rounded-xl p-4 h-[400px] overflow-y-auto space-y-3 border border-cyan-500 flex flex-col" id="chat-box">
          <div class="text-sm opacity-60 text-center">Start chatting with your AI Assistant...</div>
        </div>
        <form class="flex gap-3" onsubmit="sendMessage(event)">
          <textarea id="user-input" class="textarea textarea-bordered w-full" placeholder="Type a message..." required></textarea>
          <button type="submit"
  class="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full font-medium bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-teal-500/30 hover:shadow-xl hover:scale-105 transition duration-300">
  <i class="fas fa-paper-plane"></i> Send
</button>
        </form>
      </section>

      <!-- FOOTER -->
      <footer class="mt-10 text-center text-sm opacity-70">
        <iframe style="border-radius:12px" 
        src="https://open.spotify.com/embed/artist/7Gy1PxqrgsiqWF6JNYPHeB" 
        width="100%" 
        height="152" 
        frameborder="0" 
        allowtransparency="true" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy">
</iframe>
        <p class="mt-4">Built with ❤️ by Mahesa Dika — 2025</p>
      </footer>
    </main>

    <!-- NAVBAR -->
    <header class="fixed bottom-0 left-0 w-full bg-neutral text-neutral-content flex justify-around py-3 border-t border-neutral z-50">
      <a href="#home" class="flex flex-col items-center hover:text-cyan-400 transition">
        <i class="fas fa-home"></i>
        <span class="text-xs">Home</span>
      </a>
      <a href="#projects" class="flex flex-col items-center hover:text-cyan-400 transition">
        <i class="fas fa-folder"></i>
        <span class="text-xs">Projects</span>
      </a>
      <a href="#contact" class="flex flex-col items-center hover:text-cyan-400 transition">
        <i class="fas fa-comment-dots"></i>
        <span class="text-xs">Contact</span>
      </a>
      <a href="#ai-chat" class="flex flex-col items-center hover:text-cyan-400 transition">
        <i class="fas fa-robot"></i>
        <span class="text-xs">AI Chat</span>
      </a>
    </header>

    <!-- SCRIPT TELEGRAM & AI CHAT -->
    <script>
      function sendTelegram(event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
        const submitText = document.getElementById("submitText");
        const spinner = document.getElementById("loadingSpinner");

        const text = `New Message from Portfolio:%0AName: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
        const botToken = "7875757146:AAEuRNqE1xwKmJc3brYRUb8FAqDTuZnPx0c";
        const chatId = "7549977755";
        const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${text}`;

        submitText.classList.add("hidden");
        spinner.classList.remove("hidden");

        fetch(url)
          .then((res) => {
            if (!res.ok) throw new Error("Network error");
            document.getElementById("telegramDialog").showModal();
            document.getElementById("name").value = '';
            document.getElementById("email").value = '';
            document.getElementById("message").value = '';
          })
          .catch(() => alert("Gagal mengirim pesan. Periksa koneksi atau token."))
          .finally(() => {
            submitText.classList.remove("hidden");
            spinner.classList.add("hidden");
          });
      }

      async function sendMessage(event) {
        event.preventDefault();
        const input = document.getElementById("user-input");
        const chatBox = document.getElementById("chat-box");
        const userText = input.value.trim();
        if (!userText) return;

        const userMessage = document.createElement("div");
        userMessage.className = "bg-cyan-600 p-2 rounded text-sm self-end max-w-[80%]";
        userMessage.textContent = userText;
        chatBox.appendChild(userMessage);

        const botMessage = document.createElement("div");
        botMessage.className = "bg-neutral-700 p-2 rounded text-sm self-start max-w-[80%] opacity-60";
        botMessage.textContent = "Typing...";
        chatBox.appendChild(botMessage);
        chatBox.scrollTop = chatBox.scrollHeight;
        input.value = "";

        const reply = await getAIResponse(userText);
        botMessage.textContent = reply;
        botMessage.classList.remove("opacity-60");
        chatBox.scrollTop = chatBox.scrollHeight;
      }

      async function getAIResponse(message) {
  const apiKey = "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"; // Ganti dengan API key dari OpenRouter
  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
        "HTTP-Referer": "https://yourdomain.com", // Ganti dengan nama domain kamu
        "X-Title": "AI Chat", // Optional
      },
      body: JSON.stringify({
        model: "openai/gpt-3.5-turbo", // Atau coba model lain seperti "mistralai/mistral-7b-instruct"
        messages: [{ role: "user", content: message }]
      })
    });

    const data = await response.json();
    return data.choices?.[0]?.message?.content?.trim() || "No response.";
  } catch (err) {
    return "Error contacting OpenRouter: " + err.message;
  }
}
