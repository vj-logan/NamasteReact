import React from 'react'

const ContactUs = () => {
  return (
    <div className="text-center">
      <h1 className="font-bold text-3xl">ContactUs</h1>
      <form>
        <input className="border border-black m-4" type="text" placeholder="name"/>
        <input className="border border-black m-4" type="text" placeholder="email"/>
        <button className="py-2 px-4 m-4 bg-gray-200">Submit</button>
      </form>
    </div>
  )
}

export default ContactUs