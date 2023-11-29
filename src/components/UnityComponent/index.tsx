import WaveSurfer from 'wavesurfer.js';
import {
  component$,
  useSignal,
  useTask$,
  useVisibleTask$,
} from '@builder.io/qwik';
import VolumeSvg from '../../assets/svg/volume';
import ArrowDownSvg from '../../assets/svg/arrowDown';
import UaSvg from '../../assets/svg/UA';
import PauseSvg from '../../assets/svg/pause';
import unityMiddle from '../../assets/images/unity-middle.png';
import unityMini from '../../assets/images/unity-mini.png';

const urlTrack =
  'https://www.mfiles.co.uk/mp3-downloads/brahms-st-anthony-chorale-theme-two-pianos.mp3';

export default component$(() => {
  const isOpen = useSignal(false);
  const waveRef = useSignal<HTMLElement>();
  const totalMin = useSignal(0);
  const totalSec = useSignal(14);

  const url = useSignal('https://api.github.com/repos/BuilderIO/qwik');

  useTask$(({ track }) => {
    track(() => url.value);
    console.log(url.value);
  });

  useVisibleTask$(({ track }) => {
    track(() => waveRef.value);
    if (waveRef.value) {
      WaveSurfer.create({
        height: 28,
        width: '100%',
        container: waveRef.value,
        waveColor: '#9CA3AF',
        progressColor: '#8B5CF6',
        cursorColor: '$blue',

        normalize: false,
        cursorWidth: 2,
        barWidth: 6,
        barGap: 3,
        barRadius: 27,

        minPxPerSec: 1,
        fillParent: true,

        mediaControls: false,
        autoplay: false,
        interact: true,
        dragToSeek: true,
        hideScrollbar: true,
        audioRate: 1,
        autoScroll: true,
        autoCenter: true,
        sampleRate: 8000,

        url: urlTrack,
      });
    }
  });

  const headClasses = [
    'w-max',
    'p-1',
    'bg-black',
    'border-[1px]',
    'border-[#8B5CF6]',
    'rounded-[150px]',
    'mx-auto',
    isOpen.value ? 'absolute' : 'static',
    isOpen.value ? 'top-0' : 'top-0',
    isOpen.value && 'left-1/2',
    isOpen.value ? 'transform translate-x-[-50%] translate-y-[-50%]' : null,
  ].join(' ');

  return (
    <div class="w-[390px] mx-auto mt-auto mb-0 relative">
      <div class={headClasses}>
        <div class="flex w-[302px] py-3 px-4 justify-between items-center bg-chatBackgroundGradientEnd rounded-[150px] text-white">
          <div class="gradient-border ">
            <div class="py-2 px-4 flex gap-2 items-center">
              <VolumeSvg />
              <p>ON</p>
            </div>
          </div>

          <img
            class="cursor-pointer"
            onClick$={() => (isOpen.value = !isOpen.value)}
            src={unityMiddle}
            alt="unity"
            width="62"
            height="62"
          />

          <div class="gradient-border overflow-hidden">
            <div class="w-[36px] h-[36px]">
              <UaSvg />
            </div>
          </div>
          <div class="gradient-border">
            <div class="p-2 flex gap-2">
              <ArrowDownSvg />
            </div>
          </div>
        </div>
      </div>

      {isOpen.value && (
        <div class="h-[347px] px-[40px] py-[15px] bg-black rounded-[24px] border-1 border-solid border-[#9363FD] bg-bg-gr shadow-md w-full text-white flex gap-[10px] flex-col justify-end">
          <div class="flex items-center gap-[8px]">
            <img src={unityMini} alt="unity" width="26" height="26" />
            <p class="text-chatIncomingColor">
              Добрый день, меня зовут Юнити! Я разработка компании UWP digital.
            </p>
          </div>
          <div class="flex items-center gap-[12px]">
            <PauseSvg />
            <div ref={waveRef} class="w-full"></div>
            <p>
              {totalMin}:{totalSec}
            </p>
          </div>
          <a
            class="text-[#864DFF] text-underline font-medium  font-montserrat text-base block"
            href="https://uwp.digital/en"
          >
            https://uwp.digital/en
          </a>
        </div>
      )}
    </div>
  );
});
