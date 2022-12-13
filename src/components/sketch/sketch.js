const sketch = (
  /** @type {import("p5").p5InstanceExtensions} */
  p5
) => {
  const text = `To be, or not to be: that is the question:
Whether 'tis nobler in the mind to suffer
The slings and arrows of outrageous fortune,
Or to take arms against a sea of troubles
And by opposing end them? To die: to sleep;
No more; and by a sleep to say we end
The heart-ache and the thousand natural shocks
That flesh is heir to, 'tis a consummation
Devoutly to be wish'd. To die, to sleep;
To sleep: perchance to dream: ay, there's the rub;
For in that sleep of death what dreams may come
When we have shuffled off this mortal coil,
Must give us pause: there's the respect
That makes calamity of so long life.`;
  const order = 6;
  const grams = {};
  let button;
  let output;

  const markov = text => {
    let currentGram = text.substring(0, order);
    let result = currentGram;

    while (true) {
      let possibilites = grams[currentGram];
      let next = p5.random(possibilites);

      if (next === undefined) break;

      currentGram = currentGram.substring(1, order) + next;

      result += next;
    }

    output.html(result);
  };

  p5.setup = () => {
    p5.noCanvas();

    for (let i = 0; i <= text.length - order; i++) {
      let ngram = [];

      for (let j = 0; j < order; j++) ngram.push(text[i + j]);

      ngram = ngram.join("");

      if (!grams[ngram]) grams[ngram] = [];

      const nextChar = text[i + order];
      if (nextChar) grams[ngram].push(nextChar);
    }

    output = p5.createP();

    button = p5.createButton("generate");
    button.mousePressed(() => markov(text));
  };
};

export default sketch;
