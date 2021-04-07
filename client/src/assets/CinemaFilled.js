import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const createHelpers = (width, height, css) => {
  // somehow sizes is ending up in markup, even if it is not a valid svg attribute
  // until we have a better solution, just render it empty, instead to '[Object object]'
  const sanitizeSizes = sizes =>
    Object.defineProperty(sizes, "toString", {
      value: () => "",
      enumerable: false
    });

  const getDimensions = (size, sizes) => {
    if (
      size &&
      typeof size.width === "number" &&
      typeof size.height === "number"
    ) {
      return size;
    }

    return size && sizes[size] ? sizes[size] : { width, height };
  };

  const getCss = (size, sizes, fillColor, fillColorRule, noStyles) => {
    if (noStyles) {
      return "";
    }

    const dimensions = getDimensions(size, sizes);
    const fillRule =
      fillColor && fillColorRule
        ? `${fillColorRule}{ fill: ${fillColor}; }`
        : "";

    return css`
      width: ${dimensions.width}px;
      height: ${dimensions.height}px;
      ${fillRule}
    `;
  };

  const propsToCss = ({ size, sizes, fillColor, fillColorRule, noStyles }) =>
    getCss(size, sizes, fillColor, fillColorRule, noStyles);

  return {
    getCss,
    getDimensions,
    propsToCss,
    sanitizeSizes
  };
};

const width = "510";
const height = "510";
const viewBox = "0 0 510 510";

const { getDimensions, getCss, propsToCss, sanitizeSizes } = createHelpers(
  width,
  height,
  css
);

const sizes = sanitizeSizes({
  small: { width: 18, height: 18 },
  medium: { width: 24, height: 24 }
});

const Image = styled.svg`
  ${propsToCss}
`;

const children = (
  <Fragment>
    <path
      d="M420 0v60c0 41.355 33.645 75 75 75h15V0zM90 60V0H0v135h15c41.355 0 75-33.645 75-75zM420 240v60h90V165h-15c-41.355 0-75 33.645-75 75zM90 240c0-41.355-33.645-75-75-75H0v135h90zM474.009 410.011c10.208-8.249 16.741-20.864 16.741-35.011 0-24.853-20.147-45-45-45s-45 20.147-45 45c0 14.313 6.69 27.056 17.106 35.298C397.015 419.703 382.5 440.649 382.5 465c0-24.536-14.734-45.619-35.832-54.917 10.26-8.248 16.832-20.895 16.832-35.083 0-24.853-20.147-45-45-45s-45 20.147-45 45c0 14.272 6.651 26.982 17.015 35.227C269.588 419.596 255 440.588 255 465c0-24.475-14.661-45.512-35.674-54.846 10.311-8.246 16.924-20.924 16.924-35.154 0-24.853-20.148-45-45-45s-45 20.147-45 45c0 14.23 6.612 26.908 16.923 35.154C142.161 419.488 127.5 440.525 127.5 465c0-24.412-14.588-45.404-35.515-54.773C102.349 401.982 109 389.272 109 375c0-24.853-20.147-45-45-45s-45 20.147-45 45c0 14.188 6.572 26.835 16.832 35.083C14.734 419.381 0 440.464 0 465v45h510v-45c0-24.598-14.809-45.727-35.991-54.989zM69.037 150C99.548 168.39 120 201.854 120 240v60h270v-60c0-38.146 20.452-71.61 50.963-90C410.452 131.61 390 98.146 390 60V0H120v60c0 38.146-20.452 71.61-50.963 90zM210 80.729L348.541 150 210 219.27z"
      key="key-0"
    />
    <path d="M240 129.27v41.46L281.459 150z" key="key-1" />
  </Fragment>
);

const defaultProps = {
  children,
  viewBox,
  fillColor: null,
  fillColorRule: "&&& path, &&& use, &&& g",
  sizes,
  size: null
};

Image.propTypes /* remove-proptypes */ = {
  fillColor: PropTypes.string,
  fillColorRule: PropTypes.string,
  viewBox: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      height: PropTypes.number.isRequired,
      width: PropTypes.number.isRequired
    })
  ]),
  sizes: PropTypes.shape({
    height: PropTypes.number,
    width: PropTypes.number
  })
};

export default Object.assign(Image, {
  getDimensions,
  getCss,
  defaultProps,
  displayName: "Cinema_filled"
});
