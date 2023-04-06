/* eslint-disable react-hooks/rules-of-hooks */
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";
import urlcat from "urlcat";
import { useTheme as useNextraTheme } from "next-themes";
import { useTheme } from "@tonightpass/kitchen";

const logo = () => {
  const { resolvedTheme } = useNextraTheme();
  return (
    <span>
      <svg
        width="389"
        height="30"
        viewBox="0 0 389 105"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="105" height="105" rx="10.5" fill="#B024F1" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.9471 24.92C19.5251 21.233 20.06 17.8219 19.7657 16.1058C19.1501 12.5166 34.4449 24.0798 38.2977 32.9088C40.1266 36.9106 39.5578 41.5824 36.4949 44.627C32.4664 48.6314 25.649 48.3045 21.2679 43.897C18.6334 41.2467 17.4797 37.7245 17.8544 34.4665C17.8774 31.7419 18.4296 28.2204 18.9471 24.92ZM35.7599 49.0015C36.8088 48.4699 37.7861 47.7727 38.6557 46.9083C39.3606 46.2076 39.9561 45.4354 40.4428 44.6111C40.6076 44.7241 40.7643 44.8537 40.9107 45.0001L77.7818 81.8712C79.0652 83.1546 79.0652 85.2355 77.7817 86.5189C76.4983 87.8023 74.4175 87.8023 73.1341 86.5189L36.263 49.6478C36.0646 49.4494 35.8969 49.232 35.7599 49.0015ZM72.6806 18.1264C73.4354 17.3543 74.672 17.3366 75.4487 18.0866C76.2287 18.8399 76.2504 20.083 75.4971 20.8631L60.6886 36.1978L65.289 40.7749L79.9831 25.5587C80.7341 24.781 81.9734 24.7593 82.7511 25.5104C83.5288 26.2614 83.5504 27.5006 82.7994 28.2783L68.0611 43.5403L72.6317 48.1109L87.9256 33.3418C88.7038 32.5903 89.9438 32.6119 90.6953 33.3901C91.4462 34.1676 91.4253 35.4063 90.6488 36.1581L75.416 50.9055C74.2612 52.059 72.8907 52.9742 71.3827 53.5988C69.8724 54.2244 68.2537 54.5464 66.6189 54.5464C64.9842 54.5464 63.3655 54.2244 61.8552 53.5988C61.3725 53.3989 60.9039 53.1692 60.452 52.9114L56.7735 56.5899L52.1258 51.9422L55.8047 48.2634C55.5473 47.812 55.3179 47.3439 55.1183 46.8619C54.4927 45.3516 54.1707 43.7328 54.1707 42.0981C54.1707 40.4634 54.4927 38.8447 55.1183 37.3344C55.7312 35.8546 56.6196 34.5457 57.7425 33.4062L57.7423 33.4058L72.6806 18.1264ZM43.3627 60.7052L48.0104 65.3529L27.3047 86.0586C26.0213 87.3421 23.9404 87.3421 22.657 86.0586C21.3736 84.7752 21.3736 82.6944 22.657 81.411L43.3627 60.7052Z"
          fill="white"
        />
        <path
          d="M139.542 81.3241V70.8354L145.22 64.9208L155.394 81.3241H166.434L151.924 57.8232L166.75 42.3663H154.684L139.542 58.6907V22.6508H130V81.3241H139.542Z"
          fill={resolvedTheme === "dark" ? "#fff" : "#111315"}
        />
        <path
          d="M177.087 34.5589C180.242 34.5589 182.844 31.9565 182.844 28.7231C182.844 25.4898 180.242 22.9662 177.087 22.9662C173.775 22.9662 171.173 25.4898 171.173 28.7231C171.173 31.9565 173.775 34.5589 177.087 34.5589ZM172.277 81.3241H181.898V42.3663H172.277V81.3241Z"
          fill={resolvedTheme === "dark" ? "#fff" : "#111315"}
        />
        <path
          d="M205.087 81.3241V50.4102H212.658V42.3663H205.087V30.2215H195.466V42.3663H187.974V50.4102H195.466V81.3241H205.087Z"
          fill={resolvedTheme === "dark" ? "#fff" : "#111315"}
        />
        <path
          d="M215.967 61.7663C215.967 74.1476 223.695 82.3493 235.525 82.3493C245.698 82.3493 253.269 76.1192 254.452 67.0501H244.752C243.726 71.3086 240.335 73.6745 235.525 73.6745C229.374 73.6745 225.588 69.1005 225.588 61.7663C225.588 54.4321 229.689 49.7793 235.84 49.7793C240.414 49.7793 243.648 52.0663 244.752 56.4826H254.373C253.348 47.098 246.092 41.1833 235.446 41.1833C223.932 41.1833 215.967 49.7004 215.967 61.7663Z"
          fill={resolvedTheme === "dark" ? "#fff" : "#111315"}
        />
        <path
          d="M271.234 81.3241V60.0313C271.234 54.1956 274.783 49.937 280.855 49.937C285.744 49.937 288.978 53.0915 288.978 59.637V81.3241H298.599V57.35C298.599 47.2557 293.552 41.1833 283.931 41.1833C278.331 41.1833 273.757 43.628 271.313 47.4134V22.6508H261.613V81.3241H271.234Z"
          fill={resolvedTheme === "dark" ? "#fff" : "#111315"}
        />
        <path
          d="M325.48 82.3493C335.654 82.3493 342.751 77.2233 344.407 68.7062H335.496C334.392 72.4127 330.922 74.4631 325.638 74.4631C319.25 74.4631 315.623 70.9932 314.913 64.1322L344.25 64.0533V61.1354C344.25 48.9907 336.837 41.1833 325.165 41.1833C313.73 41.1833 305.765 49.6216 305.765 61.8452C305.765 73.9111 313.888 82.3493 325.48 82.3493ZM325.244 49.0695C331.001 49.0695 334.707 52.6183 334.707 57.9809H315.149C316.096 52.1451 319.566 49.0695 325.244 49.0695Z"
          fill={resolvedTheme === "dark" ? "#fff" : "#111315"}
        />
        <path
          d="M361.571 81.3241V60.3468C361.571 54.0378 365.199 49.937 371.113 49.937C376.081 49.937 379.315 53.0915 379.315 59.637V81.3241H388.936V57.35C388.936 47.2557 383.889 41.1833 374.11 41.1833C368.826 41.1833 364.094 43.4703 361.65 47.4134L360.861 42.3663H351.95V81.3241H361.571Z"
          fill={resolvedTheme === "dark" ? "#fff" : "#111315"}
        />
      </svg>
    </span>
  );
};

