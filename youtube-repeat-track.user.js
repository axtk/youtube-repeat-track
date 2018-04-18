// ==UserScript==
// @name YouTube Repeat Track
// @namespace axtk.me
// @include https://www.youtube.com/watch*
// ==/UserScript==

let container = document.querySelector('#movie_player .ytp-left-controls');
let button = document.createElement('button');

button.className = 'ytp-play-button ytp-button';
button.innerHTML = `
  <svg width="100%" height="100%" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <g fill="#fff" stroke="#fff" stroke-linecap="round" stroke-width="0.7">
      <path d="M24.715,14.77812l1.39-1.22c0.35-0.31,0.38-0.86,0.07-1.21c-0.31-0.35-0.85-0.39-1.21-0.08l-3.03,2.69h-0.01 l-0.02,0.02c-0.19,0.16-0.29,0.4-0.29,0.64c0,0.25,0.1,0.48,0.29,0.64l0.41,0.36l2.65,2.35c0.36,0.31,0.9,0.28,1.21-0.07 c0.15-0.17,0.22-0.37,0.22-0.57c0-0.24-0.1-0.47-0.29-0.64l-1.35-1.2"/>
      <path d="M24.755,16.48812c4.93015,0.39358,8.78753,4.67059,8.50546,9.76435 c-0.26298,4.74895-4.26504,8.63446-9.0198,8.75271c-5.2274,0.13-9.51565-4.07873-9.51565-9.27706 c0-2.44677,0.94786-4.66863,2.50521-6.32001c0.30418-0.32255,0.27353-0.83648-0.04255-1.14738l0,0 c-0.35466-0.34884-0.92293-0.32094-1.25977,0.04514c-2.14517,2.33131-3.29932,5.58136-2.77887,9.09101 c0.71732,4.83732,4.72521,8.69009,9.5845,9.23923C29.35022,37.38385,34.975,32.20764,34.975,25.72812 c0-5.81-4.54-10.58-10.26-10.95"/>
      <circle cx="24" cy="26" r="2"/>
    </g>
  </svg>
`;

button.addEventListener('click', () => {
  let video = document.querySelector('#movie_player video');
  let looped = video ? Boolean(video.getAttribute('loop')) : false;
  
  let g = button.querySelector('svg > g'), color = looped ? 'white' : 'red';
  g.setAttribute('fill', color);
  g.setAttribute('stroke', color);
  
  if (video) {
    if (looped) video.removeAttribute('loop');
    else video.setAttribute('loop', 'loop');
  }
});

if (container) container.appendChild(button);