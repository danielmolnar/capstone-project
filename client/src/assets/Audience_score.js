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

const width = "512";
const height = "512";
const viewBox = "0 0 512 512";

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
    <g dataName="13-rating" key="key-0">
      <g dataName="linear color">
        <path d="M472 12H40A36.04 36.04 0 004 48v248a36.04 36.04 0 0036 36h40.367l68.977 45.985c7.574 5.4 18.949-.7 18.656-9.985v-36h62.706a51.889 51.889 0 0078.588 0H472a36.04 36.04 0 0036-36V48a36.04 36.04 0 00-36-36zM232.3 278a27.009 27.009 0 01-10.328-8H270c9.875 0 17.029 3.039 21.74 9.264A16.655 16.655 0 00286 278zm37.7 48a28.04 28.04 0 01-27.71-24h41.763l12.709 4.237A28.049 28.049 0 01270 326zm214-30a12.013 12.013 0 01-12 12H321.025a51.985 51.985 0 00.975-10 61.435 61.435 0 00-6.267-25.367C307.146 255.458 290.9 246 270 246h-64a12 12 0 00-12 12c0 20.465 12.762 33.263 24.008 39.665 0 .112-.008.224-.008.335a51.985 51.985 0 00.975 10H156a12 12 0 00-12 12v25.578l-53.344-35.563A12 12 0 0084 308H40a12.013 12.013 0 01-12-12V48a12.013 12.013 0 0112-12h432a12.013 12.013 0 0112 12z" />
        <path d="M327.021 109.655a14.61 14.61 0 00-12.709-10.082l-32.266-2.7-12.546-29.9a14.643 14.643 0 00-27 .006l-12.542 29.89-32.266 2.7a14.647 14.647 0 00-8.349 25.682l24.525 21.182-7.406 31.572c-3.188 12.292 11.164 22.706 21.852 15.867L256 177.08l27.692 16.8c10.7 6.836 25.034-3.586 21.848-15.872l-7.406-31.57 24.523-21.18a14.613 14.613 0 004.364-15.603zm-62.394-33.39l-.009.02zm12.321 56.756a12 12 0 00-3.839 11.823l3.978 16.957-14.863-9.016a12 12 0 00-12.448 0l-14.863 9.015 3.978-16.957a12 12 0 00-3.84-11.823l-13.189-11.39 17.346-1.453a12 12 0 0010.063-7.315L256 96.825l6.729 16.038a12 12 0 0010.064 7.315l17.345 1.453z" />
        <path d="M446.578 149.573l-32.265-2.7-12.542-29.887a14.643 14.643 0 00-27-.009v.006l-12.542 29.89-32.265 2.7a14.648 14.648 0 00-8.35 25.682l24.526 21.182-7.406 31.572a14.644 14.644 0 0021.852 15.867l27.689-16.8 27.692 16.8c10.69 6.834 25.038-3.583 21.848-15.872l-7.407-31.57 24.53-21.185a14.648 14.648 0 00-8.352-25.679zm-37.363 33.448a12 12 0 00-3.839 11.823l3.978 16.957-14.864-9.016a12 12 0 00-12.447 0l-14.864 9.015 3.977-16.958a12 12 0 00-3.839-11.822l-13.188-11.391 17.345-1.453a12 12 0 0010.063-7.315l6.73-16.038 6.733 16.04a12 12 0 0010.064 7.315l17.344 1.453zM182.045 149.573l-32.266-2.7-12.541-29.887a14.643 14.643 0 00-27.008 0l-12.542 29.89-32.266 2.7a14.648 14.648 0 00-8.348 25.682L81.6 196.437l-7.407 31.572c-3.185 12.286 11.154 22.707 21.853 15.867l27.688-16.8 27.69 16.8c10.69 6.839 25.044-3.583 21.851-15.87l-7.406-31.57 24.526-21.182a14.648 14.648 0 00-8.349-25.682zm-66.939-23.308v.01l-.006-.013zm29.576 56.756a12 12 0 00-3.839 11.823l3.978 16.957-14.864-9.016a12 12 0 00-12.448 0l-14.863 9.015 3.978-16.957a12 12 0 00-3.839-11.823L89.6 171.631l17.345-1.453A12 12 0 00117 162.863l6.729-16.037 6.73 16.037a12 12 0 0010.063 7.315l17.345 1.453zM202 386v72a12 12 0 0012 12h112a12 12 0 0012-12v-72a36.04 36.04 0 00-36-36h-64a36.04 36.04 0 00-36 36zm100-12a12.013 12.013 0 0112 12v60h-88v-60a12.013 12.013 0 0112-12z" />
      </g>
    </g>
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
  displayName: "Audience_score"
});
