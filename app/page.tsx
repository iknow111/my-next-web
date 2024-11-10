export default function Home() {
  return (
    <div>
      <MyButton name = "yeobi" nickname = "y" today={new Date()}/>
    </div>
  );
}

// function MyButton({
//   name
// }: {
//   name: string
// }) {
//   return <button>I am {name}</button>
// }

type TParams = {
  name: string
  nickname : string
  today : Date
}

function MyButton(params: TParams){
  return (

   <div className="bg-blue-500 text-xl w-[100px]" style={{backgroundColor: "rgb(203 213 255)"}}>
    I am {params.name}. my nickname is {params.nickname}. {" "}
    </div>
  );
};

