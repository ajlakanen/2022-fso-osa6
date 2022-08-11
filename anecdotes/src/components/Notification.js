import { connect } from "react-redux";

const Notification = (props) => {
  const notification = props.notification;

  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
  };

  if (notification !== "") {
    return <div style={style}> {notification}</div>;
  } else {
    return <></>;
  }
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Notification);
