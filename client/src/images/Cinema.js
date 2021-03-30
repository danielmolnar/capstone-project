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
      d="M0 0v300h510V0zm480 133.49c-34.192-6.968-60-37.271-60-73.49V30h60zM30 30h60v30c0 36.22-25.808 66.522-60 73.49zm0 136.51c34.192 6.968 60 37.27 60 73.49v30H30zM69.037 150C99.548 131.61 120 98.147 120 60V30h270v30c0 38.147 20.452 71.61 50.963 90C410.452 168.39 390 201.852 390 240v30H120v-30c0-38.148-20.452-71.61-50.963-90zM480 270h-60v-30c0-36.22 25.808-66.523 60-73.49zM472.382 400.022A44.74 44.74 0 00480 375c0-24.814-20.186-45-45-45s-45 20.186-45 45a44.74 44.74 0 007.618 25.022A75.562 75.562 0 00375 420.052a75.548 75.548 0 00-22.618-20.03A44.74 44.74 0 00360 375c0-24.814-20.186-45-45-45s-45 20.186-45 45a44.74 44.74 0 007.618 25.022A75.562 75.562 0 00255 420.052a75.548 75.548 0 00-22.618-20.03A44.747 44.747 0 00240 375c0-24.814-20.186-45-45-45s-45 20.186-45 45a44.747 44.747 0 007.618 25.022A75.562 75.562 0 00135 420.052a75.548 75.548 0 00-22.618-20.03A44.747 44.747 0 00120 375c0-24.814-20.187-45-45-45s-45 20.186-45 45a44.747 44.747 0 007.618 25.022C15.158 412.993 0 437.252 0 465v45h510v-45c0-27.748-15.158-52.007-37.618-64.978zM60 375c0-8.272 6.729-15 15-15s15 6.728 15 15-6.729 15-15 15-15-6.728-15-15zm60 105H30v-15c0-24.814 20.187-45 45-45s45 20.186 45 45zm60-105c0-8.272 6.729-15 15-15s15 6.728 15 15-6.729 15-15 15-15-6.728-15-15zm60 105h-90v-15c0-24.814 20.186-45 45-45s45 20.186 45 45zm60-105c0-8.272 6.728-15 15-15s15 6.728 15 15-6.728 15-15 15-15-6.728-15-15zm60 105h-90v-15c0-24.814 20.186-45 45-45s45 20.186 45 45zm60-105c0-8.272 6.728-15 15-15s15 6.728 15 15-6.728 15-15 15-15-6.728-15-15zm60 105h-90v-15c0-24.814 20.186-45 45-45s45 20.186 45 45z"
      key="key-0"
    />
    <path
      d="M210 80.729V219.27L348.541 150zm30 48.541L281.459 150 240 170.73z"
      key="key-1"
    />
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
  displayName: "Cinema"
});
