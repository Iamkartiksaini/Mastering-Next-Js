import TextRevealComponent from '@/components/ui/text-reveal/TextReaveal'
import React, { Fragment } from 'react'
import Mix from './todos'

const Page = () => {
  return (
    <Fragment>
      <Mix />
      <marquee className="marquee" direction="right" behavior="scroll" scrollamount="5">
        This is a left to right animation using the marquee tag.
      </marquee>
      <TextRevealComponent />
    </Fragment>
  )
}

export default Page