const config: DocsThemeConfig = {
  project: {
    link: "https://github.com/tonightpass/kitchen",
  },
  docsRepositoryBase: "https://github.com/tonightpass/kitchen/blob/master",
  useNextSeoProps() {
    const { route } = useRouter();
    if (route !== "/") {
      return {
        titleTemplate: `%s${"%s".includes("Kitchen") ? "" : " - Kitchen"}`,
      };
    }
  },
  logo,
  nextThemes: {
    defaultTheme: "dark",
  },
  chat: {
    link: "https://discord.gg/VvvAkPqQ98",
  },
  head: () => {
    const { resolvedTheme } = useNextraTheme();
    const { setStoredTheme } = useTheme();
    setStoredTheme(
      resolvedTheme === "dark" ? 1 : resolvedTheme === "light" ? 2 : 0
    );

    const { title, ...meta } = useConfig().frontMatter;

    const finalTitle = title
      ? `${title}${title.includes("Kitchen") ? "" : " - Kitchen"}`
      : "Kitchen";
    const finalDescription =
      meta.description || "Delicious React styled components.";

    const finalThumbnailUrl =
      urlcat(
        `https://og-image.onruntime.com/${encodeURIComponent(finalTitle)}.jpeg`,
        {
          description: encodeURIComponent(finalDescription || ""),
          theme: "night",
          md: 1,
          fontSize: "100px",
          images: "https://tonightpass.com/static/images/logo/tonightpass.svg",
          thumbnail: meta.image,
        }
      ) || "https://tonightpass.com/static/images/open-graph-image.jpg";

    return (
      <>
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="description" content={finalDescription} />
        <meta name="og:description" content={finalDescription} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={finalThumbnailUrl} />
        <meta name="twitter:site:domain" content="kitchen.dev" />
        <meta name="twitter:url" content="https://kitchen.dev" />
        <meta name="og:title" content={finalTitle} />
        <meta name="og:image" content={finalThumbnailUrl} />
        <meta name="apple-mobile-web-app-title" content="Kitchen" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
      </>
    );
  },
  editLink: {
    text: "Edit this page on GitHub",
  },
  primaryHue: 290,
};

export default config;
