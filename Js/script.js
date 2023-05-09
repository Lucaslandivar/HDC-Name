function generateName() {
    const keyword = document.getElementById("keyword").value;
    const words = ["tech", "web", "digital", "smart", "global", "creative", "net", "app", "online", "cloud", "enviroment", "mania", "ink", "portal"];
    const randomIndex = Math.floor(Math.random() * words.length);
    const randomWord = words[randomIndex];
    const websiteName = keyword + " " + randomWord;
    document.getElementById("result").textContent = `Your website name is: ${websiteName}`;
  }

