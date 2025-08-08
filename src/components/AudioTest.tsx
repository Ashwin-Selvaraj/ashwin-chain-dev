import { useAudio } from '@/hooks/use-audio';

const AudioTest = () => {
  const { play: playDecoding, isReady: decodingReady, hasUserInteracted } = useAudio({
    src: '/decoding-67661.mp3',
    volume: 0.5,
    loop: false
  });

  const { play: playTarget, isReady: targetReady } = useAudio({
    src: '/Target-locked.mp3',
    volume: 0.5,
    loop: false
  });

  return (
    <div className="fixed top-4 right-4 bg-black/80 text-white p-4 rounded-lg z-50">
      <h3 className="text-lg font-bold mb-2">Audio Test</h3>
      <div className="space-y-2 text-sm">
        <div>Decoding Audio Ready: {decodingReady ? 'Yes' : 'No'}</div>
        <div>Target Audio Ready: {targetReady ? 'Yes' : 'No'}</div>
        <div>User Interacted: {hasUserInteracted ? 'Yes' : 'No'}</div>
        <button 
          onClick={() => {
            console.log('Testing decoding audio');
            playDecoding();
          }}
          className="bg-blue-500 px-3 py-1 rounded text-xs"
        >
          Test Decoding Audio
        </button>
        <button 
          onClick={() => {
            console.log('Testing target audio');
            playTarget();
          }}
          className="bg-green-500 px-3 py-1 rounded text-xs ml-2"
        >
          Test Target Audio
        </button>
      </div>
    </div>
  );
};

export default AudioTest; 