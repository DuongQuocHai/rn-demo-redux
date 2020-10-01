import axiosService from '../common/axiosService'
import BASE_URL from './base-url'

export const getList = () => {
    return axiosService.get(`${BASE_URL}/todos`)
}