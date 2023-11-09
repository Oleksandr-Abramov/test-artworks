import LoadingOverlay from "react-loading-overlay-ts";

const Loader = ({ isActive }) => {
  return (
    <LoadingOverlay
      active={isActive}
      spinner
      text=""
      //   style={{
      //     zIndex: 100,
      //     position: "fixed",
      //     top: "50%",
      //     left: "50%",
      //   }}
    >
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundColor: "rgba(0,0,0,1)",
          zIndex: 99,
          opacity: isActive ? 0.2 : 0,
          transition: "opacity 0.9s ease",
          pointerEvents: isActive ? "auto" : "none",
        }}
      ></div>
    </LoadingOverlay>
  );
};

export default Loader;
