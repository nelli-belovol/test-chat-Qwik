import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import MicrophoneSvg from '../../assets/svg/microphone';
import PaperclipSvg from '../../assets/svg/paperclip';

export default component$(() => {
  const messageInput = useSignal('');

  useVisibleTask$(({ track }) => {
    track(() => {});
  });

  return (
    <div class="py-1.5 px-3 bg-inputAndSoundFieldBackground flex flex-row gap-3 justify-between rounded-[12px]">
      <div class="flex items-center justify-center w-max cursor-pointer">
        <PaperclipSvg />
      </div>
      <input
        class="input bg-chatBackgroundGradientEnd rounded-[8px]"
        bind:value={messageInput}
      />
      <div class="rounded-[8px] bg-[#8B5CF6] py-[2px] px-[8px] flex items-center justify-center w-max cursor-pointer">
        <MicrophoneSvg />
      </div>
    </div>
  );
});
