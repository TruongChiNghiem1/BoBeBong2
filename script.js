const prompts = [
  "Hôm nay em mong nhận được điều gì từ anh nhất?",
  "Điều nào trong mối quan hệ này làm em thấy tự hào nhất?",
  "Lúc em buồn, anh làm gì thì em thấy được lắng nghe?",
  "Mình cần sửa điều gì để yêu nhau nhẹ lòng hơn?",
  "Kỷ niệm nào của hai đứa em muốn lặp lại vào tháng tới?",
  "Một câu em muốn nói thật với anh hôm nay là gì?"
];

const playlist = ["music/1.mp3", "music/2.mp3", "music/3.mp3", "music/1.mp3", "music/2.mp3", "music/3.mp3"];

// Nhập nội dung thư ở đây. Mỗi đoạn cách nhau bằng 1 dòng trống.
// Có thể thêm [1] hoặc [2] ở đầu đoạn để ép số ảnh cho đoạn đó.
const letterTextInput = `
[1]

[2] Hello em hôm nay cũng đã qua tết anh trò chuyện deeptalk với em một tí nhé. 
Hổm rài tết nhất vui vẻ nên anh k tiện nói nè
Thời gian qua thì k ngày nào mà anh k suy nghĩ về chuyện của mình hết.
Hôm trước tự nhiên em im lặng dùng chiến thuật ít giao tiếp để rời xa anh dần, sau đó thì nhắn dừng lại với anh, nhưng khi hỏi lại thì em không giải thích lý do cho anh được, thì anh đã biết là trong chuyện của mình em đã kể cho một người nào đó và họ khuyên em rời xa anh.
Lúc trước em có nói với anh là: "Dù có chuyện gì xảy ra thì phải luôn tin em đầu tiên" và anh luôn nghe và lúc nào anh cũng tin em đầu tiên khi có chuyện xảy ra. 
Vậy mà với anh em lại không tin anh mà em lại tin một người nào đó chưa từng nói chuyện thậm chí còn chưa gặp anh ngoài đời. Và họ phán xét giống như là họ biết hết tất cả về anh rồi em tin họ. Nếu đổi lại là anh đi tin người ta như vậy thì cảm giác của em sẽ như thế nào.
Anh chỉ buồn vì anh nghĩ nếu có chuyện gì đó làm em lăn tăn, giá như em nói thẳng với anh một lần, anh tin là tụi mình có thể ngồi lại với nhau.

[2] Thời gian quen em vừa qua anh cảm thấy em bị thiệt thòi rất nhiều thứ.  Vì lúc anh quen em thì lúc đó tài chính của anh đang khá khó khăn, làm cho em bị thiệt thòi nhiều.
Có nhiều thứ anh biết em thích nhưng anh chưa thể mua liền cho em được, anh thấy rất là áy náy và anh luôn note lại những thứ mà em thích để khi kinh tế anh ổn định như hiện tại anh sẽ mua cho em.
Em có biết vì sao ghé tiệm trà sữa thì anh lại mua trà k, vì nó là ly rẻ nhất, Rau má nguyên chất là rẻ nhất, Anh biết em rất thích home đầu tiên nhưng do home đầu có giá gấp đôi những home mình hay đi nên lúc đó anh đang khó khăn nên anh chưa thể thuê home đó cho mình đi được... có những thứ em dặn anh mua, những cái anh biết em sẽ cần, anh rất muốn mua nhưng anh lại bất lực không mua được vì số tiền anh đang có không đủ. Và còn rất nhiều chuyện khác anh nghĩ em tinh tế và đủ trãi nghiệm nên chắc cũng đã nhận ra được.

[1]

[2] Trong mindset của anh: con gái cưng người ta đang ăn sung mặc sướng muốn ăn gì mua gì mình thích cũng được tự nhiên có thằng ất ơ nào đó lại và bắt không được mua, phải sống tiết kiệm lại chịu khổ cùng anh. TRỜI TRỜI ĐÂU RA DỊ, BỊ KHÙNG HẢ.
Anh muốn người con gái đó đến với anh ngoài những điều hiện tại cổ đang có thì phải được thêm, muốn gì cũng không phải lo về giá cả. vì anh biết mọi điều hạnh phúc đều phải có tiền. Chẳn hạn như homestay, đi ăn đi chơi,… tất cả đều phải có tiền mới vui được, muốn ăn muốn chơi gì thì cũng phải có tiền để không phải đứng trước quầy hàng đắng đo là mình có đủ tiền để vào hay không hay buộc phải chọn những nơi có giá rẻ mà không có lựa chọn. Anh sẽ không bao giờ để vợ và con của mình phải chịu khổ hay rơi vào cảnh thiếu thốn kể cả tình thương, niềm vui lẫn tiền bạc
Anh có quá khứ khá tệ về tiền. Nên anh thật sự rất ám ảnh về tiền. Những điều này rất nhạy cảm và thầm kính của anh. Anh chưa hề nói nó với một ai ngoài em. Anh vẫn đang tin tưởng em sẽ k kể cho người khác

[2] Hiện tại anh đã cắt đứt hoàn toàn mxh với nyc nhưng còn chừa lại 1 kênh liên lạc zalo với nyc gần nhất vì Do là lúc trước anh đang nhạy cảm về tiền nên anh chưa kể với em chuyện này (Vì nếu anh kể ra và thực tế lúc đó anh cũng không có tiền em có thể sẽ có khả năng thôi nha là sẽ nghĩ anh là người thực dụng, tính toán, chia tay đòi tiền) nhưng sau đây anh xin giải thích lý do:
Nyc còn nợ anh 10tr đang trả dần -> vì sao anh lại muốn đòi số tiền này thì có 2 phần (Tất nhiên là không phải mấy cha nội keo kiệt bủng xỉn trên mạng chia tay đòi quà):
1: Tiền cọc nhà: lúc anh đi thì thằng khứa kia chuyển vào ở. Nếu anh k đòi tiền này thì khác gì anh cọc tiền nhà cho thg đó ở ?. Trong khi lúc đó anh phải cực khổ chạy đầu này đầu kia mượn tền cọc trọ mới để không phải ở ngoài đường.
2: Tiền mua máy giặc: anh vừa mua máy giặt mới được 1 tháng thì chia tay, khứa đó nhảy vào liền. Nếu anh không đòi khoảng tiền này thì khác gì anh mua của hồi môn để lại cho 2 người đó ???. Phải chi máy mua được 1 năm thì anh cho luôn chả thèm đòi làm gì. Mà đây là tiền anh thắt lưng buộc bụng để mua
Anh không phải là người đi tính toán mấy chuyện này. Nếu như khứa đó k vô ở thì anh chả thèm tính toán đòi làm gì cho mệt đầu.
Hiện tại thì giao tiếp qua zalo thì chỉ là những bill chuyển tiền, và anh báo số tiền còn lại, ngoài ra không còn nhắn gì khác. Anh đang chờ trả đủ để anh block phát cho anh khỏe người.
Nếu em cảm thấy không thoải mái về vấn đề này thì anh sẽ block và không cần số tiền đó nữa.
Dành tất cả chân thành để đổi lại cặp sừng. Đau lắm em. Phải mất một thời gian dài mới vượt qua được, cũng giống như trãi nghiệm của em. Đến hiện tại em có tư tưởng hay suy nghĩ nào về việc quay lại không, làm gì có, và anh cũng vậy đó, chưa bao giờ có tư tưởng quay lại với nyc, cảm giác tưởng tượng thôi là cũng đủ thấy sợ rồi và Anh sẽ không bao giờ làm người khác phải chịu nỗi đau như anh đã từng chịu.
Anh với em có trãi nghiệm khá giống nhau nên những quyết định, những mong muốn tư tưởng có thể sẽ giống nhau, em sẽ không làm điều tương tự với người khác và anh cũng sẽ không bao giờ làm như vậy. Nếu anh muốn quay lại hay có ý gì đó với nyc thì anh nói với em làm gì, tâm lý là sẽ giấu càng kỹ hơn chứ không ai mà đi nói với em biết như vậy. 
Anh đâu có rãnh đâu mà đi thế chổ của Phật. Họ đối xử vậy với anh rồi anh đối xử tốt lại rồi chờ một ngày nào đó quay lại hả ???. Trời trời. Gặp em em có vậy không. 

[2] Lần tới gặp em anh xin phép được nhập tất cả mxh, zalo gồm acc chính và acc clone, và anh sẽ xác thực điện thoại để khi em có qua mxh của anh thì anh cũng sẽ không biết, nên em cứ yên tâm. Anh biết tâm lý stalk là sẽ không muốn cho người khác biết mà. Em chỉ cần nhấn vào tài khoản của anh là qua được. Vì mail của anh có xác thực ngân hàng, chứng khoán,... nên anh bật bảo mật khá cao nên gửi tk mk trực tiếp em cũng sẽ không vào được nên anh xin phép gặp em anh tự nhập vào nhé. Ở đây không phải là bắt em kiểm soát anh hay phải trông giữ anh mà là anh muốn em sẽ cảm thấy yên tâm hơn, tránh bị những tác nhân bên ngoài làm ảnh hưởng.

[2] À chế 3 có nói là chế 3 thích em lắm và học được từ em nhiều lắm á. Đặc biệt là cách giao tiếp.
Đến hiện tại kinh tế anh đang ổn định trở lại, số tiền anh đầu tư cũng đang sinh lời ổn định, mọi thứ đang bắt đầu ổn trở lại thì em lại rời đi.

[2] Anh dành hết ruột hết gan bằng tất cả sự chân thành của anh cho em rồi đó.
Anh không cần em trả lời ngay.
Anh cũng không muốn em quay lại vì thương hại hay vì anh nói nhiều quá.
Anh chỉ muốn em nhớ lại một chút thôi.
Nhớ những lần hai đứa ngồi nói chuyện tới khuya.
Nhớ những lúc em giận nhưng chỉ cần anh im lặng nghe là em dịu lại.
Nhớ cái cách em nhìn anh khi hai đứa còn chưa có gì trong tay nhưng vẫn thấy vui.
Anh không hoàn hảo.
Anh từng gặp vấn đề về kinh tế.
Anh chưa đáp ứng được hết toàn bộ mong muốn của em
Anh từng tổn thương nên suy nghĩ nhiều.
Nhưng có một điều anh chưa từng thiếu với em — đó là sự nghiêm túc.
Hai chúng ta đều có những vết nứt, mình ở lại để bù đắp cho nhau có được không.
Nếu em hỏi anh có muốn quay lại không?
Anh không muốn “quay lại” theo kiểu cũ.
Anh muốn bắt đầu lại — với phiên bản tốt hơn của anh.
Bình tĩnh hơn. Ổn định hơn. Rõ ràng hơn.
Anh không hứa sẽ cho em cả thế giới ngay lập tức.
Nhưng anh hứa người đi cùng anh sẽ không bao giờ phải cảm thấy cô đơn hay bị bỏ lại phía sau.
Anh biết em mạnh mẽ.
Anh biết em không dễ bị lung lay.
Và chính vì vậy anh mới trân trọng em đến vậy.
Nếu trong lòng em vẫn còn một chút gì đó dành cho anh…
thì đừng vội đóng cửa hoàn toàn.
Anh không chạy theo.
Anh cũng không ép.
Anh chỉ đứng ở đây thôi — đủ vững để nếu em quay đầu lại, anh vẫn còn ở đó.

[1]
`;

