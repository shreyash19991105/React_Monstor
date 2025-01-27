const Greeting = () => {
  const greetingMessage = "Hello World";
  const currrentDate = new Date();

  return (
    <div>
      <h1>{greetingMessage}</h1>
      <p>{currrentDate.getDate()}</p>
    </div>
  );
};

export default Greeting;
