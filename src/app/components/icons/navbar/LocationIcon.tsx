import cn from "classnames";
export default function LocationIcon({ className }: { className?: string }) {
  return (
    <svg
      // width="38"
      // height="44"
      viewBox="0 0 38 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn({
        // if classnames include height and width, then use them, otherwise use the default
        [className ?? ""]: className,
        "h-11 w-11": !className?.includes("h-") && !className?.includes("w-"),
      })}
    >
      <path
        id="Vector"
        d="M32.2053 32.5777L29.6335 35.1213C27.7377 36.9803 25.2785 39.3723 22.2538 42.2973C21.3448 43.1763 20.1297 43.6677 18.8652 43.6677C17.6006 43.6677 16.3856 43.1763 15.4765 42.2973L7.91268 34.9393C6.95934 34.0055 6.16634 33.219 5.52501 32.5777C2.8868 29.9393 1.0902 26.5778 0.362398 22.9184C-0.365409 19.2589 0.00826389 15.4658 1.43616 12.0188C2.86406 8.57168 5.28206 5.62542 8.38439 3.55255C11.4867 1.47968 15.1341 0.373291 18.8652 0.373291C22.5963 0.373291 26.2436 1.47968 29.346 3.55255C32.4483 5.62542 34.8663 8.57168 36.2942 12.0188C37.7221 15.4658 38.0958 19.2589 37.368 22.9184C36.6401 26.5778 34.8435 29.9393 32.2053 32.5777ZM24.2818 19.8333C24.2818 18.3967 23.7112 17.019 22.6953 16.0032C21.6795 14.9873 20.3018 14.4167 18.8652 14.4167C17.4286 14.4167 16.0508 14.9873 15.035 16.0032C14.0192 17.019 13.4485 18.3967 13.4485 19.8333C13.4485 21.2699 14.0192 22.6477 15.035 23.6635C16.0508 24.6793 17.4286 25.25 18.8652 25.25C20.3018 25.25 21.6795 24.6793 22.6953 23.6635C23.7112 22.6477 24.2818 21.2699 24.2818 19.8333Z"
        fill="black"
      />
    </svg>
  );
}