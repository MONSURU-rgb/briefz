"use client";

import { useTheme } from "next-themes";

export function VirtuoLogo() {
  const { resolvedTheme } = useTheme();
  return (
    <svg
      width="111"
      height="29"
      viewBox="0 0 111 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_2927_1791)">
        <path
          d="M10.9469 23.968C7.96073 26.9542 2.90329 26.9423 1.49088 22.9624C1.21435 22.1832 0.993259 21.382 0.830644 20.5645C0.166691 17.2265 0.507456 13.7667 1.80985 10.6224C3.11224 7.4782 5.31776 4.79076 8.14751 2.89998C10.9773 1.0092 14.3042 -1.45785e-07 17.7075 0C21.1108 1.45785e-07 24.4377 1.0092 27.2674 2.89998C30.0972 4.79076 32.3027 7.4782 33.6051 10.6225C34.9075 13.7667 35.2482 17.2265 34.5843 20.5645C34.4217 21.382 34.2006 22.1832 33.924 22.9624C32.5116 26.9423 27.4542 26.9542 24.468 23.968L19.8584 19.3584C19.418 18.918 19.4635 18.1917 19.585 17.5809C19.6588 17.2096 19.6209 16.8247 19.476 16.4749C19.3311 16.1251 19.0858 15.8261 18.771 15.6158C18.4562 15.4055 18.0861 15.2932 17.7075 15.2932C17.3289 15.2932 16.9588 15.4055 16.644 15.6158C16.3291 15.8261 16.0838 16.1251 15.9389 16.4749C15.794 16.8247 15.7561 17.2096 15.83 17.5809C15.9515 18.1917 15.9969 18.918 15.5565 19.3584L10.9469 23.968Z"
          fill="url(#paint0_linear_2927_1791)"
        />
        <path
          d="M52.625 20.5391L55.4375 10.3203H58.9648L54.6875 23H52.5547L52.625 20.5391ZM50.6914 10.3203L53.5156 20.5508L53.5742 23H51.4297L47.1523 10.3203H50.6914ZM64.0391 10.3203V23H60.6523V10.3203H64.0391ZM60.4414 7.01562C60.4414 6.52344 60.6133 6.11719 60.957 5.79688C61.3008 5.47656 61.7617 5.31641 62.3398 5.31641C62.9102 5.31641 63.3672 5.47656 63.7109 5.79688C64.0625 6.11719 64.2383 6.52344 64.2383 7.01562C64.2383 7.50781 64.0625 7.91406 63.7109 8.23438C63.3672 8.55469 62.9102 8.71484 62.3398 8.71484C61.7617 8.71484 61.3008 8.55469 60.957 8.23438C60.6133 7.91406 60.4414 7.50781 60.4414 7.01562ZM70.2031 13.0859V23H66.8281V10.3203H70.0039L70.2031 13.0859ZM74.0234 10.2383L73.9648 13.3672C73.8008 13.3438 73.6016 13.3242 73.3672 13.3086C73.1406 13.2852 72.9336 13.2734 72.7461 13.2734C72.2695 13.2734 71.8555 13.3359 71.5039 13.4609C71.1602 13.5781 70.8711 13.7539 70.6367 13.9883C70.4102 14.2227 70.2383 14.5078 70.1211 14.8438C70.0117 15.1797 69.9492 15.5625 69.9336 15.9922L69.2539 15.7812C69.2539 14.9609 69.3359 14.207 69.5 13.5195C69.6641 12.8242 69.9023 12.2188 70.2148 11.7031C70.5352 11.1875 70.9258 10.7891 71.3867 10.5078C71.8477 10.2266 72.375 10.0859 72.9688 10.0859C73.1562 10.0859 73.3477 10.1016 73.543 10.1328C73.7383 10.1562 73.8984 10.1914 74.0234 10.2383ZM82.4141 10.3203V12.7109H75.0312V10.3203H82.4141ZM76.8594 7.19141H80.2344V19.1797C80.2344 19.5469 80.2812 19.8281 80.375 20.0234C80.4766 20.2188 80.625 20.3555 80.8203 20.4336C81.0156 20.5039 81.2617 20.5391 81.5586 20.5391C81.7695 20.5391 81.957 20.5312 82.1211 20.5156C82.293 20.4922 82.4375 20.4688 82.5547 20.4453L82.5664 22.9297C82.2773 23.0234 81.9648 23.0977 81.6289 23.1523C81.293 23.207 80.9219 23.2344 80.5156 23.2344C79.7734 23.2344 79.125 23.1133 78.5703 22.8711C78.0234 22.6211 77.6016 22.2227 77.3047 21.6758C77.0078 21.1289 76.8594 20.4102 76.8594 19.5195V7.19141ZM91.8359 19.9648V10.3203H95.2109V23H92.0352L91.8359 19.9648ZM92.2109 17.3633L93.207 17.3398C93.207 18.1836 93.1094 18.9688 92.9141 19.6953C92.7188 20.4141 92.4258 21.0391 92.0352 21.5703C91.6445 22.0938 91.1523 22.5039 90.5586 22.8008C89.9648 23.0898 89.2656 23.2344 88.4609 23.2344C87.8438 23.2344 87.2734 23.1484 86.75 22.9766C86.2344 22.7969 85.7891 22.5195 85.4141 22.1445C85.0469 21.7617 84.7578 21.2734 84.5469 20.6797C84.3438 20.0781 84.2422 19.3555 84.2422 18.5117V10.3203H87.6172V18.5352C87.6172 18.9102 87.6602 19.2266 87.7461 19.4844C87.8398 19.7422 87.9688 19.9531 88.1328 20.1172C88.2969 20.2812 88.4883 20.3984 88.707 20.4688C88.9336 20.5391 89.1836 20.5742 89.457 20.5742C90.1523 20.5742 90.6992 20.4336 91.0977 20.1523C91.5039 19.8711 91.7891 19.4883 91.9531 19.0039C92.125 18.5117 92.2109 17.9648 92.2109 17.3633ZM97.25 16.7891V16.543C97.25 15.6133 97.3828 14.7578 97.6484 13.9766C97.9141 13.1875 98.3008 12.5039 98.8086 11.9258C99.3164 11.3477 99.9414 10.8984 100.684 10.5781C101.426 10.25 102.277 10.0859 103.238 10.0859C104.199 10.0859 105.055 10.25 105.805 10.5781C106.555 10.8984 107.184 11.3477 107.691 11.9258C108.207 12.5039 108.598 13.1875 108.863 13.9766C109.129 14.7578 109.262 15.6133 109.262 16.543V16.7891C109.262 17.7109 109.129 18.5664 108.863 19.3555C108.598 20.1367 108.207 20.8203 107.691 21.4062C107.184 21.9844 106.559 22.4336 105.816 22.7539C105.074 23.0742 104.223 23.2344 103.262 23.2344C102.301 23.2344 101.445 23.0742 100.695 22.7539C99.9531 22.4336 99.3242 21.9844 98.8086 21.4062C98.3008 20.8203 97.9141 20.1367 97.6484 19.3555C97.3828 18.5664 97.25 17.7109 97.25 16.7891ZM100.625 16.543V16.7891C100.625 17.3203 100.672 17.8164 100.766 18.2773C100.859 18.7383 101.008 19.1445 101.211 19.4961C101.422 19.8398 101.695 20.1094 102.031 20.3047C102.367 20.5 102.777 20.5977 103.262 20.5977C103.73 20.5977 104.133 20.5 104.469 20.3047C104.805 20.1094 105.074 19.8398 105.277 19.4961C105.48 19.1445 105.629 18.7383 105.723 18.2773C105.824 17.8164 105.875 17.3203 105.875 16.7891V16.543C105.875 16.0273 105.824 15.543 105.723 15.0898C105.629 14.6289 105.477 14.2227 105.266 13.8711C105.062 13.5117 104.793 13.2305 104.457 13.0273C104.121 12.8242 103.715 12.7227 103.238 12.7227C102.762 12.7227 102.355 12.8242 102.02 13.0273C101.691 13.2305 101.422 13.5117 101.211 13.8711C101.008 14.2227 100.859 14.6289 100.766 15.0898C100.672 15.543 100.625 16.0273 100.625 16.543Z"
          fill={resolvedTheme === "dark" ? "#ffffff" : "#0F172A"} 
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_2927_1791"
          x1="0.5"
          y1="12.8806"
          x2="34.9149"
          y2="12.8806"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#C026D3" />
          <stop offset="1" stopColor="#701A75" />
        </linearGradient>
        <clipPath id="clip0_2927_1791">
          <rect
            width="110"
            height="29"
            fill="white"
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
