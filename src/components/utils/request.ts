const $ = require('zepto')

export default (url: string, type: string = 'GET', data?: object) => {
    return new Promise(resolve => {
        $.ajax({
            url,
            type,
            data,
            dataType: 'json',
            contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
            xhrFields: {
                withCredentials: true
              },
            success(data: object) {
                resolve(data)
            }
        })
    })
}