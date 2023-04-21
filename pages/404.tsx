import { BackBtn } from '@/components/buttons';
import React from 'react'

type Props = {}

export default function NotFound({}: Props) {
  return (
    <div>
      <div className="w-screen h-screen flex flex-col items-center justify-center">
        <div className="w-[450px] h-auto bg text-center flex flex-col items-center p-4 justify-center rounded-2xl">
          <h1 className="w-full text-4xl font-bold my-[20px]">Oups !</h1>
          <h3 className="w-full mb-6 opacity-80">
            It seems like an error occured !
          </h3>
          <BackBtn className={"self-center"} />
        </div>
      </div>
    </div>
  );
}