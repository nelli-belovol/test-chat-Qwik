import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
const counter = useSignal(0);
console.log("loaded")

  return (
    <>
      <h1>Hi 👋</h1>
      <p>
     {counter.value}
      </p>
			<button onClick$={()=>{
				console.log('test')
			}}>Click</button><button onClick$={()=>{
				counter.value++
			}}>Increment</button>
	
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
