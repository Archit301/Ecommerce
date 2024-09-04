import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

const Profile = () => {
  const {currentUser,error,loading}= useSelector((state)=>state.user)
  const [formData,setFormData]=useState({})
 const [updateSuccess,setUpdateSuccess]=useState(false)
 const [profileData, setProfileData] = useState(null);
   useEffect(()=>{
    setProfileData(currentUser)
   },[currentUser])
 console.log(currentUser)
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <main className="p-6">
          <h1 className="text-2xl font-bold mb-4">My Account</h1>

          {/* Check if profile data is loaded */}
          {profileData ? (
            <>
              <section className="bg-gray-50 p-6 rounded-lg shadow mb-6">
                <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                    <img src={profileData.avatarUrl || "https://via.placeholder.com/100"} alt="Profile Picture" className="w-24 h-24 rounded-full border-2 border-gray-300 object-cover" />
                  </div>

                  <div className="flex-1">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-600 mb-2">Full Name</label>
                        <input type="text" value={profileData.username || ''} className="w-full p-2 border border-gray-300 rounded" disabled />
                      </div>
                      <div>
                        <label className="block text-gray-600 mb-2">Email Address</label>
                        <input type="email" value={profileData.email || ''} className="w-full p-2 border border-gray-300 rounded" disabled />
                      </div>
                      <div>
                        <label className="block text-gray-600 mb-2">Phone Number</label>
                        <input type="tel" value={profileData.phoneNumber || ''} className="w-full p-2 border border-gray-300 rounded" disabled />
                      </div>
                      <div>
                        <label className="block text-gray-600 mb-2">Address</label>
                        <textarea rows="3" className="w-full p-2 border border-gray-300 rounded" disabled>{profileData.address || ''}</textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="bg-gray-50 p-6 rounded-lg shadow">
                <h2 className="text-xl font-semibold mb-4">Account Actions</h2>
                <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Sign Out</button>
              </section>
            </>
          ) : (
            <p>Loading profile data...</p>
          )}
        </main>
      </div>
    </div>
  )
}

export default Profile


// onClick={handleSignOut}