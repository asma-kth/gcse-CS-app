import type { Lesson } from '../types';
import Blocks from '../components/Blocks';
import ByteSays from '../components/ByteSays';

interface Props {
  lesson: Lesson;
  done: boolean;
  onComplete: () => void;
  onBack: () => void;
  onFact: (i: number) => void;
}

export default function LessonScreen({ lesson, done, onComplete, onBack, onFact }: Props) {
  return (
    <div>
      <div className="card flat">
        <h1 style={{ fontSize: 20 }}>{lesson.title}</h1>
        <div className="tiny muted">{`About ${lesson.minutes} minutes of reading and playing`}</div>
      </div>

      <Blocks blocks={lesson.blocks} />

      <ByteSays fact onFactShown={onFact} />

      <div className="card center">
        {done ? (
          <>
            <div style={{ fontSize: 34 }}>✅</div>
            <p className="muted">You have already cleared this room. Reading it again costs nothing and helps a lot.</p>
            <button className="btn wide outline" onClick={onBack}>
              Back to the floor
            </button>
          </>
        ) : (
          <>
            <p className="muted">Finished reading? Claim the room and take the 30 XP.</p>
            <button
              className="btn wide"
              onClick={() => {
                onComplete();
                onBack();
              }}
            >
              Clear this room and collect 30 XP
            </button>
          </>
        )}
      </div>
    </div>
  );
}
