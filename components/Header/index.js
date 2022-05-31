import Button from "../Button";
function Header() {
  return (
    <div className={"h-[60px] border-bottom shadow-bottom w-full sticky px-4"}>
      <div className={"flex flex-row items-center h-full"}>
        <div className={"flex flex-grow"}>
          <h2 className={"text-3xl"}>Prill.io</h2>
        </div>
        <Button className={"mr-2 secondary"}>Secondary</Button>
        <Button className={"primary"}>Primary</Button>
      </div>
    </div>
  );
}

export default Header;
