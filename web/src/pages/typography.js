import React from 'react'

const fonts = [
  'f-2',
  'f-3',
  'f-5',
  'f-6',
  'f-7',
  'f-8',
  'f-10',
  'f-11',
  'f-12',
  'f-13',
  'f-14',
  'f-15',
  'f-16',
  'f-17',
  'f-18',
  'f-19',
  'f-20', // (maybe not required)
  'f-21',
  'f-22',
  'f-23',
  'f-24',
  'f-25',
  'f-26',
  'f-27',
  'f-28',
]

// text-xs
// text-sm
// text-md
// text-lg
// text-xl

// Lettera

// // regular
// // // 25 27 -.5
// // // 27 29 -.6
// // // 93 88 -2

// // bold
// // // 20 25 0
// // // 23 25 0 (16 & 18)
// // // 24 37 0
// // // 24 37 0
// // // 31 33 -1
// // // 33 35 -.4
// // // 51 38 -1.7
// // // 57 54 -.7
// // // 62 59 -1.05
// // // 75 68 -2.5
// // // 170 135 -6

// // black
// // // 15 17 0
// // // 16 19 0
// // // 18 29 -.4
// // // 19 28 0
// // // 19 23 -.3
// // // 23 25 0
// // // 25 27 -.5
// // // 27 29 -.6
// // // 28 30 -.5

// Signifier

// // light
// // // 14 18 1.33
// // // 16 21 0
// // // 16 22 0
// // // 20 26 0
// // // 20 26 0
// // // 20 27 0
// // // 22 27 0
// // // 21 28 0
// // // 23 25 0
// // // 23 32 0
// // // 25 32 0

// // light italic
// // // 16 21 0
// // // 23 25 0

const FontPreview = ({ font }) => {
  return (
    <div className="grid md:grid-cols-2 gap-10 mb-20">
      <div>
        <div className={`${font}`}>
          {font} - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod!
        </div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod!
        </div>
      </div>
      <div>
        <div className={`${font} mb-5`}>
          {font} - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod!
        </div>
        <div className="grid grid-cols-2">
          <img src="http://placehold.it/320x180" alt="placholder" />
        </div>
      </div>
    </div>
  )
}

export default function Typography() {
  return (
    <div>
      {fonts.map(font => (
        <FontPreview key={font} font={font} />
      ))}
    </div>
  )
}
