import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
        <div className="w-screen h-screen flex flex-col background relative items-center overflow-auto">
          <h1 className="bg-white rounded-lg w-11/12 text-center mt-[40px]
          px-10 py-4 text-4xl font-bold">RANDOM GIF</h1>
          <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
            <Random></Random>
            <Tag></Tag>
          </div>
        </div>
  );
}
