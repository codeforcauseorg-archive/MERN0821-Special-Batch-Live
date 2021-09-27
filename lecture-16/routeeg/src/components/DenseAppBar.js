import * as React from 'react';

export default function DenseAppBar() {
  return (
      <div style={{
          height: "120px",
          width: "100%",
          position: "absolute",
          bottom: "0px",
          background: "#999999",
          display: "flex",
          flexDirection: "row"
      }}>

          <button>
              One
          </button>

          <button>
              Two
          </button>

          <button>
              Three
          </button>
      </div>
  );
}
