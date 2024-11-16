import { ChatInput } from "@/components";

export default function Page({ params }) {
  const { chatid } = params;

  return (
    <div className=" h-full m-1 flex flex-col justify-between">
  <div className="border">
    My Post: {chatid}
  </div>
  
  <div className="flex-1 ">
    df
  </div>

  <div>
    <ChatInput />
  </div>
</div>

  );
}
