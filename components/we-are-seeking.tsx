'use client'

import { Suspense } from 'react'

import JobList from './job-list'
import JobLocationList from './job-location-list'

export default function WeAreSeeking() {
  return (
    <section className="relative bg-[#EDF3FF]">
      <div className="absolute bottom-0 left-0 h-[400px] w-full bg-[url('/blog/related-blog-bg.svg')] bg-contain bg-bottom bg-no-repeat lg:h-[524px] lg:bg-cover xl:h-[632px] 2xl:h-[776px]" />

      <Suspense>
        <div className="flex justify-center">
          <div className="container grid h-full grid-cols-12 gap-8 pb-36 pt-12">
            <div className="col-span-12 align-middle font-[Manrope] text-[32px] font-semibold leading-[130%] tracking-normal text-[#202222]">
              We are seeking for
            </div>
            <div className="col-span-12 md:col-span-4">
              <JobLocationList />
            </div>
            <JobList />
          </div>
        </div>
      </Suspense>
    </section>
  )
}
