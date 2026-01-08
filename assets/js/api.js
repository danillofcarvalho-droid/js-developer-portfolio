
async function fetchProfileData() {
  const response = await fetch(`data/profile.json?v=${Date.now()}`)
  const profileData = await response.json()
  return profileData
}

