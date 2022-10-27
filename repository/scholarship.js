const API = "https://stage.harbour.space/api/v1/scholarship_pages/data-science-apprenticeship-zeptolab"

const requests = {
  async getData() {
    const params = {
      method: "GET",
      headers: {
        "Accept": "application/json",
      }
    }

    return fetch(API, params)
  }
}

export default requests