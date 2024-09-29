export const getCookie = (key) => {
    const arr = document.cookie.split(';')
    const cookies = arr.map(cookie => {
        return {type: cookie.split('=')[0]?.trim(), val: cookie.split('=')[1]?.trim()}
    })
    const result = cookies.find(cookie => cookie.type==key)
    return result?.val
}

export const setCookie = (key,value) => {
    document.cookie = `${key}=${value}`
}

export const removeCookie = (key) => {
    document.cookie = `${key}=; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`
}
