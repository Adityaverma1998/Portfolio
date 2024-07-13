import React from 'react';
import { Animate } from 'react-move';

const AnimatedProgressProvider = ({ valueStart, valueEnd, duration, easingFunction, repeat, children }) => (
    <Animate
        start={() => ({
            value: valueStart,
        })}
        update={() => ({
            value: [valueEnd],
            timing: {
                duration: duration * 1000,
                ease: easingFunction,
                repeat,
            },
        })}
    >
        {({ value }) => children(value)}
    </Animate>
);

export default AnimatedProgressProvider;
