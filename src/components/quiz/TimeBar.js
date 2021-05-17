const TimeBar = ({ time }) => {
  const animationParams = `width-animation ${time}s linear infinite`;
  const TimeBarstyle = { animation: animationParams };
  console.log(TimeBarstyle);
  return <div className="timebar" style={TimeBarstyle}></div>;
};

export default TimeBar;
