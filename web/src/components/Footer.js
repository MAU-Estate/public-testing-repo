import React, { useState } from 'react'

import Icon from './Icon'

export default function Footer() {
  const [mailchimpState, setMailchimpState] = useState()
  const [mailchimpError, setMailchimpError] = useState('')

  const handleMailingListSubmit = async e => {
    e.preventDefault()

    const email = document.getElementById('email')
    mailchimpState && setMailchimpState('')
    fetch('/.netlify/functions/addEmailToMailchimp', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: email.value,
    })
      .then(function (response) {
        return response.json()
      })
      .then(function (data) {
        if (data.status === 400) {
          setMailchimpState('ERROR')
          setMailchimpError(
            data.title === 'Member Exists'
              ? `${email.value} is already signed up`
              : data.detail
          )
        } else {
          setMailchimpState('SUCCESS')
          email.value = ''
        }
      })
  }

  return (
    <div className="bg-black-b pt-d pb-d3">
      <div className="container text-white">
        <div className="flex justify-between mb-d2">
          <Icon name="logo" className="w-[520px]" />
          <div className="flex items-end">
            <p className="f-3 w-72 mr-20">
              Keep in touch with the estate through our newsletter:
            </p>
            <div>
              <form onSubmit={handleMailingListSubmit} className="w-72">
                <label className="h-14 block w-full relative border-b border-grey-b flex text-grey-c">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className={`bg-transparent f-4 outline-none text-grey-c ${
                      mailchimpState === 'SUCCESS' ? 'opacity-0' : ''
                    }`}
                    placeholder="ENTER YOUR EMAIL ADDRESS"
                    required
                  />
                  <button
                    onClick={handleMailingListSubmit}
                    className="h-7 mt-[5px]"
                  >
                    <Icon name="arrowSignUp" className="" />
                  </button>
                  {mailchimpState === 'SUCCESS' && (
                    <div className="absolute left-0 bottom-0 top-0 right-0 flex items-center">
                      <p className="f-4 uppercase">Thank you.</p>
                    </div>
                  )}
                </label>
                {mailchimpState === 'ERROR' && (
                  <div className="mt-4">
                    <p className="f-4 uppercase">{mailchimpError}</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 border-t border-grey-b flex pt-4">
          <div>
            <button
              className="flex f-2 hover:underline"
              style={{ textDecorationThickness: '.5px' }}
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
            <a
              className="block f-2 hover:underline"
              href="mailto:estate@maryannunger.com"
              style={{ textDecorationThickness: '.5px' }}
            >
              estate@maryannunger.com
            </a>
          </div>
          <div>
            <a
              className="block f-2 hover:underline"
              href="https://instagram.com"
              style={{ textDecorationThickness: '.5px' }}
            >
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
