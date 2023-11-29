import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="user">
        <rect x="0.5" y="0.5" width="25" height="25" rx="12.5" fill="#323232" />
        <rect
          x="0.5"
          y="0.5"
          width="25"
          height="25"
          rx="12.5"
          stroke="url(#paint0_linear_1855_11207)"
        />
        <path
          id="Icon"
          d="M13 14.5C15.0711 14.5 16.75 12.8211 16.75 10.75C16.75 8.67893 15.0711 7 13 7C10.9289 7 9.25 8.67893 9.25 10.75C9.25 12.8211 10.9289 14.5 13 14.5ZM13 14.5C9.68629 14.5 7 16.5147 7 19M13 14.5C16.3137 14.5 19 16.5147 19 19"
          stroke="url(#paint1_linear_1855_11207)"
          stroke-linecap="round"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_1855_11207"
          x1="13"
          y1="0"
          x2="13"
          y2="26"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0.2" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1855_11207"
          x1="13"
          y1="7"
          x2="13"
          y2="19"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0.2" />
        </linearGradient>
      </defs>
    </svg>
  );
});