// Danh sách ảnh dùng cho từng đoạn, sẽ chạy lần lượt rồi lặp lại.
const storyImages = [
  { src: "images/1.JPG"},
  { src: "images/2.png"},
  { src: "images/3.png"},
  { src: "images/ghichu.jpg"},
  { src: "images/4.PNG"},
  { src: "images/5.JPEG"},
  { src: "images/6.JPG"},
  { src: "images/7.JPG"},
  { src: "images/8.JPEG"},
  { src: "images/9.JPG"},
  { src: "images/10.PNG"},
  { src: "images/11.JPEG"},
  { src: "images/12.png"},
  { src: "images/13.JPEG"},
  { src: "images/14.png"},
  { src: "images/15.png"},
  { src: "images/16.png"},
];
const imagePool =
  storyImages.length > 0
    ? storyImages
    : [{ src: "images/us-1.svg", caption: "Ảnh kỷ niệm của chúng mình." }];

const introGate = document.getElementById("introGate");
const openLetterBtn = document.getElementById("openLetterBtn");
const siteContent = document.getElementById("siteContent");
const bgmPlayer = document.getElementById("bgmPlayer");

const storyList = document.getElementById("storyList");

const todayEl = document.getElementById("today");
const promptEl = document.getElementById("promptText");
const nextPromptBtn = document.getElementById("nextPrompt");
const readBar = document.getElementById("readBar");

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCaption = document.getElementById("lightboxCaption");
const closeLightboxBtn = document.getElementById("closeLightbox");

