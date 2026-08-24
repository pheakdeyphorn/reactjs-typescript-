function AlertButton({ message, children }) {
  return <button onClick={() => alert(message)}>{children}</button>;
}

export default function Button() {
  //   let count = 0;
  //   function handleClickEvent() {
  //     console.log(`You click me ${count} times!`);
  //     count++;
  //   }
  //   return <button onClick={handleClickEvent}>Click</button>;

  //   PROPS;
  return (
    <>
      <AlertButton message={"Click from first"}>First</AlertButton>
      <AlertButton message={"Click from Second"}>Second</AlertButton>
    </>
  );
}
