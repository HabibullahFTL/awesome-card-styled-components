import React from 'react';

const Title = ({text,className}) => {
    return (
        <span className={className}>
            {text}
        </span>
    );
};

export default Title;