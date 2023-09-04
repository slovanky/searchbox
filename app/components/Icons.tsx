import type { ComponentProps } from "react";

export function SearchIcon(props: ComponentProps<"svg">) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clip-path="url(#clip0_6_371)">
        <mask id="mask0_6_371" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="28">
          <rect width="28" height="28" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_6_371)">
          <path
            d="M22.8667 24.5L15.5167 17.15C14.9333 17.6167 14.2625 17.9861 13.5042 18.2583C12.7458 18.5306 11.9389 18.6667 11.0833 18.6667C8.96389 18.6667 7.17014 17.9326 5.70208 16.4646C4.23403 14.9965 3.5 13.2028 3.5 11.0833C3.5 8.96389 4.23403 7.17014 5.70208 5.70208C7.17014 4.23403 8.96389 3.5 11.0833 3.5C13.2028 3.5 14.9965 4.23403 16.4646 5.70208C17.9326 7.17014 18.6667 8.96389 18.6667 11.0833C18.6667 11.9389 18.5306 12.7458 18.2583 13.5042C17.9861 14.2625 17.6167 14.9333 17.15 15.5167L24.5 22.8667L22.8667 24.5ZM11.0833 16.3333C12.5417 16.3333 13.7812 15.8229 14.8021 14.8021C15.8229 13.7812 16.3333 12.5417 16.3333 11.0833C16.3333 9.625 15.8229 8.38542 14.8021 7.36458C13.7812 6.34375 12.5417 5.83333 11.0833 5.83333C9.625 5.83333 8.38542 6.34375 7.36458 7.36458C6.34375 8.38542 5.83333 9.625 5.83333 11.0833C5.83333 12.5417 6.34375 13.7812 7.36458 14.8021C8.38542 15.8229 9.625 16.3333 11.0833 16.3333Z"
            fill="white"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_6_371">
          <rect width="28" height="28" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function CloseIcon(props: ComponentProps<"svg">) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <mask id="mask0_6_409" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
        <rect x="0.75" y="0.75" width="22.5" height="22.5" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_6_409)">
        <path
          d="M6.75 18.5625L5.4375 17.25L10.6875 12L5.4375 6.75L6.75 5.4375L12 10.6875L17.25 5.4375L18.5625 6.75L13.3125 12L18.5625 17.25L17.25 18.5625L12 13.3125L6.75 18.5625Z"
          fill="white"
        />
      </g>
    </svg>
  );
}
