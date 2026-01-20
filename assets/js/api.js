
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/wallacyfalcao/Portfolio-Wallacy/refs/heads/main/data/profile.json?token=GHSAT0AAAAAADRTZSYUFZC7Y5CISK6HLIWM2LPXTMA';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
