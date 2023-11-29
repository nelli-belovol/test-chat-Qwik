import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 1L11 21M11 21L21 11M11 21L1 11"
        stroke="#767676"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
});
