'use client';

import { TypeAnimation } from 'react-type-animation';

export function AnimatedHeading() {
  return (
    <div className="flex flex-col items-center text-center lg:items-start lg:text-left px-4 sm:px-0">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground w-full">
        <div className="mb-2 sm:mb-4">Your Success Begins Here – Learn</div>
        <div className="flex items-center gap-2 min-h-[1.2em] justify-center lg:justify-start">
          <span className="text-primary">
            <TypeAnimation
              sequence={[
                'Typing',
                2000,
                'Spoken English',
                2000,
                'Computer Basics',
                2000,
                'Cybersecurity',
                2000,
                'Math',
                2000,
                'Physics',
                2000,
                'Chemistry',
                2000,
                'DCA',
                2000,
                'ADCA',
                2000,
                'PGDCA',
                2000,
                'Python',
                2000,
                'JAVA',
                2000,
                'CCC',
                2000,
                'WEB DESIGNING',
                2000,
                'TALLY',
                2000,
                'WORDPRESS',
                2000,
                'TYPING',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="inline-block"
            />
          </span>
          <span className="text-primary">!</span>
        </div>
      </h1>
    </div>
  );
} 