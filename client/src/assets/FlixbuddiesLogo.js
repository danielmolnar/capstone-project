import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const createHelpers = (width, height, css) => {
  // somehow sizes is ending up in markup, even if it is not a valid svg attribute
  // until we have a better solution, just render it empty, instead to '[Object object]'
  const sanitizeSizes = (sizes) =>
    Object.defineProperty(sizes, 'toString', {
      value: () => '',
      enumerable: false,
    });

  const getDimensions = (size, sizes) => {
    if (
      size &&
      typeof size.width === 'number' &&
      typeof size.height === 'number'
    ) {
      return size;
    }

    return size && sizes[size] ? sizes[size] : { width, height };
  };

  const getCss = (size, sizes, fillColor, fillColorRule, noStyles) => {
    if (noStyles) {
      return '';
    }

    const dimensions = getDimensions(size, sizes);
    const fillRule =
      fillColor && fillColorRule
        ? `${fillColorRule}{ fill: ${fillColor}; }`
        : '';

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
    sanitizeSizes,
  };
};

const width = '226';
const height = '50';
const viewBox = '0 0 226 50';

const { getDimensions, getCss, propsToCss, sanitizeSizes } = createHelpers(
  width,
  height,
  css
);

const sizes = sanitizeSizes({
  small: { width: 18, height: 18 },
  medium: { width: 24, height: 24 },
});

const Image = styled.svg`
  ${propsToCss}
`;

const children = (
  <Fragment>
    <defs key="key-0">
      <linearGradient
        id="s-a3dc3e0c63-b"
        x1=".5"
        x2=".5"
        y2="1"
        gradientUnits="objectBoundingBox"
      >
        <stop offset="0" stopColor="#fc0909" />
        <stop offset="1" stopColor="#7e0505" />
      </linearGradient>
      <filter
        id="s-a3dc3e0c63-a"
        width="225.725"
        height="50.292"
        x="0"
        y="0"
        filterUnits="userSpaceOnUse"
      >
        <feOffset dx="1" dy="1" />
        <feGaussianBlur result="blur" stdDeviation=".5" />
        <feFlood floodOpacity=".561" />
        <feComposite in2="blur" operator="in" />
        <feComposite in="SourceGraphic" />
      </filter>
    </defs>
    <g dataname="Gruppe 8" key="key-1">
      <g dataname="Gruppe 6">
        <g dataname="Gruppe 5">
          <g dataname="Gruppe 4">
            <g
              dataname="Gruppe 7"
              filter="url(#s-a3dc3e0c63-a)"
              transform="translate(.001)"
            >
              <path
                fill="url(#s-a3dc3e0c63-b)"
                d="M2.419 4.928H5.7l3.4-.605L8.909-18h8.378v-5.9H8.909v-11.5h10.679v-5.9H2.419zm20.3-1.609l16.878-.87V-4L29.2-3.2v-38.1h-6.49zm20.3-.87H49.5V-41.3h-6.49zm8.615 0l6.5-.631L63.543-14.4h.118l5.074 16.219h6.136l-7.139-22.941L74.871-41.3h-6.136l-4.484 13.334h-.118L59.767-41.3h-6.844l7.139 20.178zM78.3 1.337l10.2-.176c6.49 0 9.853-4.584 9.853-10.956v-3.54c0-4.366-1.357-7.434-4.838-8.614v-.118c2.891-1.18 4.189-3.835 4.189-8.083v-1.65c0-6.372-2.891-9.5-9.617-9.5h-9.794zm6.487-25.822V-35.4h3.123c2.3 0 3.3 1.3 3.3 4.248v2.3c0 3.3-1.475 4.366-3.894 4.366zm0 18.585v-12.685h2.891c2.95 0 4.189 1.18 4.189 5.015v3.6C91.863-6.9 90.683-5.9 88.5-5.9zm26.98 7.062c6.372 0 9.482-4.348 9.482-10.956V-41.3h-6.254v31.978c0 2.95-1.163 5.191-3.228 5.191s-3.38-2.241-3.38-5.191V-41.3h-6.49v31.506c-.004 6.608 3.494 10.956 9.866 10.956zm14.084 0h9.912c6.49 0 9.676-4.761 9.676-11.369v-20.886c0-6.608-3.186-10.207-9.676-10.207h-9.912zm6.49-7.062v-29.5h3.3c2.065 0 3.3 1.062 3.3 4.012v21.476c0 2.95-1.239 4.012-3.3 4.012zM149.8 1.563h9.912c6.49 0 9.676-5.162 9.676-11.77v-20.886c0-6.608-3.186-10.207-9.676-10.207H149.8zm6.49-7.463v-29.5h3.3c2.065 0 3.3 1.062 3.3 4.012v21.476c0 2.95-1.239 4.012-3.3 4.012zm17.464 8.24h6.49V-41.3h-6.49zm11.328.428l17.235.974v-6.295l-10.745-.3v-15.732h8.909v-5.9h-8.909V-35.4h11.21v-5.9h-17.7zM215.35 5.4c6.372 0 9.794-4.25 9.794-10.976 0-5.133-2.006-12.775-7.434-17.554-4.248-3.717-5.6-5.9-5.6-8.909 0-2.832 1.18-3.953 3.245-3.953s3.245 1.121 3.245 4.071v2.121h6.136v-1.711c0-6.608-3.127-10.384-9.44-10.384s-9.676 3.776-9.676 10.266c0 4.72 1.77 8.083 7.2 12.862 4.248 3.717 5.841 10.238 5.841 13.66 0 3.068-1.3 4.13-3.363 4.13s-3.363-1.062-3.363-4.012v-2.827h-6.136v2.36C205.792 1.152 208.978 5.4 215.35 5.4z"
                dataname="Pfad 10"
                transform="translate(-1.92 42.39)"
              />
            </g>
          </g>
        </g>
      </g>
    </g>
  </Fragment>
);

const defaultProps = {
  children,
  viewBox,
  fillColor: null,
  fillColorRule: '&&& path, &&& use, &&& g',
  sizes,
  size: null,
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
      width: PropTypes.number.isRequired,
    }),
  ]),
  sizes: PropTypes.shape({
    height: PropTypes.number,
    width: PropTypes.number,
  }),
};

export default Object.assign(Image, {
  getDimensions,
  getCss,
  defaultProps,
  displayName: 'Logo',
});