const paperCard = document.querySelector(".paper-card");

let currentTrackIndex = 0;
let playlistStarted = false;
let revealObserver = null;
let effectsStarted = false;
let scrollTicking = false;

function formatTodayVi() {
  const now = new Date();
  return new Intl.DateTimeFormat("vi-VN", {
    weekday: "long",
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  }).format(now);
}

function splitStoryBlocks(rawText) {
  if (!rawText || !rawText.trim()) {
    return [];
  }

  const chunks = rawText
    .trim()
    .split(/\n\s*\n+/)
    .map((chunk) => chunk.trim())
    .filter(Boolean);

  return chunks.map((chunk, index) => {
    let imageCount = index % 2 === 0 ? 1 : 2;
    let text = chunk;

    const marker = chunk.match(/^\[(1|2)\]\s*/);
    if (marker) {
      imageCount = Number(marker[1]);
      text = chunk.slice(marker[0].length).trim();
    }

    return { text, imageCount: imageCount === 2 ? 2 : 1 };
  });
}

function renderStoryBlocks() {
  if (!storyList) {
    return;
  }

  const blocks = splitStoryBlocks(letterTextInput);
  storyList.innerHTML = "";

  if (blocks.length === 0) {
    const empty = document.createElement("p");
    empty.className = "subhead";
    empty.textContent = "Chưa có nội dung. Hãy nhập text tại biến letterTextInput trong script.js.";
    storyList.appendChild(empty);
    return;
  }

  let imageCursor = 0;

  blocks.forEach((block, blockIndex) => {
    const section = document.createElement("section");
    section.className = `story-block reveal${blockIndex % 2 === 1 ? " reverse" : ""}`;

    const textWrap = document.createElement("div");
    textWrap.className = "story-text";

    const paragraph = document.createElement("p");
    paragraph.textContent = block.text;
    textWrap.appendChild(paragraph);

    const photosWrap = document.createElement("div");
    photosWrap.className = `story-photos ${block.imageCount === 2 ? "double" : "single"}`;

    for (let i = 0; i < block.imageCount; i += 1) {
      const imageMeta = imagePool[(imageCursor + i) % imagePool.length];

      const figure = document.createElement("figure");
      figure.className = "photo-frame";

      const img = document.createElement("img");
      img.className = "story-photo";
      img.src = imageMeta.src;
      img.alt = `Khoảnh khắc của hai bạn - đoạn ${blockIndex + 1} ảnh ${i + 1}`;

      const caption = document.createElement("figcaption");
      caption.textContent = imageMeta.caption || `Ảnh ${blockIndex + 1}.${i + 1}`;

      figure.appendChild(img);
      figure.appendChild(caption);
      photosWrap.appendChild(figure);
    }

    imageCursor += block.imageCount;

    section.appendChild(textWrap);
    section.appendChild(photosWrap);
    storyList.appendChild(section);
  });
}

