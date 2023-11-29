import WaveSurfer from 'wavesurfer.js';
import WriteMessageComponent from '../WriteMessageComponent';
import {
  component$,
  useSignal,
  useVisibleTask$,
  noSerialize,
  type NoSerialize,
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
  const isPlay = useSignal(false);
  const waveformRef = useSignal<HTMLElement>();
  const totalMin = useSignal(0);
  const wavesurfer = useSignal<NoSerialize<WaveSurfer>>();
  const totalSec = useSignal(14);

  useVisibleTask$(async ({ track }) => {
    track(() => isPlay.value);
    track(() => wavesurfer.value);

    const waveSurferInstance = wavesurfer.value;

    if (isPlay.value && waveSurferInstance) {
      try {
        await waveSurferInstance.play();
      } catch (error) {
        console.error(error);
      }
    }

    if (!isPlay.value && waveSurferInstance) {
      try {
        await waveSurferInstance.pause();
      } catch (error) {
        console.error(error);
      }
    }
  });

  useVisibleTask$(({ track }) => {
    track(() => waveformRef.value);
    if (waveformRef.value) {
      wavesurfer.value = noSerialize(
        WaveSurfer.create({
          height: 28,
          container: waveformRef.value,
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
        }),
      );
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
    <div class="w-[390px] mx-auto mt-auto relative mb-[70px] ">
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
        <div class="h-[347px] px-[40px] py-[15px] bg-black rounded-[24px] border-1 border-solid border-[#9363FD] bg-bg-gr shadow-[0px_30px_30px_0px_rgba(0,0,0,0.40)] text-white">
          <div class="h-[100%] flex gap-[20px] flex-col justify-end">
            <div>
              <div class="flex flex-row gap-[8px]">
                <div class="w-[26px] h-[26px]">
                  <img src={unityMini} alt="unity" width="26" height="26" />
                </div>

                <div class="w-full h-[100%] flex gap-[10px] flex-col justify-end">
                  <p class="text-chatIncomingColor">
                    Добрый день, меня зовут Юнити! Я разработка компании UWP
                    digital.
                  </p>

                  <div class="w-max min-w-[200px] flex items-center justify-between gap-[12px] bg-audioInputColor rounded-[20px] pr-[6px]">
                    <div
                      onClick$={() => (isPlay.value = !isPlay.value)}
                      class="w-[24px] h-[24px] cursor-pointer"
                    >
                      <PauseSvg />
                    </div>
                    <div ref={waveformRef}></div>
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
              </div>
            </div>

            <WriteMessageComponent />
          </div>
        </div>
      )}
    </div>
  );
});
