const Weather = ({ temperature }) => {
  // const result =
  //   temperature < 15
  //     ? "Its cold"
  //     : temperature >= 15 && temperature <= 25
  //     ? "Its nice outside"
  //     : "its hot outside";
  let result = "";
  if (temperature < 15) result = "Its cold";
  else if (temperature >= 15 && temperature <= 25) result = "its nice outside";
  else result = "its hot outside";

  return <div>{result}</div>;
};

export default Weather;