function updateReadProgress() {
  if (!readBar) {
    return;
  }

  const doc = document.documentElement;
  const total = doc.scrollHeight - doc.clientHeight;
  const scrolled = doc.scrollTop;
  const ratio = total > 0 ? (scrolled / total) * 100 : 0;
  readBar.style.width = `${Math.min(100, Math.max(0, ratio))}%`;
}

function showRandomPrompt() {
  if (!promptEl) {
    return;
  }

  const next = prompts[Math.floor(Math.random() * prompts.length)];
  promptEl.textContent = next;
}

function openLightbox(img) {
  if (!lightbox || !lightboxImage || !lightboxCaption) {
    return;
  }

  const caption = img.closest("figure")?.querySelector("figcaption")?.textContent || "";
  lightboxImage.src = img.src;
  lightboxImage.alt = img.alt || "Ảnh kỷ niệm";
  lightboxCaption.textContent = caption;
  lightbox.classList.add("show");
  lightbox.setAttribute("aria-hidden", "false");
}

function closeLightbox() {
  if (!lightbox || !lightboxImage) {
    return;
  }

  lightbox.classList.remove("show");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImage.src = "";
}

function bindStoryPhotoEvents() {
  document.querySelectorAll(".story-photo").forEach((img) => {
    img.addEventListener("click", () => openLightbox(img));
  });
}

