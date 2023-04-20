import { useTheme as useNextraTheme } from "next-themes";

const Logo: React.FC = () => {
  const { resolvedTheme } = useNextraTheme();
  return (
    <span>
      <svg
        width="auto"
        height="20"
        viewBox="0 0 459 105"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.514875 10.573H17.4209V59H27.5329V10.573H44.4389V1.251H0.514875V10.573ZM41.8208 39.408C41.8208 51.574 50.5898 59.948 62.6768 59.948C74.7638 59.948 83.5328 51.574 83.5328 39.408C83.5328 27.242 74.7638 18.868 62.6768 18.868C50.5898 18.868 41.8208 27.242 41.8208 39.408ZM51.4588 39.408C51.4588 32.298 56.0408 27.479 62.6768 27.479C69.3128 27.479 73.8948 32.298 73.8948 39.408C73.8948 46.518 69.3128 51.337 62.6768 51.337C56.0408 51.337 51.4588 46.518 51.4588 39.408ZM100.81 59V37.986C100.81 31.666 104.444 27.558 110.369 27.558C115.346 27.558 118.585 30.718 118.585 37.275V59H128.223V34.984C128.223 24.872 123.167 18.789 113.371 18.789C108.078 18.789 103.338 21.08 100.889 25.03L100.099 19.974H91.1723V59H100.81ZM142.512 12.153C145.672 12.153 148.279 9.546 148.279 6.307C148.279 3.068 145.672 0.539999 142.512 0.539999C139.194 0.539999 136.587 3.068 136.587 6.307C136.587 9.546 139.194 12.153 142.512 12.153ZM137.693 59H147.331V19.974H137.693V59ZM155.077 38.618C155.077 49.915 162.345 58.21 173.405 58.21C179.014 58.21 183.833 55.919 186.282 52.285V58.763C186.282 65.241 182.016 69.428 175.38 69.428C169.455 69.428 165.584 66.426 164.952 61.37H155.314C156.499 71.798 164.162 78.197 175.38 78.197C188.02 78.197 195.841 70.06 195.841 57.025V19.974H186.914L186.361 25.346C184.07 21.159 179.488 18.71 173.642 18.71C162.503 18.71 155.077 27.242 155.077 38.618ZM164.794 38.381C164.794 31.982 168.902 27.163 175.301 27.163C182.016 27.163 186.045 31.745 186.045 38.381C186.045 45.175 181.937 49.836 175.301 49.836C168.981 49.836 164.794 44.938 164.794 38.381ZM215.453 59V37.67C215.453 31.824 219.008 27.558 225.091 27.558C229.989 27.558 233.228 30.718 233.228 37.275V59H242.866V34.984C242.866 24.872 237.81 18.789 228.172 18.789C222.563 18.789 217.981 21.238 215.532 25.03V0.223999H205.815V59H215.453ZM265.607 59V28.032H273.191V19.974H265.607V7.808H255.969V19.974H248.464V28.032H255.969V59H265.607ZM324.729 39.092C336.263 39.092 343.847 31.271 343.847 20.132C343.847 8.835 336.342 1.251 324.729 1.251H301.898V59H312.01V39.092H324.729ZM322.754 10.257C329.469 10.257 333.261 13.733 333.261 20.053C333.261 26.373 329.548 30.086 322.596 30.086H312.01V10.257H322.754ZM361.001 60.027C367.084 60.027 372.377 57.262 374.036 53.233L374.747 59H383.2V35.3C383.2 24.477 376.722 18.789 366.215 18.789C355.629 18.789 348.677 24.319 348.677 32.772H356.893C356.893 28.664 360.053 26.294 365.741 26.294C370.639 26.294 373.799 28.427 373.799 33.72V34.589L362.107 35.458C352.864 36.169 347.65 40.672 347.65 47.861C347.65 55.208 352.706 60.027 361.001 60.027ZM364.161 52.759C359.816 52.759 357.446 51.021 357.446 47.466C357.446 44.306 359.737 42.331 365.741 41.778L373.878 41.146V43.2C373.878 49.204 370.086 52.759 364.161 52.759ZM389.666 47.15C389.666 54.813 395.828 60.027 405.545 60.027C415.183 60.027 421.898 55.129 421.898 47.229C421.898 41.225 418.58 38.223 412.023 36.722L404.992 35.063C401.674 34.273 399.936 32.851 399.936 30.639C399.936 27.716 402.148 25.978 405.94 25.978C409.653 25.978 411.865 28.111 411.944 31.429H421.108C421.029 23.845 415.104 18.789 406.335 18.789C397.329 18.789 390.851 23.371 390.851 31.034C390.851 37.275 394.248 40.593 401.279 42.173L408.31 43.832C411.786 44.622 412.813 46.044 412.813 48.019C412.813 50.863 410.364 52.68 405.861 52.68C401.437 52.68 398.909 50.547 398.83 47.15H389.666ZM426.235 47.15C426.235 54.813 432.397 60.027 442.114 60.027C451.752 60.027 458.467 55.129 458.467 47.229C458.467 41.225 455.149 38.223 448.592 36.722L441.561 35.063C438.243 34.273 436.505 32.851 436.505 30.639C436.505 27.716 438.717 25.978 442.509 25.978C446.222 25.978 448.434 28.111 448.513 31.429H457.677C457.598 23.845 451.673 18.789 442.904 18.789C433.898 18.789 427.42 23.371 427.42 31.034C427.42 37.275 430.817 40.593 437.848 42.173L444.879 43.832C448.355 44.622 449.382 46.044 449.382 48.019C449.382 50.863 446.933 52.68 442.43 52.68C438.006 52.68 435.478 50.547 435.399 47.15H426.235Z"
          fill={resolvedTheme === "dark" ? "#fff" : "#111315"}
        />
      </svg>
    </span>
  );
};

export default Logo;
