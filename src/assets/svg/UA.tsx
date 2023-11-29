import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <svg
      width="auto"
      height="auto"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_4306_2183)">
        <rect
          x="-5.72266"
          y="0.5"
          width="44.4444"
          height="32"
          rx="1.77778"
          fill="white"
        />
        <mask
          id="mask0_4306_2183"
          style="mask-type:luminance"
          maskUnits="userSpaceOnUse"
          x="-6"
          y="0"
          width="45"
          height="33"
        >
          <rect
            x="-5.72266"
            y="0.5"
            width="44.4444"
            height="32"
            rx="1.77778"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0_4306_2183)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M-5.72266 17.5667H38.7218V0.5H-5.72266V17.5667Z"
            fill="#156DD1"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M-5.72266 32.5002H38.7218V17.5669H-5.72266V32.5002Z"
            fill="#FFD948"
          />
        </g>
      </g>
      <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke="white" />
      <defs>
        <clipPath id="clip0_4306_2183">
          <rect x="1" y="1" width="30" height="30" rx="15" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
});
