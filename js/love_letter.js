const openBtn = document.getElementById("openEnvelope");
const closeBtn = document.getElementById("closeLetter");
const envelope = document.getElementById("envelope");
const letter = document.getElementById("loveLetter");
const typedText = document.getElementById("typedText");

const letterContent = `
As this new year begins, I find myself thinking about us about how far we’ve come and how close we already are, even when distance tries to say otherwise.

We’ve shared more than five years of friendship and six months of love, and honestly, it feels like our story was growing long before we ever named it. We were friends first and that friendship is still the most beautiful part of us.

Right now, there are almost 200 kilometers between us, but my heart doesn’t feel that distance at all. You live in my thoughts, my prayers, and the quiet moments of my day. Our hearts are already together only our hands are waiting to meet.

2026 feels different.
It feels hopeful.
It feels like a beginning we’ve been preparing for all along.

IN SHAA ALLAH, this is the year we complete our marriage, the year distance finally becomes zero, and the year our “someday” becomes everyday life.

I don’t just dream of living with you I dream of living as your friend, your partner, your safe place, through every joy and every challenge.

I pray that Allah keeps our love gentle, our friendship strong, and our hearts patient. I pray that we grow old still choosing each other, and that our journey continues together in Jannatul Ferdous, IN SHAA ALLAH.

Please pray for us.
Pray for our love.
Pray that what we have stays pure, strong, and protected.

Happy New Year, my Premii, my Bibijan 😘💖
No matter the distance today, my heart is already home with you.
`;

let index = 0;

function typeLetter() {
  if (index < letterContent.length) {
    typedText.innerHTML += letterContent.charAt(index);
    index++;
    setTimeout(typeLetter, 30); // typing speed
  }
}

openBtn.addEventListener("click", () => {
  envelope.classList.add("active");
  typedText.innerHTML = "";
  index = 0;

  setTimeout(() => {
    letter.style.display = "block";
    typeLetter();
  }, 600);
});

closeBtn.addEventListener("click", () => {
  letter.style.display = "none";
  envelope.classList.remove("active");
});
