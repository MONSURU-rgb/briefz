"use client";
import { useTheme } from "next-themes";

export function ViewoLogo() {
  const { resolvedTheme } = useTheme();
  return (
    <svg
      width="139"
      height="32"
      viewBox="0 0 139 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2923_4276)">
        <path
          d="M0.5 16C0.5 7.16344 7.66344 0 16.5 0H37.5C46.3366 0 53.5 7.16344 53.5 16V32H16.5C7.66344 32 0.5 24.8366 0.5 16Z"
          fill="#4F46E5"
        />
        <path
          d="M37.5 6H16.5C10.9772 6 6.5 10.4772 6.5 16C6.5 21.5228 10.9772 26 16.5 26H37.5C43.0228 26 47.5 21.5228 47.5 16C47.5 10.4772 43.0228 6 37.5 6Z"
          fill="#C4B5FD"
        />
        <path
          d="M16.5 21C19.2614 21 21.5 18.7614 21.5 16C21.5 13.2386 19.2614 11 16.5 11C13.7386 11 11.5 13.2386 11.5 16C11.5 18.7614 13.7386 21 16.5 21Z"
          fill="black"
        />
        <path
          d="M14.5 15C15.0523 15 15.5 14.5523 15.5 14C15.5 13.4477 15.0523 13 14.5 13C13.9477 13 13.5 13.4477 13.5 14C13.5 14.5523 13.9477 15 14.5 15Z"
          fill="white"
        />
        <path
          d="M38.5 21C41.2614 21 43.5 18.7614 43.5 16C43.5 13.2386 41.2614 11 38.5 11C35.7386 11 33.5 13.2386 33.5 16C33.5 18.7614 35.7386 21 38.5 21Z"
          fill="black"
        />
        <path
          d="M71.125 21.5391L73.9375 11.3203H77.4648L73.1875 24H71.0547L71.125 21.5391ZM69.1914 11.3203L72.0156 21.5508L72.0742 24H69.9297L65.6523 11.3203H69.1914ZM82.5391 11.3203V24H79.1523V11.3203H82.5391ZM78.9414 8.01562C78.9414 7.52344 79.1133 7.11719 79.457 6.79688C79.8008 6.47656 80.2617 6.31641 80.8398 6.31641C81.4102 6.31641 81.8672 6.47656 82.2109 6.79688C82.5625 7.11719 82.7383 7.52344 82.7383 8.01562C82.7383 8.50781 82.5625 8.91406 82.2109 9.23438C81.8672 9.55469 81.4102 9.71484 80.8398 9.71484C80.2617 9.71484 79.8008 9.55469 79.457 9.23438C79.1133 8.91406 78.9414 8.50781 78.9414 8.01562ZM91.1641 24.2344C90.1797 24.2344 89.2969 24.0781 88.5156 23.7656C87.7344 23.4453 87.0703 23.0039 86.5234 22.4414C85.9844 21.8789 85.5703 21.2266 85.2812 20.4844C84.9922 19.7344 84.8477 18.9375 84.8477 18.0938V17.625C84.8477 16.6641 84.9844 15.7852 85.2578 14.9883C85.5312 14.1914 85.9219 13.5 86.4297 12.9141C86.9453 12.3281 87.5703 11.8789 88.3047 11.5664C89.0391 11.2461 89.8672 11.0859 90.7891 11.0859C91.6875 11.0859 92.4844 11.2344 93.1797 11.5312C93.875 11.8281 94.457 12.25 94.9258 12.7969C95.4023 13.3438 95.7617 14 96.0039 14.7656C96.2461 15.5234 96.3672 16.3672 96.3672 17.2969V18.7031H86.2891V16.4531H93.0508V16.1953C93.0508 15.7266 92.9648 15.3086 92.793 14.9414C92.6289 14.5664 92.3789 14.2695 92.043 14.0508C91.707 13.832 91.2773 13.7227 90.7539 13.7227C90.3086 13.7227 89.9258 13.8203 89.6055 14.0156C89.2852 14.2109 89.0234 14.4844 88.8203 14.8359C88.625 15.1875 88.4766 15.6016 88.375 16.0781C88.2812 16.5469 88.2344 17.0625 88.2344 17.625V18.0938C88.2344 18.6016 88.3047 19.0703 88.4453 19.5C88.5938 19.9297 88.8008 20.3008 89.0664 20.6133C89.3398 20.9258 89.668 21.168 90.0508 21.3398C90.4414 21.5117 90.8828 21.5977 91.375 21.5977C91.9844 21.5977 92.5508 21.4805 93.0742 21.2461C93.6055 21.0039 94.0625 20.6406 94.4453 20.1562L96.0859 21.9375C95.8203 22.3203 95.457 22.6875 94.9961 23.0391C94.543 23.3906 93.9961 23.6797 93.3555 23.9062C92.7148 24.125 91.9844 24.2344 91.1641 24.2344ZM101.91 20.7188L104.547 11.3203H106.691L106 15.0117L103.363 24H101.57L101.91 20.7188ZM100.574 11.3203L102.461 20.707L102.637 24H100.527L97.3164 11.3203H100.574ZM109.105 20.5547L110.945 11.3203H114.215L111.004 24H108.906L109.105 20.5547ZM106.984 11.3203L109.609 20.6484L109.973 24H108.168L105.531 15.0234L104.863 11.3203H106.984ZM119.477 11.3203V24H116.09V11.3203H119.477ZM115.879 8.01562C115.879 7.52344 116.051 7.11719 116.395 6.79688C116.738 6.47656 117.199 6.31641 117.777 6.31641C118.348 6.31641 118.805 6.47656 119.148 6.79688C119.5 7.11719 119.676 7.52344 119.676 8.01562C119.676 8.50781 119.5 8.91406 119.148 9.23438C118.805 9.55469 118.348 9.71484 117.777 9.71484C117.199 9.71484 116.738 9.55469 116.395 9.23438C116.051 8.91406 115.879 8.50781 115.879 8.01562ZM121.727 17.7891V17.543C121.727 16.6133 121.859 15.7578 122.125 14.9766C122.391 14.1875 122.777 13.5039 123.285 12.9258C123.793 12.3477 124.418 11.8984 125.16 11.5781C125.902 11.25 126.754 11.0859 127.715 11.0859C128.676 11.0859 129.531 11.25 130.281 11.5781C131.031 11.8984 131.66 12.3477 132.168 12.9258C132.684 13.5039 133.074 14.1875 133.34 14.9766C133.605 15.7578 133.738 16.6133 133.738 17.543V17.7891C133.738 18.7109 133.605 19.5664 133.34 20.3555C133.074 21.1367 132.684 21.8203 132.168 22.4062C131.66 22.9844 131.035 23.4336 130.293 23.7539C129.551 24.0742 128.699 24.2344 127.738 24.2344C126.777 24.2344 125.922 24.0742 125.172 23.7539C124.43 23.4336 123.801 22.9844 123.285 22.4062C122.777 21.8203 122.391 21.1367 122.125 20.3555C121.859 19.5664 121.727 18.7109 121.727 17.7891ZM125.102 17.543V17.7891C125.102 18.3203 125.148 18.8164 125.242 19.2773C125.336 19.7383 125.484 20.1445 125.688 20.4961C125.898 20.8398 126.172 21.1094 126.508 21.3047C126.844 21.5 127.254 21.5977 127.738 21.5977C128.207 21.5977 128.609 21.5 128.945 21.3047C129.281 21.1094 129.551 20.8398 129.754 20.4961C129.957 20.1445 130.105 19.7383 130.199 19.2773C130.301 18.8164 130.352 18.3203 130.352 17.7891V17.543C130.352 17.0273 130.301 16.543 130.199 16.0898C130.105 15.6289 129.953 15.2227 129.742 14.8711C129.539 14.5117 129.27 14.2305 128.934 14.0273C128.598 13.8242 128.191 13.7227 127.715 13.7227C127.238 13.7227 126.832 13.8242 126.496 14.0273C126.168 14.2305 125.898 14.5117 125.688 14.8711C125.484 15.2227 125.336 15.6289 125.242 16.0898C125.148 16.543 125.102 17.0273 125.102 17.543Z"
          fill={resolvedTheme === "dark" ? "#ffffff" : "#475569"}
        />
        <path
          d="M36.5 15C37.0523 15 37.5 14.5523 37.5 14C37.5 13.4477 37.0523 13 36.5 13C35.9477 13 35.5 13.4477 35.5 14C35.5 14.5523 35.9477 15 36.5 15Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_2923_4276">
          <rect
            width="138"
            height="32"
            fill="white"
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}