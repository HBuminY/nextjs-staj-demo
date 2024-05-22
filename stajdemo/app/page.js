import Sidebar from "./sidebar";
import ItemsGrid from "./itemsgrid";
import Itemcard from "./item_card";

export default function Home() {
  return (
    <main className="fixed top-0 left-0 h-full w-full flex flex-row justify-start">
      <div className="w-1/4 h-full">
        <Sidebar/>
      </div>

      <div className="w-3/4 h-full">
        <ItemsGrid>
          <Itemcard image={"/placeholder.png"} title={"test"} price={"500"} stock={5}/>
          <Itemcard image={"/placeholder.png"} title={"test"} price={"500"} stock={5}/>
          <Itemcard image={"/placeholder.png"} title={"test"} price={"500"} stock={5}/>
          <Itemcard image={"/placeholder.png"} title={"test"} price={"500"} stock={5}/>
          <Itemcard image={"/placeholder.png"} title={"test"} price={"500"} stock={5}/>
        </ItemsGrid>
      </div>
    </main>
  );
}
