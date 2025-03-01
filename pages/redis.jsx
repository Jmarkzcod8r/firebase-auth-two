import React, { useState, useRef, useEffect } from 'react';

const JigsawPuzzle = () => {
  const [image, setImage] = useState(null);
  const [puzzlePieces, setPuzzlePieces] = useState([]);
  const [framePieces, setFramePieces] = useState(Array(9).fill(null));
  const [originalPieces, setOriginalPieces] = useState([]); // Store the original pieces in order
  const [isCompleted, setIsCompleted] = useState(false); // Track if the puzzle is completed
  const [pieceSize, setPieceSize] = useState({ width: 120, height: 120 }); // Slightly larger than 100x100
  const canvasRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.src = e.target.result;
        img.onload = () => {
          setImage(img);
          createPuzzlePieces(img);
        };
      };
      reader.readAsDataURL(file);
    }
    handleReset()
  };

  const createPuzzlePieces = (img) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const pieceWidth = img.width / 3;
    const pieceHeight = img.height / 3;

    // Scale the piece size to be slightly larger than 100x100 but proportional to the image
    const scaleFactor = Math.min(120 / pieceWidth, 120 / pieceHeight);
    const scaledWidth = pieceWidth * scaleFactor;
    const scaledHeight = pieceHeight * scaleFactor;

    setPieceSize({ width: scaledWidth, height: scaledHeight });

    const pieces = [];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const pieceCanvas = document.createElement('canvas');
        pieceCanvas.width = pieceWidth;
        pieceCanvas.height = pieceHeight;
        const pieceCtx = pieceCanvas.getContext('2d');
        pieceCtx.drawImage(
          img,
          j * pieceWidth,
          i * pieceHeight,
          pieceWidth,
          pieceHeight,
          0,
          0,
          pieceWidth,
          pieceHeight
        );
        pieces.push(pieceCanvas.toDataURL());
      }
    }

    // Store the original pieces in order
    setOriginalPieces([...pieces]);

    // Shuffle the pieces
    const shuffledPieces = pieces.sort(() => Math.random() - 0.5);
    setPuzzlePieces(shuffledPieces);
  };

  const handleDragStart = (event, index) => {
    event.dataTransfer.setData('text/plain', index);
  };

  const handleDrop = (event, frameIndex) => {
    event.preventDefault();
    const pieceIndex = event.dataTransfer.getData('text/plain');
    const newFramePieces = [...framePieces];
    newFramePieces[frameIndex] = puzzlePieces[pieceIndex];
    setFramePieces(newFramePieces);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  // Check if the puzzle is completed
  useEffect(() => {
    if (framePieces.every((piece, index) => piece === originalPieces[index])) {
      setIsCompleted(true);
    } else {
      setIsCompleted(false);
    }
  }, [framePieces, originalPieces]);

  // Reset the frame
  const handleReset = () => {
    setFramePieces(Array(9).fill(null)); // Reset the frame to its initial state
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Jigsaw Puzzle</h1>
      {/* File Input */}
      <input type="file" accept="image/*" onChange={handleImageUpload} />

      {/* Original Image (Upper Row) */}
      {image && (
        <div style={{ marginTop: '20px' }}>
          <h3>Original Image</h3>
          <img
            src={image.src}
            alt="Original Puzzle"
            style={{
              width: `${pieceSize.width * 5}px`,
              height: `${pieceSize.height * 5}px`,

            }}
          />
        </div>
      )}

      {/* Draggable Pieces and Puzzle Frame (Lower Row) */}
      {image && (
        <div style={{ display: 'flex', marginTop: '20px' }}>
          {/* Draggable Puzzle Pieces */}
          <div style={{ marginRight: '0px' }}>
            <h3>Puzzle Pieces</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', width: `${pieceSize.width * 3}px` }}>
              {puzzlePieces.map((piece, index) => (
                <img
                  key={index}
                  src={piece}
                  alt={`Puzzle Piece ${index}`}
                  draggable
                  onDragStart={(event) => handleDragStart(event, index)}
                  style={{
                    width: `${pieceSize.width}px`,
                    height: `${pieceSize.height}px`,
                    margin: '5px',
                  }}
                />
              ))}
            </div>
          </div>

          {/* Puzzle Frame */}
          <div>
            <h3>Puzzle Frame</h3>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '5px',
                width: `${pieceSize.width * 3}px`,
                height: `${pieceSize.height * 3}px`,

              }}
            >
              {framePieces.map((piece, index) => (
                <div
                  key={index}
                  onDrop={(event) => handleDrop(event, index)}
                  onDragOver={handleDragOver}
                  style={{
                    width: `${pieceSize.width}px`,
                    height: `${pieceSize.height}px`,
                    border: '1px solid gray',
                    backgroundImage: piece ? `url(${piece})` : 'none',
                    backgroundSize: 'cover',
                  }}
                ></div>
              ))}
            </div>
            {/* Reset Button */}
            <button
              onClick={handleReset}
              style={{
                marginTop: '10px',
                padding: '10px 20px',
                fontSize: '16px',
                cursor: 'pointer',
              }}
            >
              Reset Frame
            </button>
          </div>
        </div>
      )}

      {/* Pop-up for puzzle completion */}
      {isCompleted && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white',
            padding: '20px',
            border: '2px solid black',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
            zIndex: 1000,
          }}
        >
          <h2>Congratulations! Puzzle Completed!</h2>
          <button onClick={() => setIsCompleted(false)}>Close</button>
        </div>
      )}

      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </div>
  );
};

export default JigsawPuzzle;
