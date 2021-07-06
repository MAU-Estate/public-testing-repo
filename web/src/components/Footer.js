import React from 'react'

import Icon from './Icon'

export default function Footer() {
  return (
    <div className="bg-black-b pt-d pb-d3">
      <div className="container text-white">
        <div className="flex justify-between mb-d2">
          <Icon name="logo" className="w-[520px]" />
          <div className="flex items-end">
            <p className="f-3 w-72 mr-20">
              Keep in touch with the estate through our newsletter:
            </p>
            <div className="w-72">
              <label className="h-14 block w-full relative border-b border-grey-b flex text-grey-c">
                <input
                  type="text"
                  className="bg-transparent f-4 outline-none text-grey-c"
                  placeholder="ENTER YOUR EMAIL ADDRESS"
                />
                <Icon name="arrowSignUp" className="h-7 mt-[5px]" />
              </label>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 border-t border-grey-b flex pt-4">
          <div>
            <button
              className="flex f-2"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: 'smooth',
                })
              }}
            >
              Back to top ↑
            </button>
          </div>
          <div>
            <a className="block f-2" href="mailto:estate@maryannunger.com">
              estate@maryannunger.com
            </a>
          </div>
          <div>
            <a className="block f-2" href="https://instagram.com">
              Join us on Instagram
            </a>
          </div>
          <div>
            <div className="f-2">© 2021 Mary Ann Unger Estate</div>
          </div>
        </div>
      </div>
    </div>
  )
}