function playTrack(index) {
  if (!bgmPlayer || index >= playlist.length) {
    return;
  }

  bgmPlayer.src = playlist[index];
  bgmPlayer.play().catch(() => {
    // Autoplay can still fail in some browser states.
  });
}

function playNextTrack() {
  currentTrackIndex += 1;
  if (currentTrackIndex < playlist.length) {
    playTrack(currentTrackIndex);
  }
}

function startPlaylist() {
  if (playlistStarted || !bgmPlayer || playlist.length === 0) {
    return;
  }

  playlistStarted = true;
  currentTrackIndex = 0;
  playTrack(currentTrackIndex);
}

function setupRevealObserver() {
  const revealItems = document.querySelectorAll(".reveal");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: "0px 0px -10% 0px"
    }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
}

function setupCardGlow() {
  if (!paperCard) {
    return;
  }

  paperCard.addEventListener("pointermove", (event) => {
    if (event.pointerType !== "mouse") {
      return;
    }

    const rect = paperCard.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    paperCard.style.setProperty("--cursor-x", `${Math.min(100, Math.max(0, x))}%`);
    paperCard.style.setProperty("--cursor-y", `${Math.min(100, Math.max(0, y))}%`);
  });

  paperCard.addEventListener("pointerleave", () => {
    paperCard.style.setProperty("--cursor-x", "50%");
    paperCard.style.setProperty("--cursor-y", "16%");
  });
}

function runScrollEffects() {
  if (scrollTicking) {
    return;
  }

  scrollTicking = true;
  window.requestAnimationFrame(() => {
    updateReadProgress();
    scrollTicking = false;
  });
}

function initReadingEffects() {
  if (effectsStarted) {
    return;
  }

  effectsStarted = true;
  setupRevealObserver();
  setupCardGlow();
  runScrollEffects();
}

function openLetter() {
  if (siteContent) {
    siteContent.hidden = false;
  }

  document.body.classList.remove("pre-open");

  if (introGate) {
    introGate.classList.add("closing");
    window.setTimeout(() => introGate.remove(), 360);
  }

  startPlaylist();
  window.requestAnimationFrame(initReadingEffects);
}

renderStoryBlocks();
bindStoryPhotoEvents();

if (todayEl) {
  todayEl.textContent = formatTodayVi();
}

if (nextPromptBtn) {
  nextPromptBtn.addEventListener("click", showRandomPrompt);
}

if (openLetterBtn) {
  openLetterBtn.addEventListener("click", openLetter);
}

if (bgmPlayer) {
  bgmPlayer.addEventListener("ended", playNextTrack);
  bgmPlayer.addEventListener("error", playNextTrack);
}

window.addEventListener(
  "scroll",
  () => {
    if (effectsStarted) {
      runScrollEffects();
    }
  },
  { passive: true }
);

window.addEventListener("resize", () => {
  if (effectsStarted) {
    runScrollEffects();
  }
});

if (closeLightboxBtn) {
  closeLightboxBtn.addEventListener("click", closeLightbox);
}

if (lightbox) {
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeLightbox();
  }
});
