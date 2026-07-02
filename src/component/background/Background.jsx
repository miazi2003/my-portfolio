import React from 'react';

const Background = () => {
    return (
        <div>
                 <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] bg-white/5 rounded-full blur-[60px] md:blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] bg-zinc-800/20 rounded-full blur-[50px] md:blur-[100px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] md:opacity-20" />
      </div>
        </div>
    );
};

export default Background;