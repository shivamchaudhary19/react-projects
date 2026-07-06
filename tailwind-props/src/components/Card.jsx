import React from 'react'

function Card({username , button} ){
    console.log(username , button);
    return (
        <>
        <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
  <img
    className="w-full h-64 object-cover"
    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600"
    alt="Profile"
  />

  <div className="p-6">
    <h2 className="text-2xl font-bold text-gray-800">
      {username}
    </h2>

    <p className="mt-2 text-gray-600">
      Frontend Developer passionate about building modern, responsive, and user-friendly web applications using React and Tailwind CSS.
    </p>

    <button className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
      {button}
    </button>
  </div>
</div>
</>
    )
}

export default Card