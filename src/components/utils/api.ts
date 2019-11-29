import request from './request'
const api_prefix: string = LG_CONFIG_API_PREFIX

const  testInterface: string = `${api_prefix}/a/b/c/testurl`

export const test = () => request(testInterface)