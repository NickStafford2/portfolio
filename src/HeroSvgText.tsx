import { useEffect, useState } from "react";
import "./HeroSvgText.css";
import { useInView } from "react-intersection-observer";
// Lookup gsap for awesome svg animations. wordmorph
export default function HeroSvgText() {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    rootMargin: "0px 0px 0px 0px",
    threshold: 0,
  });
  // useEffect(() => {
  // 	toggleId();
  // }, [inView]);

  const [id, setId] = useState("homewrite");
  const [strokeColor, setStrokeColor] = useState("var(--ns-primary)");
  const fillColorHover = ""; //  `group-hover:$(strokeColor)`;
  const toggleId = () => {
    setId("");
    setTimeout(() => {
      setId("homewrite");
      if (strokeColor == "var(--ns-primary)") {
        setStrokeColor("var(--ns-accent)");
      } else {
        setStrokeColor("var(--ns-primary)");
      }
    }, 200);
  };

  return (
    <>
      <span
        className="text-4xl text-primary tracking-widest hover:cursor-pointer"
        style={{ color: strokeColor }}
        onClick={toggleId}
        ref={ref}
      >
        <h1 className="text-[var(--ns-primary)] sm:hidden">Nicholas Stafford</h1>
      </span>
      {inView ? (
        <svg
          id={id}
          onClick={toggleId}
          className="h-fit min-h-32 hover:cursor-pointer group"
          width="70vw"
          viewBox="0 0 216.92799 31.000019"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m 216.428,11.965919 h -11.025 c -0.666,0 -1.169,0.1439 -1.508,0.4317 -0.339,0.2772 -0.509,0.6877 -0.509,1.2314 v 11.4659 h -4.9 v -11.4659 c 0,-0.7143 0.107,-1.354 0.32,-1.919 0.214,-0.565 0.497,-1.0608 0.848,-1.4872 0.365,-0.4371 0.779,-0.80491 1.244,-1.10342 0.465,-0.30916 0.949,-0.5597 1.451,-0.7516 0.516,-0.19189 1.031,-0.33049 1.546,-0.41577 0.528,-0.09595 1.018,-0.14393 1.47,-0.14393 h 11.063 z"
            stroke={strokeColor}
            className={fillColorHover} />
          <path
            d="m 195.301,13.533019 c 0,0.5757 -0.12,1.1994 -0.358,1.871 -0.239,0.661 -0.629,1.2794 -1.169,1.855 -0.528,0.5651 -1.225,1.0395 -2.092,1.4233 -0.854,0.3838 -1.897,0.5757 -3.128,0.5757 h -8.84 v -3.9499 h 8.84 c 0.665,0 1.181,-0.1706 1.545,-0.5117 0.364,-0.3519 0.547,-0.7836 0.547,-1.2954 0,-0.5437 -0.208,-0.9701 -0.622,-1.2793 -0.402,-0.3091 -0.892,-0.4637 -1.47,-0.4637 h -8.84 c -0.666,0 -1.181,0.1759 -1.545,0.5277 -0.364,0.3411 -0.547,0.7676 -0.547,1.2793 v 5.8049 c 0,0.5544 0.201,0.9862 0.604,1.2953 0.414,0.3092 0.923,0.4638 1.526,0.4638 h 8.802 v 3.9659 h -8.84 c -0.678,0 -1.413,-0.1013 -2.205,-0.3039 -0.779,-0.2025 -1.507,-0.5277 -2.186,-0.9755 -0.666,-0.4584 -1.225,-1.0501 -1.677,-1.775 -0.453,-0.7356 -0.679,-1.6258 -0.679,-2.6706 v -5.8369 c 0,-0.5757 0.12,-1.194 0.358,-1.855 0.239,-0.6716 0.622,-1.29 1.15,-1.855 0.54,-0.57568 1.238,-1.05543 2.092,-1.43922 0.867,-0.3838 1.916,-0.5757 3.147,-0.5757 h 8.84 c 0.678,0 1.407,0.10128 2.186,0.30384 0.791,0.20256 1.52,0.53305 2.186,0.99147 0.679,0.44781 1.244,1.03941 1.696,1.77501 0.453,0.725 0.679,1.6099 0.679,2.6546 z"
            stroke={strokeColor}
            className={fillColorHover} />
          <path
            d="m 169.198,19.258019 c 0,0.7143 -0.107,1.3593 -0.321,1.9349 -0.213,0.5651 -0.496,1.0661 -0.848,1.5032 -0.351,0.4265 -0.76,0.7943 -1.225,1.1035 -0.465,0.2985 -0.955,0.5437 -1.47,0.7356 -0.502,0.1919 -1.011,0.3358 -1.526,0.4317 -0.515,0.0853 -1.005,0.128 -1.47,0.128 h -8.84 v -4.1578 h 8.84 c 0.653,0 1.143,-0.1439 1.47,-0.4318 0.326,-0.2878 0.49,-0.7036 0.49,-1.2473 v -5.597 c 0,-0.5757 -0.17,-1.0022 -0.509,-1.2794 -0.327,-0.2771 -0.811,-0.4157 -1.451,-0.4157 h -8.802 c -0.666,0 -1.168,0.1439 -1.508,0.4317 -0.339,0.2772 -0.508,0.6877 -0.508,1.2314 v 16.871 h -4.901 v -16.871 c 0,-0.7143 0.107,-1.354 0.321,-1.919 0.213,-0.565 0.496,-1.0608 0.848,-1.4872 0.364,-0.4371 0.779,-0.80491 1.244,-1.10342 0.465,-0.30916 0.948,-0.5597 1.451,-0.7516 0.515,-0.19189 1.03,-0.33049 1.545,-0.41577 0.528,-0.09595 1.018,-0.14393 1.47,-0.14393 h 8.84 c 0.841,0 1.595,0.09062 2.261,0.27186 0.666,0.18124 1.25,0.42111 1.753,0.71961 0.515,0.29851 0.949,0.64499 1.3,1.03945 0.365,0.3945 0.66,0.8102 0.886,1.2473 0.226,0.4265 0.39,0.8582 0.49,1.2953 0.113,0.4371 0.17,0.8529 0.17,1.2474 z"
            stroke={strokeColor}
            className={fillColorHover} />
          <path
            d="m 142.549,19.258019 c 0,0.7143 -0.107,1.3593 -0.321,1.9349 -0.213,0.5651 -0.496,1.0661 -0.848,1.5032 -0.352,0.4265 -0.76,0.7943 -1.225,1.1035 -0.465,0.2985 -0.955,0.5437 -1.47,0.7356 -0.503,0.1919 -1.018,0.3358 -1.546,0.4317 -0.515,0.0853 -1.005,0.128 -1.47,0.128 h -8.839 c -0.678,0 -1.42,-0.1013 -2.224,-0.3039 -0.804,-0.2025 -1.551,-0.533 -2.242,-0.9914 -0.679,-0.4691 -1.251,-1.0715 -1.715,-1.8071 -0.453,-0.7462 -0.679,-1.6578 -0.679,-2.7345 v -5.629 c 0,-1.0661 0.226,-1.967 0.679,-2.7026 0.464,-0.7462 1.036,-1.3486 1.715,-1.80702 0.691,-0.46908 1.438,-0.8049 2.242,-1.00746 0.804,-0.20256 1.546,-0.30384 2.224,-0.30384 h 8.839 c 1.257,0 2.325,0.1919 3.204,0.5757 0.88,0.38379 1.59,0.86887 2.13,1.45522 0.54,0.5757 0.93,1.2047 1.169,1.887 0.251,0.6823 0.377,1.3166 0.377,1.903 z m -4.901,-5.597 c 0,-0.5757 -0.169,-1.0022 -0.509,-1.2794 -0.339,-0.2771 -0.829,-0.4157 -1.47,-0.4157 h -8.801 c -0.653,0 -1.15,0.1439 -1.489,0.4317 -0.339,0.2772 -0.509,0.6877 -0.509,1.2314 v 5.629 c 0,0.5437 0.17,0.9595 0.509,1.2473 0.339,0.2879 0.836,0.4318 1.489,0.4318 h 8.801 c 0.666,0 1.163,-0.1439 1.489,-0.4318 0.327,-0.2878 0.49,-0.7036 0.49,-1.2473 z"
            stroke={strokeColor}
            className={fillColorHover} />
          <path
            d="m 117.237,25.094919 h -2.186 c -0.704,0 -1.458,-0.1013 -2.262,-0.3039 -0.791,-0.2025 -1.533,-0.533 -2.224,-0.9914 -0.691,-0.4691 -1.262,-1.0715 -1.715,-1.8071 -0.452,-0.7463 -0.678,-1.6578 -0.678,-2.7345 V 0.5 h 4.9 v 18.758019 c 0,0.5117 0.189,0.9222 0.565,1.2313 0.377,0.2985 0.849,0.4478 1.414,0.4478 h 2.186 z"
            stroke={strokeColor}
            className={fillColorHover} />
          <path
            d="m 104.987,13.533019 c 0,0.5757 -0.12,1.1994 -0.358,1.871 -0.239,0.661 -0.629,1.2794 -1.169,1.855 -0.527,0.5651 -1.225,1.0395 -2.092,1.4233 -0.854,0.3838 -1.897,0.5757 -3.128,0.5757 h -8.839 v -3.9499 h 8.839 c 0.666,0 1.181,-0.1706 1.545,-0.5117 0.364,-0.3519 0.547,-0.7836 0.547,-1.2954 0,-0.5437 -0.208,-0.9701 -0.622,-1.2793 -0.402,-0.3091 -0.892,-0.4637 -1.47,-0.4637 h -8.839 c -0.666,0 -1.182,0.1759 -1.546,0.5277 -0.364,0.3411 -0.546,0.7676 -0.546,1.2793 v 5.8049 c 0,0.5544 0.201,0.9862 0.603,1.2953 0.414,0.3092 0.923,0.4638 1.526,0.4638 h 8.802 v 3.9659 h -8.839 c -0.679,0 -1.414,-0.1013 -2.206,-0.3039 -0.779,-0.2025 -1.507,-0.5277 -2.186,-0.9755 -0.666,-0.4584 -1.225,-1.0501 -1.677,-1.775 -0.452,-0.7356 -0.679,-1.6258 -0.679,-2.6706 v -5.8369 c 0,-0.5757 0.12,-1.194 0.358,-1.855 0.239,-0.6716 0.622,-1.29 1.15,-1.855 0.54,-0.57568 1.238,-1.05543 2.092,-1.43922 0.867,-0.3838 1.916,-0.5757 3.148,-0.5757 h 8.839 c 0.678,0 1.407,0.10128 2.186,0.30384 0.791,0.20256 1.52,0.53305 2.186,0.99147 0.679,0.44781 1.244,1.03941 1.696,1.77501 0.453,0.725 0.679,1.6099 0.679,2.6546 z"
            stroke={strokeColor}
            className={fillColorHover} />
          <path
            d="m 81.296,7.808099 c -0.552,1.46056 -1.2,2.89982 -1.941,4.31772 -0.741,1.4179 -1.596,2.7718 -2.563,4.0618 -0.955,1.2793 -2.029,2.468 -3.223,3.5661 -1.181,1.0874 -2.494,2.0309 -3.939,2.8305 -1.432,0.7889 -2.996,1.4126 -4.693,1.871 -1.683,0.4478 -3.511,0.6716 -5.484,0.6716 -0.339,0 -0.66,-0.0533 -0.961,-0.1599 -0.302,-0.1066 -0.566,-0.2505 -0.792,-0.4317 -0.226,-0.1919 -0.402,-0.4105 -0.528,-0.6557 -0.125,-0.2559 -0.188,-0.5277 -0.188,-0.8156 V 7.808099 h 4.9 v 13.00102 c 1.194,0 2.337,-0.2185 3.43,-0.6556 1.106,-0.4371 2.149,-1.0128 3.129,-1.7271 0.98,-0.7249 1.885,-1.5458 2.714,-2.4627 0.842,-0.9168 1.589,-1.855 2.243,-2.8145 0.653,-0.9701 1.206,-1.9189 1.658,-2.8464 0.465,-0.92755 0.81,-1.75911 1.037,-2.49472 z"
            stroke={strokeColor}
            className={fillColorHover} />
          <path
            d="m 53.686,13.533019 c 0,0.5757 -0.12,1.1994 -0.358,1.871 -0.239,0.661 -0.629,1.2794 -1.169,1.855 -0.528,0.5651 -1.225,1.0395 -2.092,1.4233 -0.854,0.3838 -1.897,0.5757 -3.128,0.5757 h -8.84 v -3.9499 h 8.84 c 0.666,0 1.181,-0.1706 1.545,-0.5117 0.364,-0.3519 0.547,-0.7836 0.547,-1.2954 0,-0.5437 -0.208,-0.9701 -0.622,-1.2793 -0.402,-0.3091 -0.892,-0.4637 -1.47,-0.4637 h -8.84 c -0.665,0 -1.181,0.1759 -1.545,0.5277 -0.364,0.3411 -0.547,0.7676 -0.547,1.2793 v 5.8049 c 0,0.5544 0.202,0.9862 0.604,1.2953 0.414,0.3092 0.923,0.4638 1.526,0.4638 h 8.802 v 3.9659 h -8.84 c -0.678,0 -1.413,-0.1013 -2.205,-0.3039 -0.779,-0.2025 -1.507,-0.5277 -2.186,-0.9755 -0.666,-0.4584 -1.225,-1.0501 -1.677,-1.775 -0.453,-0.7356 -0.679,-1.6258 -0.679,-2.6706 v -5.8369 c 0,-0.5757 0.12,-1.194 0.358,-1.855 0.239,-0.6716 0.622,-1.29 1.15,-1.855 0.54,-0.57568 1.238,-1.05543 2.092,-1.43922 0.867,-0.3838 1.916,-0.5757 3.147,-0.5757 h 8.84 c 0.678,0 1.407,0.10128 2.186,0.30384 0.791,0.20256 1.52,0.53305 2.186,0.99147 0.679,0.44781 1.244,1.03941 1.696,1.77501 0.453,0.725 0.679,1.6099 0.679,2.6546 z"
            stroke={strokeColor}
            className={fillColorHover} />
          <path
            d="m 27.508,15.500019 c 0,1.3966 -0.289,2.6812 -0.867,3.8539 -0.566,1.1727 -1.351,2.1855 -2.356,3.0384 -1.005,0.8422 -2.199,1.5032 -3.581,1.9829 -1.382,0.4798 -2.884,0.7197 -4.505,0.7197 H 2.969 c -0.352,0 -0.678,-0.0533 -0.98,-0.16 -0.302,-0.1066 -0.565,-0.2505 -0.792,-0.4317 -0.213,-0.1919 -0.383,-0.4158 -0.508,-0.6717 -0.126,-0.2558 -0.189,-0.533 -0.189,-0.8315 V 4.257999 c 0,-0.28785 0.063,-0.5597 0.189,-0.81557 0.125,-0.25586 0.295,-0.47974 0.508,-0.67164 0.227,-0.1919 0.49,-0.34115 0.792,-0.44776 0.302,-0.10661 0.628,-0.15992 0.98,-0.15992 h 13.23 c 1.621,0 3.123,0.23988 4.505,0.71962 1.382,0.47974 2.576,1.14606 3.581,1.99893 1.005,0.84222 1.79,1.85501 2.356,3.03838 0.578,1.17271 0.867,2.45198 0.867,3.83798 z m -4.901,-3.742 c 0,-0.8103 -0.157,-1.5512 -0.471,-2.2228 -0.301,-0.67168 -0.735,-1.24204 -1.3,-1.71113 C 20.27,7.344349 19.592,6.976549 18.8,6.720679 18.021,6.454159 17.154,6.320899 16.199,6.320899 H 5.4 v 14.61622 h 10.799 c 0.955,0 1.822,-0.128 2.601,-0.3838 0.792,-0.2665 1.47,-0.6343 2.036,-1.1034 0.565,-0.4798 0.999,-1.0501 1.3,-1.7111 0.314,-0.6717 0.471,-1.4179 0.471,-2.2388 z"
            stroke={strokeColor}
            className={fillColorHover} />
        </svg>
      ) : (
        ""
      )}
    </>
  );
}
