import { useState, useRef, useEffect } from 'react';

const phrase = `Blessed is the one
who does not walk in step with the wicked
or stand in the way that sinners take
or sit in the company of mockers,
but whose delight is in the law of the Lord,
and who meditates on his law day and night.
That person is like a tree planted by streams of water,
which yields its fruit in season
and whose leaf does not wither—
whatever they do prospers.
Not so the wicked!
They are like chaff
that the wind blows away.
Therefore the wicked will not stand in the judgment,
nor sinners in the assembly of the righteous.
For the Lord watches over the way of the righteous,
but the way of the wicked leads to destruction.`;

function getRandomInts(max, count) {
  const indices = new Set();
  while (indices.size < count) {
    indices.add(Math.floor(Math.random() * max));
  }
  return Array.from(indices);
}

function removeWords(phrase, count) {
  const words = phrase.split(' ');
  const indices = getRandomInts(words.length, count);
  const removedWords = indices.map(index => words[index]);
  indices.forEach(index => words[index] = '_____');
  return { newPhrase: words.join(' '), removedWords };
}

export default function Home() {
  const [started, setStarted] = useState(false);
  const [inputs, setInputs] = useState(Array(17).fill(''));
  const [removedWords, setRemovedWords] = useState([]);
  const [displayPhrase, setDisplayPhrase] = useState('');
  const [score, setScore] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  const inputRefs = Array.from({ length: 17 }, () => useRef(null));

  const start = () => {
    const { newPhrase, removedWords } = removeWords(phrase, 17);
    setDisplayPhrase(newPhrase);
    setRemovedWords(removedWords);
    setStarted(true);
    setStartTime(new Date());
  };

  useEffect(() => {
    if (started) {
      inputRefs[0].current.focus();
    }
  }, [started]);

  const handleChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  const handleKeyPress = (e, index) => {
    if (e.key === 'Enter') {
      if (index < inputs.length - 1) {
        inputRefs[index + 1].current.focus();
      } else {
        handleSubmit();
      }
    }
  };

  const handleSubmit = () => {
    setEndTime(new Date());
    const duration = ((new Date()) - startTime) / 1000;
    const processedInputs = inputs.map(input => input.trim() === '' ? ' ' : input.trim().toLowerCase());
    const correctCount = processedInputs.reduce((count, input, index) => {
      console.log(`User Input: ${input}, Correct Word: ${removedWords[index].toLowerCase()}`);
      return count + (input === removedWords[index].toLowerCase() ? 1 : 0);
    }, 0);
    setScore(correctCount);
    alert(`Score: ${correctCount}/17, Time spent: ${duration.toFixed(2)} seconds`);
    setStarted(false);
    setInputs(Array(17).fill(''));
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Fill in the Blank</h1>
      {started ? (
        <>
          <p>{displayPhrase}</p>
          {inputs.map((input, index) => (
            <div key={index}>
              <input
                ref={inputRefs[index]}
                type="text"
                value={input}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyPress={(e) => handleKeyPress(e, index)}
                placeholder={`Type missing word ${index + 1}`}
              />
              <br /><br />
            </div>
          ))}
          <button onClick={handleSubmit}>Submit</button>
        </>
      ) : (
        <button onClick={start}>Start</button>
      )}
    </div>
  );
}
