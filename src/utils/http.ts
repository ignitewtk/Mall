import qs from "qs"
import * as auth from '../auth-provider'
import { useAuth } from "../context"

const apiUrl = 'https://backend202307112242.azurewebsites.net'

interface Config extends RequestInit {
    token?: string,
    data?: object
}
export const http = async (
        endpoint: string, 
        {data, token, headers, ...customConfig}: Config) => {
    const config = {
        method: 'GET',
        headers: {
            Authorization: token? `Bearer ${token}`: '',
            'Content-Type': data? 'application-json': ''
        },
        mode: 'no-cors',
        ...customConfig
    }

    if (config.method.toUpperCase() === 'GET') {
        endpoint += `?${qs.stringify(data)}`
    } else {
        config.body = JSON.stringify(data || {})
    }
    return window.fetch(`${apiUrl}/${endpoint}`, {}).then(async response => {
        if (response.status === 401) {
            await auth.logout()
            window.location.reload()
            return Promise.reject("Session expired, please sign in again")
        }
        const data = await response.json()
        if (response.ok) {
            return data
        } else {
            // fetch() does not throw an error whatever status (400, 200, 500...) it returns
            // need to mannually throw an error to be catch by catch statement
            return Promise.reject(data)
        }
    })
}

export const useHttp= () => {
    const {user} = useAuth()
    return (
        ...[endpoint, config]: Parameters<typeof http>) => 
        http(endpoint, {...config, token:user?.token})
}