import PropTypes from 'prop-types';
import React from 'react';

const CodeBackgroundImage = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="751"
      height="521"
      viewBox="0 0 751 521"
      className={className}
    >
      <g
        data-name="Code Lines"
        transform="translate(-240 -1972)"
      >
        <g data-name="Group 16" transform="translate(240 1972)">
          <g data-name="Group 14">
            <rect data-name="Rectangle 7" width="542" height="106" />
            <rect
              data-name="Rectangle 8"
              width="177"
              height="106"
              transform="translate(574)"
            />
          </g>
          <g data-name="Group 15" transform="translate(0 137.728)">
            <rect
              data-name="Rectangle 7"
              width="256"
              height="106"
              transform="translate(0 0.272)"
            />
            <rect
              data-name="Rectangle 8"
              width="462"
              height="106"
              transform="translate(289 0.272)"
            />
          </g>
        </g>
        <g data-name="Group 17" transform="translate(240 2248.55)">
          <g data-name="Group 14" transform="translate(0 0)">
            <rect
              data-name="Rectangle 7"
              width="181"
              height="107"
              transform="translate(0 0.45)"
            />
            <rect
              data-name="Rectangle 8"
              width="223"
              height="107"
              transform="translate(528 0.45)"
            />
            <rect
              data-name="Rectangle 9"
              width="283"
              height="107"
              transform="translate(213 0.45)"
            />
          </g>
          <g data-name="Group 15" transform="translate(0 138.821)">
            <rect
              data-name="Rectangle 7"
              width="386"
              height="106"
              transform="translate(0 -0.371)"
            />
            <rect
              data-name="Rectangle 8"
              width="336"
              height="106"
              transform="translate(415 -0.371)"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

CodeBackgroundImage.propTypes = {
  className: PropTypes.string,
};

export default CodeBackgroundImage;
